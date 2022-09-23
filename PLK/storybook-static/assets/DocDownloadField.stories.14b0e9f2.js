import {_ as o} from "./DocDownloadField.2c3f55ea.js";
import "./vue.esm-bundler.b327b46a.js";
import "./_plugin-vue_export-helper.cdc0426e.js";

const d = {
    parameters: {
      storySource: {
        source: `import DocDownloadField from '../components/UtilityIrgupsComponents/DocDownloadField.vue'\r
\r
export default {\r
    title: "UtilityComponent/DocDownloadFiled",\r
    component: {DocDownloadField},\r
    argTypes: {\r
        text: String\r
    }\r
}\r
const Template = (args) => ({\r
    // Components used in your story \`template\` are defined in the \`components\` object\r
    components: {DocDownloadField},\r
    // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
    setup() {\r
        return {args};\r
    },\r
    // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
    template: '<DocDownloadField>- \u041D\u0435 \u0431\u043E\u043B\u0435\u0435 15 \u041C\u0411;\\n' +\r
        '        <br>\\n' +\r
        '        - \u0424\u043E\u0440\u043C\u0430\u0442: JPG, PDF</DocDownloadField>',\r
});\r
\r
export const Default = Template.bind({})\r
Default.args= {\r
    text: '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043A\u043E\u043F\u0438\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430:'\r
}`,
        locationsMap: {
          default: {
            startLoc: { col: 17, line: 10 },
            endLoc: { col: 2, line: 21 },
            startBody: { col: 17, line: 10 },
            endBody: { col: 2, line: 21 },
          },
        },
      },
    },
    title: "UtilityComponent/DocDownloadFiled",
    component: { DocDownloadField: o },
    argTypes: { text: String },
  },
  e = (n) => ({
    components: { DocDownloadField: o },
    setup() {
      return { args: n };
    },
    template: `<DocDownloadField>- \u041D\u0435 \u0431\u043E\u043B\u0435\u0435 15 \u041C\u0411;
        <br>
        - \u0424\u043E\u0440\u043C\u0430\u0442: JPG, PDF</DocDownloadField>`,
  }),
  t = e.bind({});
t.args = {
  text: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043A\u043E\u043F\u0438\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430:",
};
const i = ["Default"];
export { t as Default, i as __namedExportsOrder, d as default };
//# sourceMappingURL=DocDownloadField.stories.14b0e9f2.js.map
