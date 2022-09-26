import {defineStore} from "pinia";
import {Person, Specialty, StudCard, User} from "../../../_shared/DTO";
import {getPerson} from "../services";

export const useStudentStore = defineStore({
  id: "student",
  state: () => {
    return {
      PersonData: {} as Person,
    };
  },
  persist: true,
  getters: {
    id(): number {
      return this.PersonData.id;
    },
    StudCard(): StudCard {
      return this.PersonData.stud_card;
    },
    Specialty(): Specialty {
      return this.PersonData.specialty as Specialty;
    },
    group(): Number {
      return this.PersonData.stud_card.activeCourse.group_id;
    },
  },
  actions: {
    async getStudent(user: User, id: string) {
      let response = await getPerson(user, id);
      if (typeof response !== "string") {
        this.PersonData = response as Person;
      }
    },
    resetStudent() {
      this.PersonData = {} as Person;
    },
  },
});
