import { defineStore } from "pinia";
import { UserLogin } from "../../../_shared/DTO";
import { authenticate } from "../services";
import router from "../router";

export const useUserStore = defineStore({
  id: "user",
  state: () => {
    return {
      token: "",
      id: "",
      date: 0,
    };
  },
  persist: true,
  getters: {
    user(state) {
      if (this.timeToDie) {
        state.token = "";
        router.push("/login").then((r) => "");
      }
      return { token: state.token, id: state.id };
    },
    timeToDie(state) {
      return state.date - new Date().getSeconds() > 18000;
    },
  },
  actions: {
    async signing(dataUser: UserLogin) {
      const response = await authenticate(dataUser);
      this.$state.token = response.token;
      this.$state.id = response.id;
      this.$state.date = new Date().getSeconds();
    },
    exitSystem() {
      this.$state.token = "";
      router.push("/login").then((r) => "");
    },
  },
});
