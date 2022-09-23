import {d as h, s as y} from "./iframe.657ba62d.js";
import {c as w, h as m, s as v} from "./vue.esm-bundler.b327b46a.js";

function b(e) {
  return typeof e == "function" ? { render: e, name: e.name } : e;
}
function f(e, t) {
  var n = e;
  return n == null
    ? null
    : t
    ? Object.assign({}, b(n), {
        components: Object.assign({}, n.components || {}, { story: t }),
      })
    : {
        render: function () {
          return m(n);
        },
      };
}
function E(e, t) {
  return t.reduce(
    function (n, a) {
      return function (o) {
        var r,
          i = a(function (u) {
            return (r = n(Object.assign({}, o, y(u)))), r;
          }, o);
        return r || (r = n(o)), i === r ? r : f(i, r);
      };
    },
    function (n) {
      return f(e(n));
    }
  );
}
var l;
function g(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
    )
  );
}
var C = function (t, n) {
    var a = n.id,
      o = n.component;
    if (!o)
      throw new Error(
        "Unable to render story ".concat(
          a,
          " as the component annotation is missing from the default export"
        )
      );
    return m(o, t);
  },
  c = v(null),
  s = null,
  d = w({
    unmounted: function () {
      s = null;
    },
    setup: function () {
      return function () {
        if (!c.value)
          throw new Error("No Vue 3 Story available. Was it set correctly?");
        return m(c.value);
      };
    },
  });
function z(e, t) {
  var n = e.title,
    a = e.name,
    o = e.storyFn,
    r = e.showMain,
    i = e.showError,
    u = e.showException;
  d.config.errorHandler = u;
  var p = o();
  if (!p) {
    i({
      title: 'Expecting a Vue component from the story: "'
        .concat(a, '" of "')
        .concat(n, '".'),
      description: h(
        l ||
          (l = g([
            `
        Did you forget to return the Vue component from the story?
        Use "() => ({ template: '<my-comp></my-comp>' })" or "() => ({ components: MyComp, template: '<my-comp></my-comp>' })" when defining the story.
      `,
          ]))
      ),
    });
    return;
  }
  r(), (c.value = p), s || (s = d.mount(t));
}
export { z as a, E as d, C as r, d as s };
//# sourceMappingURL=render.bd4b5248.js.map
