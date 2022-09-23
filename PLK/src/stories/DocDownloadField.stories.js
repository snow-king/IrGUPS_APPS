import DocDownloadField from "../../../_shared/components/DocDownloadField.vue";

export default {
  title: "UtilityComponent/DocDownloadFiled",
  component: { DocDownloadField },
  argTypes: {
    text: String,
  },
};
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DocDownloadField },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    "<DocDownloadField>- Не более 15 МБ;\n" +
    "        <br>\n" +
    "        - Формат: JPG, PDF</DocDownloadField>",
});

export const Default = Template.bind({});
Default.args = {
  text: "Загрузите копию документа:",
};
