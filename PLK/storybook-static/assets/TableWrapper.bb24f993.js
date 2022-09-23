import {
    a as s,
    a0 as c,
    b as _,
    C as y,
    d as n,
    D as g,
    E as b,
    e as f,
    F as p,
    f as d,
    g as e,
    m as h,
    o as t,
    w as m,
} from "./vue.esm-bundler.b327b46a.js";
import {_ as x} from "./_plugin-vue_export-helper.cdc0426e.js";

const o = (a) => (g("data-v-0db2a04d"), (a = a()), b(), a),
  k = {
    class:
      "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 animate-pulse",
  },
  w = o(() =>
    e(
      "th",
      {
        scope: "row",
        class:
          "py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",
      },
      [
        e("div", {
          class: "h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32",
        }),
      ],
      -1
    )
  ),
  v = o(() =>
    e(
      "div",
      { class: "h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" },
      null,
      -1
    )
  ),
  V = [v],
  S = o(() =>
    e(
      "td",
      { class: "py-4 px-6" },
      [
        e("div", {
          class: "h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32",
        }),
      ],
      -1
    )
  ),
  $ = o(() =>
    e(
      "td",
      { class: "py-4 px-6 text-right" },
      [
        e("div", {
          class: "h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32",
        }),
      ],
      -1
    )
  ),
  u = n({
    __name: "VoidTableElement",
    props: { column: { type: Number, required: !0 } },
    setup(a) {
      return (l, i) => (
        t(),
        _(
          y,
          { appear: "", name: "slide-dropdown" },
          {
            default: m(() => [
              e("tr", k, [
                w,
                (t(!0),
                s(
                  p,
                  null,
                  c(
                    a.column - 1,
                    (r) => (t(), s("td", { class: "py-4 px-6", key: r }, V))
                  ),
                  128
                )),
                S,
                $,
              ]),
            ]),
            _: 1,
          }
        )
      );
    },
  });
const j = x(u, [["__scopeId", "data-v-0db2a04d"]]);
u.__docgenInfo = {
  exportName: "default",
  displayName: "VoidTableElement",
  description: "",
  tags: {},
  props: [{ name: "column", type: { name: "number" }, required: !0 }],
};
const E = {
    class: "overflow-x-auto relative shadow-md sm:rounded-lg my-4 mb-20",
  },
  N = {
    class:
      "w-full text-sm text-left text-gray-700 dark:text-gray-400 border-collapse overflow-hidden",
  },
  T = {
    class:
      "text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400",
  },
  B = { key: 0, scope: "col", class: "py-3 px-6" },
  I = { key: 1, class: "py-3 px-6" },
  q = e("span", { class: "sr-only" }, "Edit", -1),
  C = [q],
  D = n({
    __name: "TableWrapper",
    props: {
      columns: { type: Object, required: !0 },
      enumerable: { type: Boolean, default: !1 },
      emptySlot: { type: Boolean, default: !1 },
    },
    setup(a) {
      return (l, i) => (
        t(),
        s("div", E, [
          e("table", N, [
            e("thead", T, [
              e("tr", null, [
                a.enumerable ? (t(), s("th", B, " \u2116 ")) : d("", !0),
                (t(!0),
                s(
                  p,
                  null,
                  c(
                    a.columns,
                    (r) => (
                      t(),
                      s(
                        "th",
                        { scope: "col", class: "py-3 px-6", key: r },
                        h(r),
                        1
                      )
                    )
                  ),
                  128
                )),
                a.emptySlot ? (t(), s("th", I, C)) : d("", !0),
              ]),
            ]),
            e("tbody", null, [f(l.$slots, "default")]),
          ]),
        ])
      );
    },
  });
D.__docgenInfo = {
  exportName: "default",
  displayName: "TableWrapper",
  description: "",
  tags: {},
  props: [
    { name: "columns", type: { name: "Array<string>" }, required: !0 },
    {
      name: "enumerable",
      type: { name: "boolean" },
      defaultValue: { func: !1, value: "false" },
    },
    {
      name: "emptySlot",
      type: { name: "boolean" },
      defaultValue: { func: !1, value: "false" },
    },
  ],
  slots: [{ name: "default" }],
};
export { j as V, D as _ };
//# sourceMappingURL=TableWrapper.bb24f993.js.map
