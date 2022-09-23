import {useUserStore} from "../stores/useUserStore";
import AuthPage from "../views/AuthPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import PersonPage from "../views/PersonPage.vue";
import NotFound from "../views/NotFound.vue";
import FamilyPage from "../views/FamilyPage.vue";
import ChildPage from "../views/ChildPage.vue";
import OrdersPage from "../views/OrdersPage.vue";
import AttendancePage from "../views/AttendancePage.vue";
import SchedulePage from "../views/SchedulePage.vue";
import AcademicPlanPage from "../views/AcademicPlanPage.vue";
import AcademicPerformance from "../views/AcademicPerformancePage.vue";
import DebtPage from "../views/DebtPage.vue";

const subUrl = import.meta.env.VITE_BACKEND_SUB_URL;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: `/login`, name: "AuthPage", component: AuthPage },
    { path: `/parent`, name: "ParentPage", component: PersonPage },
    { path: `/:pathMatch(.*)*`, name: "NotFound", component: NotFound },
    { path: `/family`, name: "FamilyPage", component: FamilyPage },
    { path: `/family/:id`, name: "Child", component: ChildPage },
    { path: `/family/:id/orders`, name: "Orders", component: OrdersPage },
    {
      path: `/family/:id/attendance`,
      name: "Attendance",
      component: AttendancePage,
    },
    { path: `/family/:id/schedule`, name: "Schedule", component: SchedulePage },
    {
      path: `/family/:id/uchplan`,
      name: "Uchplan",
      component: AcademicPlanPage,
    },
    {
      path: `/family/:id/academicPerformance`,
      name: "AcademicPerformance",
      component: AcademicPerformance,
    },
    { path: `/family/:id/debt`, name: "Debt", component: DebtPage },
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
