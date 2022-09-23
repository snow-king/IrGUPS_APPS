import {_ as e, V as r} from "./TableWrapper.bb24f993.js";
import "./vue.esm-bundler.b327b46a.js";
import "./_plugin-vue_export-helper.cdc0426e.js";

const s = {
    parameters: {
      storySource: {
        source: `import TableWrapper from '../components/UtilityIrgupsComponents/TableWrapper.vue';\r
import VoidTableElement from '../components/UtilityIrgupsComponents/VoidTableElement.vue';\r
\r
export default {\r
    title: 'UtilityComponent/TableWrapper',\r
    component: {TableWrapper},\r
    subcomponents: {VoidTableElement},\r
    argTypes:{\r
        columns: {\r
            required: true,\r
            type: Array\r
        },\r
        enumerable: Boolean,\r
        emptySlot: Boolean,\r
    }\r
}\r
const Template = (args) => ({\r
    // Components used in your story \`template\` are defined in the \`components\` object\r
    components: {TableWrapper,VoidTableElement },\r
    // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
    setup() {\r
        return { args };\r
    },\r
    // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
    template: '<TableWrapper v-bind="args" > ' +\r
        '<VoidTableElement :column="args.enumerable || args.emptyslot ? args.columns.length-1 : args.columns.length -2 "> ' +\r
        '</TableWrapper>',\r
});\r
\r
export const Numeric = Template.bind({})\r
Numeric.args = {\r
    columns: ['\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A','\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A','\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A'],\r
    enumerable: true,\r
    emptySlot: false\r
}`,
        locationsMap: {
          numeric: {
            startLoc: { col: 17, line: 17 },
            endLoc: { col: 2, line: 28 },
            startBody: { col: 17, line: 17 },
            endBody: { col: 2, line: 28 },
          },
        },
      },
    },
    title: "UtilityComponent/TableWrapper",
    component: { TableWrapper: e },
    subcomponents: { VoidTableElement: r },
    argTypes: {
      columns: { required: !0, type: Array },
      enumerable: Boolean,
      emptySlot: Boolean,
    },
  },
  t = (n) => ({
    components: { TableWrapper: e, VoidTableElement: r },
    setup() {
      return { args: n };
    },
    template:
      '<TableWrapper v-bind="args" > <VoidTableElement :column="args.enumerable || args.emptyslot ? args.columns.length-1 : args.columns.length -2 "> </TableWrapper>',
  }),
  o = t.bind({});
o.args = {
  columns: [
    "\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    "\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    "\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
  ],
  enumerable: !0,
  emptySlot: !1,
};
const m = ["Numeric"];
export { o as Numeric, m as __namedExportsOrder, s as default };
//# sourceMappingURL=TableWrapper.stories.ec2acc6e.js.map
