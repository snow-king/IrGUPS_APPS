import {k as c} from "./iframe.657ba62d.js";

function p(r, n, t, a, e, s, i) {
  try {
    var o = r[s](i),
      u = o.value;
  } catch (f) {
    t(f);
    return;
  }
  o.done ? n(u) : Promise.resolve(u).then(a, e);
}
function g(r) {
  return function () {
    var n = this,
      t = arguments;
    return new Promise(function (a, e) {
      var s = r.apply(n, t);
      function i(u) {
        p(s, a, e, i, o, "next", u);
      }
      function o(u) {
        p(s, a, e, i, o, "throw", u);
      }
      i(void 0);
    });
  };
}
var m = {
  docs: {
    getContainer: (function () {
      var r = g(
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    c(
                      () => import("./index.b4dc85c0.js"),
                      [
                        "assets/index.b4dc85c0.js",
                        "assets/Props.53e66bbb.js",
                        "assets/iframe.657ba62d.js",
                        "assets/jsx-runtime.9dff8acf.js",
                        "assets/string.dd967029.js",
                        "assets/es.map.constructor.3fc5bb37.js",
                        "assets/es.number.to-fixed.04f7b86b.js",
                      ]
                    )
                  );
                case 2:
                  return e.abrupt("return", e.sent.DocsContainer);
                case 3:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
      function n() {
        return r.apply(this, arguments);
      }
      return n;
    })(),
    getPage: (function () {
      var r = g(
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    c(
                      () => import("./index.b4dc85c0.js"),
                      [
                        "assets/index.b4dc85c0.js",
                        "assets/Props.53e66bbb.js",
                        "assets/iframe.657ba62d.js",
                        "assets/jsx-runtime.9dff8acf.js",
                        "assets/string.dd967029.js",
                        "assets/es.map.constructor.3fc5bb37.js",
                        "assets/es.number.to-fixed.04f7b86b.js",
                      ]
                    )
                  );
                case 2:
                  return e.abrupt("return", e.sent.DocsPage);
                case 3:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
      function n() {
        return r.apply(this, arguments);
      }
      return n;
    })(),
  },
};
export { m as parameters };
//# sourceMappingURL=preview.a3e99848.js.map
