import NavBar from "../../../PLK/src/components/NavBar.vue";
import vueRouter from "storybook-vue3-router";

export default {
  title: "UtilityComponent/NavBar",
  component: { NavBar },
  argTypes: {},
};
const customRoutes = [
  {
    path: "/FamilyPage",
    name: "FamilyPage",
    component: "", // this would need to be defined/imported into the `.stories` file
  },
  {
    path: "/ParentPage",
    name: "ParentPage",
    component: "", // this would need to be defined/imported into the `.stories` file
  },
];
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NavBar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: "<NavBar/>",
});
export const Standard = Template.bind({});
Standard.decorators = [vueRouter(customRoutes)];
