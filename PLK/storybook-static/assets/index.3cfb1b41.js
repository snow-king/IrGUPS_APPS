import {b as F, C as L, e as $, E as W, f as P, l as E, P as N, w as S,} from "./iframe.657ba62d.js";
import "./es.map.constructor.3fc5bb37.js";
import {a as Y, d as B, r as K, s as U} from "./render.bd4b5248.js";

function g(r, e) {
  return G(r) || z(r, e) || H(r, e) || V();
}
function V() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(r, e) {
  if (!!r) {
    if (typeof r == "string") return O(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (t === "Object" && r.constructor && (t = r.constructor.name),
      t === "Map" || t === "Set")
    )
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return O(r, e);
  }
}
function O(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, o = new Array(e); t < e; t++) o[t] = r[t];
  return o;
}
function z(r, e) {
  var t =
    r == null
      ? null
      : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
  if (t != null) {
    var o = [],
      a = !0,
      n = !1,
      i,
      l;
    try {
      for (
        t = t.call(r);
        !(a = (i = t.next()).done) && (o.push(i.value), !(e && o.length === e));
        a = !0
      );
    } catch (c) {
      (n = !0), (l = c);
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (n) throw l;
      }
    }
    return o;
  }
}
function G(r) {
  if (Array.isArray(r)) return r;
}
function J(r) {
  var e = null;
  Array.isArray(r) ? (e = r) : r.keys && (e = [r]);
  var t = new Map();
  if (e)
    e.forEach(function (a) {
      a.keys().forEach(function (n) {
        try {
          var i = a(n);
          t.set(typeof a.resolve == "function" ? a.resolve(n) : n, i);
        } catch (c) {
          var l =
            c.message && c.stack
              ? ""
                  .concat(
                    c.message,
                    `
 `
                  )
                  .concat(c.stack)
              : c.toString();
          E.error("Unexpected error while loading ".concat(n, ": ").concat(l));
        }
      });
    });
  else {
    var o = r();
    Array.isArray(o) &&
    o.every(function (a) {
      return a.default != null;
    })
      ? (t = new Map(
          o.map(function (a, n) {
            return ["exports-map-".concat(n), a];
          })
        ))
      : o &&
        E.warn(
          "Loader function passed to 'configure' should return void or an array of module exports that all contain a 'default' export. Received: ".concat(
            JSON.stringify(o)
          )
        );
  }
  return t;
}
function Q(r, e) {
  var t,
    o,
    a,
    n =
      (e == null ||
      (t = e.hot) === null ||
      t === void 0 ||
      (o = t.data) === null ||
      o === void 0
        ? void 0
        : o.lastExportsMap) || new Map();
  e != null &&
    (a = e.hot) !== null &&
    a !== void 0 &&
    a.dispose &&
    (e.hot.accept(),
    e.hot.dispose(function (u) {
      u.lastExportsMap = n;
    }));
  var i = J(r),
    l = new Map();
  Array.from(i.entries())
    .filter(function (u) {
      var s = g(u, 2),
        d = s[1];
      return !!d.default;
    })
    .filter(function (u) {
      var s = g(u, 2),
        d = s[0],
        v = s[1];
      return n.get(d) !== v;
    })
    .forEach(function (u) {
      var s = g(u, 2),
        d = s[0],
        v = s[1];
      return l.set(d, v);
    });
  var c = new Map();
  return (
    Array.from(n.keys())
      .filter(function (u) {
        return !i.has(u);
      })
      .forEach(function (u) {
        return c.set(u, n.get(u));
      }),
    (n = i),
    { added: l, removed: c }
  );
}
function R(r, e) {
  return rr(r) || q(r, e) || Z(r, e) || X();
}
function X() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z(r, e) {
  if (!!r) {
    if (typeof r == "string") return T(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (t === "Object" && r.constructor && (t = r.constructor.name),
      t === "Map" || t === "Set")
    )
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return T(r, e);
  }
}
function T(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, o = new Array(e); t < e; t++) o[t] = r[t];
  return o;
}
function q(r, e) {
  var t =
    r == null
      ? null
      : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
  if (t != null) {
    var o = [],
      a = !0,
      n = !1,
      i,
      l;
    try {
      for (
        t = t.call(r);
        !(a = (i = t.next()).done) && (o.push(i.value), !(e && o.length === e));
        a = !0
      );
    } catch (c) {
      (n = !0), (l = c);
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (n) throw l;
      }
    }
    return o;
  }
}
function rr(r) {
  if (Array.isArray(r)) return r;
}
var p = S.window,
  h = S.FEATURES,
  er = F(function () {},
  "`configure()` is deprecated and will be removed in Storybook 7.0. \nPlease use the `stories` field of `main.js` to load stories.\nRead more at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-configure"),
  f = function (e) {
    return function () {
      throw new Error(
        "@storybook/client-api:".concat(e, " was removed in storyStoreV7.")
      );
    };
  };
