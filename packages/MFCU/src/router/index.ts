import { useUserStore } from "../stores/useUserStore";
import AuthPage from "../views/AuthPage.vue";
import HomePage from "../views/HomePage.vue";
import PersonalCabDocumentPage from "../views/PersonalCabDocumentsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: `/login`, name: "AuthPage", component: AuthPage },
    { path: `/home`, name: "HomePage", component: HomePage },
    {
      path: "/documentsPC/:cabinet",
      name: "DocumentsPersonCab",
      component: PersonalCabDocumentPage,
    },
  ],
});
router.beforeEach(async (to, from) => {
  const userStore = useUserStore();
  if (
    // make sure the user is authenticated
    !userStore.token &&
    // ❗️ Avoid an infinite redirect
    to.name !== "AuthPage"
  ) {
    // redirect the user to the login page
    return { name: "AuthPage" };
  }
});

export default router;
