import {
    _ as H,
    b as $,
    c as g,
    d as G,
    f as W,
    n as C,
    o as z,
    p as L,
    q as B,
    t as U,
    u as K,
    w as D,
} from "./iframe.657ba62d.js";
import {m as V} from "./make-decorator.9b42b6f6.js";

var k = "actions",
  q = "storybook/actions",
  F = "".concat(q, "/action-event"),
  Y = H,
  J = C,
  Q = z,
  X = U,
  Z = B,
  rr = L;
Y(
  { target: "Object", stat: !0, sham: !J },
  {
    getOwnPropertyDescriptors: function (e) {
      for (var t = X(e), n = Z.f, a = Q(t), o = {}, c = 0, i, u; a.length > c; )
        (u = n(t, (i = a[c++]))), u !== void 0 && rr(o, i, u);
      return o;
    },
  }
);
var d,
  b = typeof g < "u" && (g.crypto || g.msCrypto);
if (b && b.getRandomValues) {
  var j = new Uint8Array(16);
  d = function () {
    return b.getRandomValues(j), j;
  };
}
if (!d) {
  var S = new Array(16);
  d = function () {
    for (var r = 0, e; r < 16; r++)
      (r & 3) === 0 && (e = Math.random() * 4294967296),
        (S[r] = (e >>> ((r & 3) << 3)) & 255);
    return S;
  };
}
var tr = d,
  N = [];
for (var p = 0; p < 256; ++p) N[p] = (p + 256).toString(16).substr(1);
function er(r, e) {
  var t = e || 0,
    n = N;
  return (
    n[r[t++]] +
    n[r[t++]] +
    n[r[t++]] +
    n[r[t++]] +
    "-" +
    n[r[t++]] +
    n[r[t++]] +
    "-" +
    n[r[t++]] +
    n[r[t++]] +
    "-" +
    n[r[t++]] +
    n[r[t++]] +
    "-" +
    n[r[t++]] +
    n[r[t++]] +
    n[r[t++]] +
    n[r[t++]] +
    n[r[t++]] +
    n[r[t++]]
  );
}
var nr = er,
  ar = tr,
  or = nr;
function ir(r, e, t) {
  var n = (e && t) || 0;
  typeof r == "string" &&
    ((e = r == "binary" ? new Array(16) : null), (r = null)),
    (r = r || {});
  var a = r.random || (r.rng || ar)();
  if (((a[6] = (a[6] & 15) | 64), (a[8] = (a[8] & 63) | 128), e))
    for (var o = 0; o < 16; ++o) e[n + o] = a[o];
  return e || or(a);
}
var cr = ir,
  A = { depth: 10, clearOnStoryChange: !0, limit: 50 };
