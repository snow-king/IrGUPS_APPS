import TableWrapper from "plk-client/src/components/TableWrapper.vue";
import VoidTableElement from "plk-client/src/components/VoidTableElement.vue";

export default {
  title: "UtilityComponent/TableWrapper",
  component: { TableWrapper },
  subcomponents: { VoidTableElement },
  argTypes: {
    columns: {
      required: true,
      type: Array,
    },
    enumerable: Boolean,
    emptySlot: Boolean,
    roundedTop: Boolean,
  },
};
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TableWrapper, VoidTableElement },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<TableWrapper v-bind="args" > ' +
    '<VoidTableElement :column="args.enumerable || args.emptyslot ? args.columns.length-1 : args.columns.length -2 "> ' +
    "</TableWrapper>",
});

export const Numeric = Template.bind({});
Numeric.args = {
  columns: ["заголовок", "заголовок", "заголовок"],
  enumerable: true,
  emptySlot: false,
  roundedTop: true,
};
