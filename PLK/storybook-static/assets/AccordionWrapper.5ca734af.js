import {
    a as p,
    A as Y,
    b as T,
    B as Q,
    C as X,
    d as k,
    e as x,
    f as h,
    g as u,
    h as C,
    i as U,
    j as i,
    k as H,
    l as V,
    m as F,
    n as f,
    o as g,
    p as R,
    q as G,
    r as m,
    T as j,
    t as B,
    u as v,
    v as K,
    w as $,
    x as Z,
    y as q,
    z as J,
} from "./vue.esm-bundler.b327b46a.js";
import {_ as ee} from "./_plugin-vue_export-helper.cdc0426e.js";

const te = "/assets/icons-expand.d9e4ea55.svg";
var D = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var l = {}.hasOwnProperty;
    function n() {
      for (var r = [], t = 0; t < arguments.length; t++) {
        var s = arguments[t];
        if (!!s) {
          var a = typeof s;
          if (a === "string" || a === "number") r.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var c = n.apply(null, s);
              c && r.push(c);
            }
          } else if (a === "object")
            if (s.toString === Object.prototype.toString)
              for (var d in s) l.call(s, d) && s[d] && r.push(d);
            else r.push(s.toString());
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(D);
var y = D.exports;
const se = {
    0: "w-0 h-0",
    0.5: "w-0.5 h-0.5",
    1: "w-1 h-1",
    1.5: "w-1.5 h-1.5",
    10: "w-10 h-10",
    11: "w-11 h-11",
    12: "w-12 h-12",
    2: "w-2 h-2",
    2.5: "w-2.5 h-2.5",
    3: "w-3 h-3",
    4: "w-4 h-4",
    5: "w-5 h-5",
    6: "w-6 h-6",
    7: "w-7 h-7",
    8: "w-8 h-8",
    9: "w-9 h-9",
    px: "w-px h-px",
  },
  le = {
    blue: "fill-blue-600",
    gray: "fill-gray-600 dark:fill-gray-300",
    green: "fill-green-500",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    red: "fill-red-600",
    yellow: "fill-yellow-400",
    white: "fill-white",
  };
function re(e) {
  const l = i(() => se[e.size.value]),
    n = i(() => le[e.color.value]),
    r = i(() => "text-gray-200 dark:text-gray-600"),
    t = i(() => "animate-spin");
  return { spinnerClasses: i(() => y(l.value, r.value, n.value, t.value)) };
}
const ne = u(
    "path",
    {
      d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  ae = u(
    "path",
    {
      d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
      fill: "currentFill",
    },
    null,
    -1
  ),
  oe = [ne, ae],
  ie = k({
    __name: "Spinner",
    props: {
      size: { type: String, default: "4" },
      color: { type: String, default: "blue" },
    },
    setup(e) {
      const l = e,
        { spinnerClasses: n } = re(B(l));
      return (r, t) => (
        g(),
        p(
          "svg",
          {
            role: "status",
            class: f(v(n)),
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          oe,
          2
        )
      );
    },
  }),
  ue = "flowbite-themable-injection-key",
  w = {
    blue: {
      background: "bg-blue-700 dark:bg-blue-600",
      disabled: "",
      hover: "hover:bg-blue-800 dark:hover:bg-blue-700",
      text: "text-blue-600 dark:text-blue-500",
      border: "border-blue-600 dark:border-blue-500",
      focus: "focus:ring-blue-300 dark:focus:ring-blue-800",
    },
    green: {
      background: "bg-green-700 dark:bg-green-600",
      disabled: "",
      hover: "hover:bg-green-800 dark:hover:bg-green-700",
      text: "text-green-600 dark:text-green-500",
      border: "border-green-600 dark:border-green-500",
      focus: "focus:ring-green-300 dark:focus:ring-green-800",
    },
    pink: {
      background: "bg-pink-700 dark:bg-pink-600",
      disabled: "",
      hover: "hover:bg-pink-800 dark:hover:bg-pink-700",
      text: "text-pink-600 dark:text-pink-500",
      border: "border-pink-600 dark:border-pink-500",
      focus: "focus:ring-pink-300 dark:focus:ring-pink-900",
    },
    purple: {
      background: "bg-purple-700 dark:bg-purple-600",
      disabled: "",
      hover: "hover:bg-purple-800 dark:hover:bg-purple-700",
      text: "text-purple-600 dark:text-purple-500",
      border: "border-purple-600 dark:border-purple-500",
      focus: "focus:ring-purple-300 dark:focus:ring-purple-900",
    },
    red: {
      background: "bg-red-700 dark:bg-red-600",
      disabled: "",
      hover: "hover:bg-red-800 dark:hover:bg-red-700",
      text: "text-red-600 dark:text-red-500",
      border: "border-red-600 dark:border-red-500",
      focus: "focus:ring-red-300 dark:focus:ring-red-900",
    },
  };
function de(e) {
  const l = G(ue, m(null)),
    n = i(() => !!(l != null && l.value)),
    r = i(() => (l == null ? void 0 : l.value) || void 0),
    t = i(() => e || l.value),
    s = i(() => (t.value ? w[t.value].background : "")),
    a = i(() => (t.value ? w[t.value].disabled : "")),
    c = i(() => (t.value ? w[t.value].hover : "")),
    d = i(() => (t.value ? w[t.value].text : "")),
    b = i(() => (t.value ? w[t.value].border : "")),
    o = i(() => (t.value ? w[t.value].focus : ""));
  return {
    backgroundClasses: s,
    disabledClasses: a,
    hoverClasses: c,
    textClasses: d,
    borderClasses: b,
    focusClasses: o,
    isActive: n,
    color: r,
  };
}
function ce(e) {
  var l;
  const {
    textClasses: n,
    borderClasses: r,
    backgroundClasses: t,
    hoverClasses: s,
    disabledClasses: a,
    focusClasses: c,
    isActive: d,
  } = de((l = e.theme) == null ? void 0 : l.value);
  return {
    classes: i(() => {
      if (!d.value) return "";
      const o = [];
      return (
        e.apply.value.includes("text") && o.push(n.value),
        e.apply.value.includes("border") && o.push(r.value),
        e.apply.value.includes("background") && o.push(t.value),
        e.apply.value.includes("hover") && o.push(s.value),
        e.apply.value.includes("disabled") && o.push(a.value),
        e.apply.value.includes("focus") && o.push(c.value),
        o.join(" ")
      );
    }),
  };
}
const ge = { border: (e) => e.substring(0, e.lastIndexOf("-")) },
  fe = (e, l = ge) => {
    const r = Object.keys(l).find((t) => e.includes(t));
    return r ? l[r](e) : e.substring(0, e.indexOf("-"));
  };
function _(...e) {
  return e
    .reduce(
      (l, n) => {
        const r = Array.isArray(n)
            ? Array.from(n)
                .map((o) => o.split(" "))
                .flat()
            : n.split(" "),
          t = r.map((o) => fe(o)),
          s = t.filter((o) => !l.types.includes(o)),
          c = [...t.filter((o) => l.types.includes(o)), ...s],
          d = [...new Set([...l.types, ...c])],
          b = d
            .map((o) => {
              if (c.includes(o)) {
                const N = t.indexOf(o);
                if (N >= 0) return r[N] || "";
              }
              const S = l.types.indexOf(o);
              return (S >= 0 && l.classes[S]) || "";
            })
            .filter((o) => !!o);
        return { types: d, classes: b };
      },
      { types: [], classes: [] }
    )
    .classes.join(" ");
}
const ve = k({
    __name: "FlowbiteThemableChild",
    props: {
      apply: { type: Array, required: !0 },
      tag: { type: String, default: "div" },
      theme: { type: String, default: void 0 },
    },
    setup(e) {
      const l = e,
        n = U(),
        { classes: r } = ce(B(l)),
        t = i(() => n.class || "");
      return (s, a) => (
        g(),
        T(
          H(e.tag),
          { class: f(v(_)(v(t), v(r))) },
          { default: $(() => [x(s.$slots, "default")]), _: 3 },
          8,
          ["class"]
        )
      );
    },
  }),
  pe = "p-4 text-sm",
  be = {
    danger: "text-red-700 dark:text-red-800",
    dark: "text-gray-700 dark:text-gray-300",
    info: "text-blue-700 dark:text-blue-800",
    success: "text-green-700 dark:text-green-800",
    warning: "text-yellow-700 dark:text-yellow-800",
  },
  he = {
    danger: "bg-red-100 dark:bg-red-200",
    dark: "bg-gray-100 dark:bg-gray-700",
    info: "bg-blue-100 dark:bg-blue-200",
    success: "bg-green-100 dark:bg-green-200",
    warning: "bg-yellow-100 dark:bg-yellow-200",
  },
  ye = {
    danger: "border-t-4 border-red-500",
    dark: "border-t-4 border-gray-500",
    info: "border-t-4 border-blue-500",
    success: "border-t-4 border-green-500",
    warning: "border-t-4 border-yellow-500",
  },
  me =
    "ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8",
  we = {
    danger:
      "hover:bg-red-200 dark:hover:bg-red-300 focus:ring-red-400 bg-red-100 dark:bg-red-200 text-red-500",
    dark: "dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white hover:bg-gray-200 focus:ring-gray-400 bg-gray-100 text-gray-500",
    info: "hover:bg-blue-200 dark:hover:bg-blue-300 focus:ring-blue-400 bg-blue-100 dark:bg-blue-200 text-blue-500",
    success:
      "bg-green-100 dark:bg-green-200 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-300",
    warning:
      "focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-300 bg-yellow-100 dark:bg-yellow-200 text-yellow-500",
  };
function xe(e) {
  const l = i(() =>
      y(
        pe,
        he[e.type.value],
        n.value,
        e.border.value ? ye[e.type.value] : "rounded-lg",
        e.inline.value ? "flex" : ""
      )
    ),
    n = i(() => y(be[e.type.value])),
    r = i(() => y(me, we[e.type.value])),
    t = i(() =>
      e.inline.value
        ? !e.icon.value && !e.title.value
          ? ""
          : y(e.title.value ? "ml-1" : "ml-3")
        : y("mt-2 mb-4")
    ),
    s = i(() =>
      !e.icon.value || !e.inline.value
        ? y("font-medium", e.inline.value ? "" : "text-lg ml-2")
        : y("font-medium ml-3", e.inline.value ? "" : "text-lg")
    );
  return {
    alertClasses: l,
    textClasses: n,
    closeClasses: r,
    contentClasses: t,
    titleClasses: s,
  };
}
const ke = u(
    "path",
    {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
      "clip-rule": "evenodd",
    },
    null,
    -1
  ),
  Ce = [ke],
  _e = u("span", { class: "sr-only" }, "Dismiss", -1),
  Te = u(
    "svg",
    {
      class: "w-5 h-5",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      u("path", {
        "fill-rule": "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        "clip-rule": "evenodd",
      }),
    ],
    -1
  ),
  $e = [_e, Te],
  Be = { key: 0, class: "inline-flex items-center" },
  Ae = u("span", { class: "sr-only" }, "Dismiss", -1),
  Le = u(
    "svg",
    {
      class: "w-5 h-5",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      u("path", {
        "fill-rule": "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        "clip-rule": "evenodd",
      }),
    ],
    -1
  ),
  Se = [Ae, Le],
  tt = k({
    __name: "Alert",
    props: {
      type: { type: String, default: "info" },
      title: { type: String, default: "" },
      closable: { type: Boolean, default: !1 },
      icon: { type: Boolean, default: !0 },
      border: { type: Boolean, default: !1 },
      inline: { type: Boolean, default: !0 },
    },
    setup(e) {
      const l = e,
        {
          alertClasses: n,
          textClasses: r,
          closeClasses: t,
          contentClasses: s,
          titleClasses: a,
        } = xe(B(l)),
        c = m(!0),
        d = () => {
          c.value = !1;
        };
      return (
        V(() => {
          console.log("UNMOUNTED");
        }),
        (b, o) =>
          c.value
            ? (g(),
              p(
                "div",
                { key: 0, class: f(v(n)), role: "alert" },
                [
                  u(
                    "div",
                    { class: f(e.inline ? "flex" : "flex items-center") },
                    [
                      e.icon
                        ? (g(),
                          p(
                            "svg",
                            {
                              key: 0,
                              class: f(["flex-shrink-0", "w-5", "h-5", v(r)]),
                              fill: "currentColor",
                              viewBox: "0 0 20 20",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                            Ce,
                            2
                          ))
                        : h("", !0),
                      e.title
                        ? (g(),
                          p("span", { key: 1, class: f(v(a)) }, F(e.title), 3))
                        : h("", !0),
                      !e.inline && e.closable
                        ? (g(),
                          p(
                            "button",
                            {
                              key: 2,
                              type: "button",
                              class: f(v(t)),
                              "aria-label": "Close",
                              onClick: d,
                            },
                            $e,
                            2
                          ))
                        : h("", !0),
                    ],
                    2
                  ),
                  u("div", { class: f(v(s)) }, [x(b.$slots, "default")], 2),
                  b.$slots.actions
                    ? (g(), p("div", Be, [x(b.$slots, "actions")]))
                    : h("", !0),
                  e.inline && e.closable
                    ? (g(),
                      p(
                        "button",
                        {
                          key: 1,
                          type: "button",
                          class: f(v(t)),
                          "aria-label": "Close",
                          onClick: d,
                        },
                        Se,
                        2
                      ))
                    : h("", !0),
                ],
                2
              ))
            : h("", !0)
      );
    },
  });
var M;
const W = typeof window < "u";
W &&
  ((M = window == null ? void 0 : window.navigator) == null
    ? void 0
    : M.userAgent) &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ne(e) {
  return K() ? (Z(e), !0) : !1;
}
function Me(e, l, n = {}) {
  const { immediate: r = !0 } = n,
    t = m(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), (s = null));
  }
  function c() {
    (t.value = !1), a();
  }
  function d(...b) {
    a(),
      (t.value = !0),
      (s = setTimeout(() => {
        (t.value = !1), (s = null), e(...b);
      }, v(l)));
  }
  return (
    r && ((t.value = !0), W && d()), Ne(c), { isPending: t, start: d, stop: c }
  );
}
const A =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  L = "__vueuse_ssr_handlers__";
A[L] = A[L] || {};
A[L];
var z;
(function (e) {
  (e.UP = "UP"),
    (e.RIGHT = "RIGHT"),
    (e.DOWN = "DOWN"),
    (e.LEFT = "LEFT"),
    (e.NONE = "NONE");
})(z || (z = {}));
const ze = {
    danger: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
    empty: "",
    success:
      "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
    warning:
      "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200",
  },
  Oe = { center: "items-center", end: "items-end", start: "items-start" },
  O =
    "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
  I = "text-sm font-normal";
function Ie(e) {
  const l = i(() => ze[e.type.value]),
    n = i(() => {
      const t = Oe[e.alignment.value];
      return e.divide.value
        ? _(O, "dark:divide-gray-700 divide-x divide-gray-200", t)
        : _(O, t);
    }),
    r = i(() =>
      e.type.value !== "empty" && e.divide.value ? _(I, "pl-3") : I
    );
  return { typeClasses: l, wrapperClasses: n, contentClasses: r };
}
const Ee = {
    key: 1,
    "aria-hidden": "true",
    class: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
  },
  je = u(
    "path",
    {
      "fill-rule": "evenodd",
      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
      "clip-rule": "evenodd",
    },
    null,
    -1
  ),
  Fe = [je],
  De = {
    key: 2,
    "aria-hidden": "true",
    class: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
  },
  We = u(
    "path",
    {
      "fill-rule": "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      "clip-rule": "evenodd",
    },
    null,
    -1
  ),
  Pe = [We],
  Re = {
    key: 3,
    "aria-hidden": "true",
    class: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Ue = u(
    "path",
    {
      "fill-rule": "evenodd",
      d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
      "clip-rule": "evenodd",
    },
    null,
    -1
  ),
  He = [Ue],
  Ve = u("span", { class: "sr-only" }, "Close", -1),
  Ge = u(
    "svg",
    {
      class: "w-5 h-5",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      u("path", {
        "fill-rule": "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        "clip-rule": "evenodd",
      }),
    ],
    -1
  ),
  Ke = [Ve, Ge],
  E = k({
    __name: "Toast",
    props: {
      type: { type: String, default: "empty" },
      alignment: { type: String, default: "center" },
      closable: { type: Boolean, default: !1 },
      divide: { type: Boolean, default: !1 },
    },
    emits: ["close"],
    setup(e, { emit: l }) {
      const n = e,
        r = m(!0),
        { typeClasses: t, wrapperClasses: s, contentClasses: a } = Ie(B(n)),
        c = () => {
          l("close"), (r.value = !1);
        };
      return (d, b) =>
        r.value
          ? (g(),
            p(
              "div",
              { key: 0, id: "toast-default", class: f(v(s)), role: "alert" },
              [
                e.type !== "empty" || d.$slots.icon
                  ? (g(),
                    T(
                      ve,
                      {
                        key: 0,
                        class: f([
                          "inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg",
                          v(t),
                        ]),
                        apply: ["background", "text"],
                      },
                      {
                        default: $(() => [
                          d.$slots.icon
                            ? x(d.$slots, "icon", {
                                key: 0,
                                class: f({ "ml-3": e.type !== "empty" }),
                              })
                            : e.type === "success"
                            ? (g(), p("svg", Ee, Fe))
                            : e.type === "danger"
                            ? (g(), p("svg", De, Pe))
                            : e.type === "warning"
                            ? (g(), p("svg", Re, He))
                            : h("", !0),
                        ]),
                        _: 3,
                      },
                      8,
                      ["class"]
                    ))
                  : h("", !0),
                u(
                  "div",
                  {
                    class: f([
                      v(a),
                      { "ml-3": d.$slots.icon || e.type !== "empty" },
                    ]),
                  },
                  [x(d.$slots, "default")],
                  2
                ),
                e.closable
                  ? (g(),
                    p(
                      "button",
                      {
                        key: 1,
                        onClick: c,
                        type: "button",
                        class:
                          "border-none ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
                        "aria-label": "Close",
                      },
                      Ke
                    ))
                  : h("", !0),
              ],
              2
            ))
          : h("", !0);
    },
  }),
  Ze = "flowbite-toast-injection-key";
k({
  components: { Toast: E },
  props: { transition: { type: String, default: "slide-left" } },
  setup() {
    const e = m([]),
      l = (s, a) => {
        Me(() => t(s), a);
      },
      n = (s) => {
        const a = parseInt(
          (new Date().getTime() * Math.random()).toString()
        ).toString();
        return e.value.push({ id: a, ...s }), s.time > 0 && l(a, s.time), a;
      },
      r = () => {
        if (e.value.length === 0) return "";
        const s = e.value[e.value.length - 1].id;
        return e.value.pop(), s;
      },
      t = (s) => {
        const a = e.value.findIndex((c) => c.id === s);
        return a >= 0 && e.value.splice(a, 1), a >= 0;
      };
    return R(Ze, { add: n, pop: r, remove: t }), { toasts: e, removeToast: t };
  },
  render() {
    const { $props: e, $slots: l, toasts: n, removeToast: r } = this;
    return C("div", {}, [
      l.default ? l.default() : null,
      C(
        j,
        {
          name: e.transition,
          tag: "div",
          class:
            "xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50",
        },
        {
          default: () =>
            n.map((t) =>
              t.component
                ? C(
                    t.component,
                    {
                      key: t.id,
                      onClose: () => r(t.id),
                      ...(t.componentProps ? t.componentProps : {}),
                    },
                    () => t.text
                  )
                : C(
                    E,
                    {
                      closable: !0,
                      type: t.type,
                      key: t.id,
                      onClose: () => r(t.id),
                    },
                    () => t.text
                  )
            ),
        }
      ),
    ]);
  },
});
const qe = {
    class:
      "flex-col bg-white md:mx-20 mx-2 mt-4 rounded-md shadow-lg transition duration-500 ease-in-out",
  },
  Je = { class: "font-semibold py-2 pl-4" },
  Ye = { class: "py-2" },
  Qe = { class: "" },
  P = k({
    __name: "AccordionWrapper",
    props: { text: String, ready: { type: Boolean, default: !0 } },
    setup(e) {
      const l = e,
        n = m(!1),
        r = m(!1),
        t = () => {
          l.ready && (r.value = !r.value);
        };
      return (
        q(() => {
          setTimeout(() => {
            l.ready || (n.value = !0);
          }, 5e3);
        }),
        (s, a) => (
          g(),
          T(
            j,
            {
              appear: "",
              name: "slide-dropdown",
              duration: 500,
              tag: "div",
              class: "",
            },
            {
              default: $(() => [
                u("div", qe, [
                  u(
                    "div",
                    {
                      class: "flex justify-between cursor-pointer",
                      onClick: t,
                    },
                    [
                      u("div", Je, F(e.text), 1),
                      u("div", Ye, [
                        e.ready
                          ? (g(),
                            p(
                              "img",
                              {
                                key: 0,
                                src: te,
                                class: f([
                                  "mr-3 h-7 transition duration-500 ease-in-out",
                                  { "rotate-180": r.value },
                                ]),
                                alt: "UserAvatar",
                              },
                              null,
                              2
                            ))
                          : (g(),
                            T(
                              v(ie),
                              {
                                key: 1,
                                color: "green",
                                size: "6",
                                class: f([
                                  "mx-2 my-1 mr-3.5",
                                  { hidden: n.value },
                                ]),
                              },
                              null,
                              8,
                              ["class"]
                            )),
                      ]),
                    ]
                  ),
                  J(
                    X,
                    { appear: "", name: "slide-dropdown", duration: 500 },
                    {
                      default: $(() => [
                        Y(
                          u(
                            "div",
                            Qe,
                            [x(s.$slots, "default", {}, void 0, !0)],
                            512
                          ),
                          [[Q, r.value]]
                        ),
                      ]),
                      _: 3,
                    }
                  ),
                ]),
              ]),
              _: 3,
            }
          )
        )
      );
    },
  });
const st = ee(P, [["__scopeId", "data-v-31398d61"]]);
P.__docgenInfo = {
  exportName: "default",
  displayName: "AccordionWrapper",
  description: "",
  tags: {},
  props: [
    { name: "text", type: { name: "string" } },
    {
      name: "ready",
      type: { name: "boolean" },
      defaultValue: { func: !1, value: "true" },
    },
  ],
  slots: [{ name: "default" }],
};
export { st as A, tt as _, ie as a };
//# sourceMappingURL=AccordionWrapper.5ca734af.js.map
