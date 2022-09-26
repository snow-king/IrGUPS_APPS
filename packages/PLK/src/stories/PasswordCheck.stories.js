import PasswordInput from "../../../_shared/components/passwordCheck/PasswordInput.vue";

export default {
  title: "UtilityComponent/PasswordCheck",
  component: PasswordInput,
  argTypes: {
    password: String,
  },
};
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PasswordInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<PasswordInput :v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  password: "",
};