function m(r) {
  return (
    (m =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    m(r)
  );
}
var ur = function r(e, t) {
    var n = Object.getPrototypeOf(e);
    return !n || t(n) ? n : r(n, t);
  },
  sr = function (e) {
    return Boolean(
      m(e) === "object" &&
        e &&
        ur(e, function (t) {
          return /^Synthetic(?:Base)?Event$/.test(t.constructor.name);
        }) &&
        typeof e.persist == "function"
    );
  },
  lr = function (e) {
    if (sr(e)) {
      var t = Object.create(
        e.constructor.prototype,
        Object.getOwnPropertyDescriptors(e)
      );
      t.persist();
      var n = Object.getOwnPropertyDescriptor(t, "view"),
        a = n == null ? void 0 : n.value;
      return (
        m(a) === "object" &&
          (a == null ? void 0 : a.constructor.name) === "Window" &&
          Object.defineProperty(
            t,
            "view",
            Object.assign({}, n, {
              value: Object.create(a.constructor.prototype),
            })
          ),
        t
      );
    }
    return e;
  };
function fr(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = Object.assign({}, A, e),
    n = function () {
      for (
        var o = W.getChannel(),
          c = cr(),
          i = 5,
          u = arguments.length,
          l = new Array(u),
          s = 0;
        s < u;
        s++
      )
        l[s] = arguments[s];
      var f = l.map(lr),
        h = l.length > 1 ? f : f[0],
        v = {
          id: c,
          count: 0,
          data: { name: r, args: h },
          options: Object.assign({}, t, {
            maxDepth: i + (t.depth || 3),
            allowFunction: t.allowFunction || !1,
          }),
        };
      o.emit(F, v);
    };
  return n;
}
function vr(r, e) {
  return mr(r) || dr(r, e) || yr(r, e) || pr();
}
function pr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yr(r, e) {
  if (!!r) {
    if (typeof r == "string") return E(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (t === "Object" && r.constructor && (t = r.constructor.name),
      t === "Map" || t === "Set")
    )
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return E(r, e);
  }
}
function E(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function dr(r, e) {
  var t =
    r == null
      ? null
      : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
  if (t != null) {
    var n = [],
      a = !0,
      o = !1,
      c,
      i;
    try {
      for (
        t = t.call(r);
        !(a = (c = t.next()).done) && (n.push(c.value), !(e && n.length === e));
        a = !0
      );
    } catch (u) {
      (o = !0), (i = u);
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o) throw i;
      }
    }
    return n;
  }
}
function mr(r) {
  if (Array.isArray(r)) return r;
}
var I = function () {
  for (var e = A, t = arguments.length, n = new Array(t), a = 0; a < t; a++)
    n[a] = arguments[a];
  var o = n;
  if (o.length === 1 && Array.isArray(o[0])) {
    var c = o,
      i = vr(c, 1);
    o = i[0];
  }
  o.length !== 1 &&
    typeof o[o.length - 1] != "string" &&
    (e = Object.assign({}, A, o.pop()));
  var u = o[0];
  (o.length !== 1 || typeof u == "string") &&
    ((u = {}),
    o.forEach(function (s) {
      u[s] = s;
    }));
  var l = {};
  return (
    Object.keys(u).forEach(function (s) {
      l[s] = fr(u[s], e);
    }),
    l
  );
};
$(function () {}, "decorate.* is no longer supported as of Storybook 6.0.");
var _;
function hr(r) {
  return Ar(r) || br(r) || R(r) || gr();
}
function gr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function br(r) {
  if (
    (typeof Symbol < "u" && r[Symbol.iterator] != null) ||
    r["@@iterator"] != null
  )
    return Array.from(r);
}
function Ar(r) {
  if (Array.isArray(r)) return O(r);
}
function Or(r, e) {
  return (
    e || (e = r.slice(0)),
    Object.freeze(
      Object.defineProperties(r, { raw: { value: Object.freeze(e) } })
    )
  );
}
function T(r, e) {
  return Sr(r) || jr(r, e) || R(r, e) || wr();
}
function wr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R(r, e) {
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
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function jr(r, e) {
  var t =
    r == null
      ? null
      : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
  if (t != null) {
    var n = [],
      a = !0,
      o = !1,
      c,
      i;
    try {
      for (
        t = t.call(r);
        !(a = (c = t.next()).done) && (n.push(c.value), !(e && n.length === e));
        a = !0
      );
    } catch (u) {
      (o = !0), (i = u);
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o) throw i;
      }
    }
    return n;
  }
}
function Sr(r) {
  if (Array.isArray(r)) return r;
}
var P = D.document,
  x = D.Element,
  Er = /^(\S+)\s*(.*)$/,
  Ir = x != null && !x.prototype.matches,
  _r = Ir ? "msMatchesSelector" : "matches",
  y = P && P.getElementById("root"),
  Tr = function r(e, t) {
    if (e[_r](t)) return !0;
    var n = e.parentElement;
    return n ? r(n, t) : !1;
  },
  Pr = function (e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
      a < t;
      a++
    )
      n[a - 1] = arguments[a];
    var o = e.apply(void 0, n);
    return Object.entries(o).map(function (c) {
      var i = T(c, 2),
        u = i[0],
        l = i[1],
        s = u.match(Er),
        f = T(s, 3);
      f[0];
      var h = f[1],
        v = f[2];
      return {
        eventName: h,
        handler: function (w) {
          (!v || Tr(w.target, v)) && l(w);
        },
      };
    });
  },
  M = $(
    function (r) {
      for (
        var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1;
        n < e;
        n++
      )
        t[n - 1] = arguments[n];
      K(
        function () {
          if (y != null) {
            var a = Pr.apply(void 0, [r].concat(t));
            return (
              a.forEach(function (o) {
                var c = o.eventName,
                  i = o.handler;
                return y.addEventListener(c, i);
              }),
              function () {
                return a.forEach(function (o) {
                  var c = o.eventName,
                    i = o.handler;
                  return y.removeEventListener(c, i);
                });
              }
            );
          }
        },
        [y, r, t]
      );
    },
    G(
      _ ||
        (_ = Or([
          `
    withActions(options) is deprecated, please configure addon-actions using the addParameter api:

    addParameters({
      actions: {
        handles: options
      },
    });
  `,
        ]))
    )
  ),
  xr = function (e, t) {
    t && M(e, t);
  },
  Rr = V({
    name: "withActions",
    parameterName: k,
    skipIfNoParametersOrOptions: !0,
    wrapper: function (e, t, n) {
      var a = n.parameters,
        o = n.options;
      return (
        xr(I, o),
        a && a.handles && M.apply(void 0, [I].concat(hr(a.handles))),
        e(t)
      );
    },
  });
module && module.hot && module.hot.decline && module.hot.decline();
export { fr as a, Rr as w };
//# sourceMappingURL=index.51d78ed5.js.map
