import {A as e} from "./AccordionWrapper.5ca734af.js";
import "./vue.esm-bundler.b327b46a.js";
import "./_plugin-vue_export-helper.cdc0426e.js";

const c = {
    parameters: {
      storySource: {
        source: `import AccordionWrapper from '../components/UtilityIrgupsComponents/AccordionWrapper.vue';\r
\r
export default {\r
    title: 'UtilityComponent/AccordionWrapper',\r
    component: {AccordionWrapper},\r
    argTypes: {\r
        text: String,\r
        ready: Boolean,\r
    }\r
\r
}\r
const Template = (args) => ({\r
    // Components used in your story \`template\` are defined in the \`components\` object\r
    components: {AccordionWrapper},\r
    // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
    setup() {\r
        return {args};\r
    },\r
    // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
    template: '<AccordionWrapper v-bind="args" > ' +\r
        '<div class="p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>' +\r
        '</AccordionWrapper>',\r
});\r
\r
export const Ready = Template.bind({})\r
Ready.args = {\r
    text: 'Some text',\r
    ready: true\r
}\r
export const WaitingData = Template.bind({})\r
WaitingData.args = {\r
    text: 'UploadData',\r
    ready:false\r
}\r
`,
        locationsMap: {
          ready: {
            startLoc: { col: 17, line: 12 },
            endLoc: { col: 2, line: 23 },
            startBody: { col: 17, line: 12 },
            endBody: { col: 2, line: 23 },
          },
          "waiting-data": {
            startLoc: { col: 17, line: 12 },
            endLoc: { col: 2, line: 23 },
            startBody: { col: 17, line: 12 },
            endBody: { col: 2, line: 23 },
          },
        },
      },
    },
    title: "UtilityComponent/AccordionWrapper",
    component: { AccordionWrapper: e },
    argTypes: { text: String, ready: Boolean },
  },
  t = (r) => ({
    components: { AccordionWrapper: e },
    setup() {
      return { args: r };
    },
    template:
      '<AccordionWrapper v-bind="args" > <div class="p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div></AccordionWrapper>',
  }),
  o = t.bind({});
o.args = { text: "Some text", ready: !0 };
const n = t.bind({});
n.args = { text: "UploadData", ready: !1 };
const p = ["Ready", "WaitingData"];
export { o as Ready, n as WaitingData, p as __namedExportsOrder, c as default };
//# sourceMappingURL=AccordionWrapper.stories.e57b1ad5.js.map
