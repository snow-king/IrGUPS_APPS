import {
    a as r,
    b as h,
    C as w,
    d as i,
    D as v,
    E as b,
    e as L,
    F as k,
    g as e,
    G as D,
    m as p,
    o as n,
    r as d,
    w as y,
    z as u,
} from "./vue.esm-bundler.b327b46a.js";
import {_ as N} from "./_plugin-vue_export-helper.cdc0426e.js";

const $ = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    "aria-labelledby": "title",
    "aria-describedby": "desc",
    role: "img",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "25",
  },
  F = e("title", null, "Exit", -1),
  B = e("desc", null, "A solid styled icon from Orion Icon Library.", -1),
  M = e(
    "path",
    {
      "data-name": "layer1",
      fill: "#202020",
      d: "M51 17.25L46.75 13 32 27.75 17.25 13 13 17.25 27.75 32 13 46.75 17.25 51 32 36.25 46.75 51 51 46.75 36.25 32 51 17.25z",
    },
    null,
    -1
  ),
  S = [F, B, M],
  _ = i({
    __name: "CrossSVG",
    setup(t) {
      return (o, s) => (n(), r("svg", $, S));
    },
  });
_.__docgenInfo = {
  exportName: "default",
  displayName: "CrossSVG",
  description: "",
  tags: {},
};
const C = (t) => (v("data-v-27579cb2"), (t = t()), b(), t),
  I = { class: "flex justify-end w-full", type: "button" },
  E = C(() =>
    e(
      "div",
      { class: "flex justify-center" },
      [
        e(
          "svg",
          {
            fill: "#000000",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 50 50",
            width: "60px",
            height: "60px",
          },
          [
            e("path", {
              d: "M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  j = { class: "text-center text-sm pt-2 font-medium break-words" },
  m = i({
    __name: "DocElement",
    props: { docName: { type: String, required: !0 } },
    emits: ["delete"],
    setup(t, { emit: o }) {
      return (s, a) => (
        n(),
        h(
          w,
          { name: "bounce", appear: "" },
          {
            default: y(() => [
              e(
                "div",
                {
                  class: "flex-col p-2 w-40 border-2 m-4 rounded-md",
                  onClick: a[0] || (a[0] = (l) => o("delete")),
                },
                [e("button", I, [u(_)]), E, e("div", j, p(t.docName), 1)]
              ),
            ]),
            _: 1,
          }
        )
      );
    },
  });
const Z = N(m, [["__scopeId", "data-v-27579cb2"]]);
m.__docgenInfo = {
  exportName: "default",
  displayName: "DocElement",
  description: "",
  tags: {},
  props: [{ name: "docName", type: { name: "string" }, required: !0 }],
  events: [{ name: "delete" }],
};
const A = {
    class:
      "flex text-xl font-semibold whitespace-nowrap py-4 dark:text-white text-gray-800",
  },
  V = { key: 0, class: "flex justify-center items-center w-full" },
  z = {
    for: "dropzone-file",
    class:
      "flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
  },
  G = { class: "flex flex-col justify-center items-center pt-5 pb-6" },
  q = e(
    "svg",
    {
      "aria-hidden": "true",
      class: "mb-3 w-10 h-10 text-gray-400",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      e("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
      }),
    ],
    -1
  ),
  T = e(
    "p",
    { class: "mb-2 text-sm text-gray-500 dark:text-gray-400" },
    [
      e(
        "span",
        { class: "font-semibold" },
        "\u041A\u043B\u0438\u043A\u043D\u0435\u0442\u0435 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"
      ),
      D(
        " \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B "
      ),
    ],
    -1
  ),
  O = { class: "text-xs text-gray-500 dark:text-gray-400" },
  U = { key: 1 },
  H = i({
    __name: "DocDownloadField",
    props: { text: String },
    emits: ["uploadFile", "deleteDocument"],
    setup(t, { emit: o }) {
      const s = d(),
        a = d(""),
        l = d(!1),
        f = () => {
          o("deleteDocument"), (l.value = !1), o("uploadFile", null);
        },
        x = async () => {
          (a.value = s.value.files[0].name),
            o("uploadFile", s.value.files[0]),
            (l.value = !0);
        };
      return (g, c) => (
        n(),
        r(
          k,
          null,
          [
            e("div", A, p(t.text), 1),
            l.value
              ? (n(),
                r("div", U, [
                  u(Z, { "doc-name": a.value, onDeleteDocument: f }, null, 8, [
                    "doc-name",
                  ]),
                ]))
              : (n(),
                r("div", V, [
                  e("label", z, [
                    e("div", G, [q, T, e("p", O, [L(g.$slots, "default")])]),
                    e(
                      "input",
                      {
                        id: "dropzone-file",
                        type: "file",
                        class: "hidden",
                        ref_key: "file",
                        ref: s,
                        onChange: c[0] || (c[0] = (J) => x()),
                      },
                      null,
                      544
                    ),
                  ]),
                ])),
          ],
          64
        )
      );
    },
  });
H.__docgenInfo = {
  exportName: "default",
  displayName: "DocDownloadField",
  description: "",
  tags: {},
  props: [{ name: "text", type: { name: "string" } }],
  events: [{ name: "uploadFile" }, { name: "deleteDocument" }],
  slots: [{ name: "default" }],
};
export { Z as D, H as _, _ as a };
//# sourceMappingURL=DocDownloadField.2c3f55ea.js.map
