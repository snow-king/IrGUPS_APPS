import "./jsx-runtime.9dff8acf.js";
import {A as s, c as t, M as l} from "./Props.53e66bbb.js";
import "./iframe.657ba62d.js";
import "./string.dd967029.js";
import "./es.map.constructor.3fc5bb37.js";
import "./es.number.to-fixed.04f7b86b.js";

function a() {
  return (
    (a = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (o[i] = n[i]);
          }
          return o;
        }),
    a.apply(this, arguments)
  );
}
const m = {},
  d = "wrapper";
function p({ components: o, ...r }) {
  return t(
    d,
    a({}, m, r, { components: o, mdxType: "MDXLayout" }),
    t(l, { title: "Example/Introduction", mdxType: "Meta" }),
    t(
      "style",
      null,
      `
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `
    ),
    t(
      "h1",
      null,
      "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 Storybook PLK"
    ),
    t(
      "p",
      null,
      "\u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u041B\u0438\u0447\u043D\u043E\u0433\u043E \u041A\u0430\u0431\u0438\u043D\u0435\u0442\u0430 \u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044F"
    )
  );
}
p.isMDXComponent = !0;
const x = () => {
  throw new Error("Docs-only story");
};
x.parameters = { docsOnly: !0 };
const e = { title: "Example/Introduction", includeStories: ["__page"] },
  g = {};
e.parameters = e.parameters || {};
e.parameters.docs = {
  ...(e.parameters.docs || {}),
  page: () =>
    t(s, { mdxStoryNameToKey: g, mdxComponentAnnotations: e }, t(p, null)),
};
const w = ["__page"];
export { w as __namedExportsOrder, x as __page, e as default };
//# sourceMappingURL=Introduction.stories.c91d5189.js.map
