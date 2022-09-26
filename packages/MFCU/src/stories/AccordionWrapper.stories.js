import AccordionWrapper from "../../../_shared/components/AccordionWrapper.vue";

export default {
  title: "UtilityComponent/AccordionWrapper",
  component: { AccordionWrapper },
  argTypes: {
    text: String,
    ready: Boolean,
  },
};
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AccordionWrapper },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<AccordionWrapper v-bind="args" > ' +
    '<div class="p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>' +
    "</AccordionWrapper>",
});

export const Ready = Template.bind({});
Ready.args = {
  text: "Some text",
  ready: true,
};
export const WaitingData = Template.bind({});
WaitingData.args = {
  text: "UploadData",
  ready: false,
};
