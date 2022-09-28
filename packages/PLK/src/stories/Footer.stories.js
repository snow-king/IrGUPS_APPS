import PageFooter from "../components/TheFooter.vue";

export default {
  title: "UtilityComponent/Footer",
  component: { PageFooter },
  argTypes: {},
};
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PageFooter },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: "<PageFooter/>",
});
export const Standard = Template.bind({});
Standard.args = {};
