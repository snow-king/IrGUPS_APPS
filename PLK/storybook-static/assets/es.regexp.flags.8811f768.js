import {A as y, an as u, ao as d, n as p, R as v} from "./iframe.657ba62d.js";

var R = v,
  E = p,
  O = u,
  b = d,
  m = y,
  o = R.RegExp,
  g = o.prototype,
  x =
    E &&
    m(function () {
      var r = !0;
      try {
        o(".", "d");
      } catch {
        r = !1;
      }
      var a = {},
        t = "",
        s = r ? "dgimsy" : "gimsy",
        n = function (l, f) {
          Object.defineProperty(a, l, {
            get: function () {
              return (t += f), !0;
            },
          });
        },
        e = {
          dotAll: "s",
          global: "g",
          ignoreCase: "i",
          multiline: "m",
          sticky: "y",
        };
      r && (e.hasIndices = "d");
      for (var i in e) n(i, e[i]);
      var c = Object.getOwnPropertyDescriptor(g, "flags").get.call(a);
      return c !== s || t !== s;
    });
x && O(g, "flags", { configurable: !0, get: b });
//# sourceMappingURL=es.regexp.flags.8811f768.js.map