function tr(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = e.decorateStory,
    o = e.render;
  if ((p && (p.IS_STORYBOOK = !0), h != null && h.storyStoreV7))
    return {
      forceReRender: f("forceReRender"),
      getStorybook: f("getStorybook"),
      configure: f("configure"),
      clientApi: {
        addDecorator: f("clientApi.addDecorator"),
        addParameters: f("clientApi.addParameters"),
        clearDecorators: f("clientApi.clearDecorators"),
        addLoader: f("clientApi.addLoader"),
        setAddon: f("clientApi.setAddon"),
        getStorybook: f("clientApi.getStorybook"),
        storiesOf: f("clientApi.storiesOf"),
        raw: f("raw"),
      },
    };
  var a = $({ page: "preview" });
  P.setChannel(a);
  var n = new L(),
    i = new N(),
    l = !1,
    c = function (d) {
      return n.importFn(d);
    };
  function u() {
    var s = n.getStoryIndex();
    i.onStoriesChanged({ storyIndex: s, importFn: c });
  }
  return (
    (n.onImportFnChanged = u),
    (n.storyStore = i.storyStore),
    p &&
      ((p.__STORYBOOK_CLIENT_API__ = n),
      (p.__STORYBOOK_ADDONS_CHANNEL__ = a),
      (p.__STORYBOOK_PREVIEW__ = i),
      (p.__STORYBOOK_STORY_STORE__ = i.storyStore)),
    {
      forceReRender: function () {
        return a.emit(W.FORCE_RE_RENDER);
      },
      getStorybook: function () {
        return [];
      },
      raw: function () {},
      clientApi: n,
      configure: function (d, v, I) {
        var k =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
        k && er(), n.addParameters({ framework: d });
        var b = function () {
          var w = Q(v, I),
            M = w.added,
            D = w.removed;
          return (
            Array.from(M.entries()).forEach(function (_) {
              var m = R(_, 2),
                A = m[0],
                j = m[1];
              return n.facade.addStoriesFromExports(A, j);
            }),
            Array.from(D.entries()).forEach(function (_) {
              var m = R(_, 1),
                A = m[0];
              return n.facade.clearFilenameExports(A);
            }),
            Object.assign({ render: o }, n.facade.projectAnnotations, {
              renderToDOM: r,
              applyDecorators: t,
            })
          );
        };
        l
          ? (b(), u())
          : (i.initialize({
              getStoryIndex: function () {
                return n.getStoryIndex();
              },
              importFn: c,
              getProjectAnnotations: b,
            }),
            (l = !0));
      },
    }
  );
}
var x = S.window;
x.STORYBOOK_REACT_CLASSES = {};
x.STORYBOOK_ENV = "vue3";
var y = tr(Y, { decorateStory: B, render: K });
y.clientApi.addDecorator;
y.clientApi.addParameters;
y.clientApi.clearDecorators;
y.clientApi.setAddon;
y.forceReRender;
y.clientApi.getStorybook;
y.clientApi.raw;
var ir = U;
module && module.hot && module.hot.decline && module.hot.decline();
export { ir as a };
//# sourceMappingURL=index.3cfb1b41.js.map
