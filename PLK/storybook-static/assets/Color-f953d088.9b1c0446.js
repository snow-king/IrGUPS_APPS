import "./iframe.657ba62d.js";
import "./es.map.constructor.3fc5bb37.js";
import {
    ar as Rr,
    as as Gr,
    at as Wr,
    au as Kr,
    av as Dr,
    aw as hr,
    ax as Yr,
    ay as Jr,
    W as P,
    Y as Ur,
} from "./Props.53e66bbb.js";
import {b as Q, j as w, R as O, r as d} from "./jsx-runtime.9dff8acf.js";
import "./string.dd967029.js";
import "./es.number.to-fixed.04f7b86b.js";

var X, q;
function E(a, r, e) {
  return (
    r in a
      ? Object.defineProperty(a, r, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[r] = e),
    a
  );
}
function ur(a) {
  return (
    (ur =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
    ur(a)
  );
}
function N(a, r) {
  return ee(a) || re(a, r) || Zr(a, r) || Qr();
}
function Qr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zr(a, r) {
  if (!!a) {
    if (typeof a == "string") return br(a, r);
    var e = Object.prototype.toString.call(a).slice(8, -1);
    if (
      (e === "Object" && a.constructor && (e = a.constructor.name),
      e === "Map" || e === "Set")
    )
      return Array.from(a);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return br(a, r);
  }
}
function br(a, r) {
  (r == null || r > a.length) && (r = a.length);
  for (var e = 0, n = new Array(r); e < r; e++) n[e] = a[e];
  return n;
}
function re(a, r) {
  var e =
    a == null
      ? null
      : (typeof Symbol < "u" && a[Symbol.iterator]) || a["@@iterator"];
  if (e != null) {
    var n = [],
      t = !0,
      o = !1,
      i,
      u;
    try {
      for (
        e = e.call(a);
        !(t = (i = e.next()).done) && (n.push(i.value), !(r && n.length === r));
        t = !0
      );
    } catch (l) {
      (o = !0), (u = l);
    } finally {
      try {
        !t && e.return != null && e.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function ee(a) {
  if (Array.isArray(a)) return a;
}
function z() {
  return (z =
    Object.assign ||
    function (a) {
      for (var r = 1; r < arguments.length; r++) {
        var e = arguments[r];
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
      }
      return a;
    }).apply(this, arguments);
}
function dr(a, r) {
  if (a == null) return {};
  var e,
    n,
    t = {},
    o = Object.keys(a);
  for (n = 0; n < o.length; n++) r.indexOf((e = o[n])) >= 0 || (t[e] = a[e]);
  return t;
}
function lr(a) {
  var r = d.exports.useRef(a),
    e = d.exports.useRef(function (n) {
      r.current && r.current(n);
    });
  return (r.current = a), e.current;
}
var B = function (r, e, n) {
    return (
      e === void 0 && (e = 0),
      n === void 0 && (n = 1),
      r > n ? n : r < e ? e : r
    );
  },
  A = function (r) {
    return "touches" in r;
  },
  cr = function (r) {
    return (r && r.ownerDocument.defaultView) || self;
  },
  mr = function (r, e, n) {
    var t = r.getBoundingClientRect(),
      o = A(e)
        ? (function (i, u) {
            for (var l = 0; l < i.length; l++)
              if (i[l].identifier === u) return i[l];
            return i[0];
          })(e.touches, n)
        : e;
    return {
      left: B((o.pageX - (t.left + cr(r).pageXOffset)) / t.width),
      top: B((o.pageY - (t.top + cr(r).pageYOffset)) / t.height),
    };
  },
  yr = function (r) {
    !A(r) && r.preventDefault();
  },
  pr = O.memo(function (a) {
    var r = a.onMove,
      e = a.onKey,
      n = dr(a, ["onMove", "onKey"]),
      t = d.exports.useRef(null),
      o = lr(r),
      i = lr(e),
      u = d.exports.useRef(null),
      l = d.exports.useRef(!1),
      c = d.exports.useMemo(
        function () {
          var k = function (h) {
              yr(h),
                (A(h) ? h.touches.length > 0 : h.buttons > 0) && t.current
                  ? o(mr(t.current, h, u.current))
                  : I(!1);
            },
            C = function () {
              return I(!1);
            };
          function I(m) {
            var h = l.current,
              p = cr(t.current),
              g = m ? p.addEventListener : p.removeEventListener;
            g(h ? "touchmove" : "mousemove", k),
              g(h ? "touchend" : "mouseup", C);
          }
          return [
            function (m) {
              var h = m.nativeEvent,
                p = t.current;
              if (
                p &&
                (yr(h),
                !(function (M, S) {
                  return S && !A(M);
                })(h, l.current) && p)
              ) {
                if (A(h)) {
                  l.current = !0;
                  var g = h.changedTouches || [];
                  g.length && (u.current = g[0].identifier);
                }
                p.focus(), o(mr(p, h, u.current)), I(!0);
              }
            },
            function (m) {
              var h = m.which || m.keyCode;
              h < 37 ||
                h > 40 ||
                (m.preventDefault(),
                i({
                  left: h === 39 ? 0.05 : h === 37 ? -0.05 : 0,
                  top: h === 40 ? 0.05 : h === 38 ? -0.05 : 0,
                }));
            },
            I,
          ];
        },
        [i, o]
      ),
      v = c[0],
      f = c[1],
      y = c[2];
    return (
      d.exports.useEffect(
        function () {
          return y;
        },
        [y]
      ),
      w("div", {
        ...z({}, n, {
          onTouchStart: v,
          onMouseDown: v,
          className: "react-colorful__interactive",
          ref: t,
          onKeyDown: f,
          tabIndex: 0,
          role: "slider",
        }),
      })
    );
  }),
  W = function (r) {
    return r.filter(Boolean).join(" ");
  },
  gr = function (r) {
    var e = r.color,
      n = r.left,
      t = r.top,
      o = t === void 0 ? 0.5 : t,
      i = W(["react-colorful__pointer", r.className]);
    return w("div", {
      className: i,
      style: { top: 100 * o + "%", left: 100 * n + "%" },
      children: w("div", {
        className: "react-colorful__pointer-fill",
        style: { backgroundColor: e },
      }),
    });
  },
  _ = function (r, e, n) {
    return (
      e === void 0 && (e = 0),
      n === void 0 && (n = Math.pow(10, e)),
      Math.round(n * r) / n
    );
  },
  ae = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  ar = function (r) {
    return (
      r[0] === "#" && (r = r.substr(1)),
      r.length < 6
        ? {
            r: parseInt(r[0] + r[0], 16),
            g: parseInt(r[1] + r[1], 16),
            b: parseInt(r[2] + r[2], 16),
            a: 1,
          }
        : {
            r: parseInt(r.substr(0, 2), 16),
            g: parseInt(r.substr(2, 2), 16),
            b: parseInt(r.substr(4, 2), 16),
            a: 1,
          }
    );
  },
  ne = function (r, e) {
    return e === void 0 && (e = "deg"), Number(r) * (ae[e] || 1);
  },
  te = function (r) {
    var e =
      /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
        r
      );
    return e
      ? oe({
          h: ne(e[1], e[2]),
          s: Number(e[3]),
          l: Number(e[4]),
          a: e[5] === void 0 ? 1 : Number(e[5]) / (e[6] ? 100 : 1),
        })
      : { h: 0, s: 0, v: 0, a: 1 };
  },
  oe = function (r) {
    var e = r.s,
      n = r.l;
    return {
      h: r.h,
      s:
        (e *= (n < 50 ? n : 100 - n) / 100) > 0 ? ((2 * e) / (n + e)) * 100 : 0,
      v: n + e,
      a: r.a,
    };
  },
  Hr = function (r) {
    var e = r.s,
      n = r.v,
      t = r.a,
      o = ((200 - e) * n) / 100;
    return {
      h: _(r.h),
      s: _(
        o > 0 && o < 200 ? ((e * n) / 100 / (o <= 100 ? o : 200 - o)) * 100 : 0
      ),
      l: _(o / 2),
      a: _(t, 2),
    };
  },
  sr = function (r) {
    var e = Hr(r);
    return "hsl(" + e.h + ", " + e.s + "%, " + e.l + "%)";
  },
  J = function (r) {
    var e = Hr(r);
    return "hsla(" + e.h + ", " + e.s + "%, " + e.l + "%, " + e.a + ")";
  },
  Nr = function (r) {
    var e = r.h,
      n = r.s,
      t = r.v,
      o = r.a;
    (e = (e / 360) * 6), (n /= 100), (t /= 100);
    var i = Math.floor(e),
      u = t * (1 - n),
      l = t * (1 - (e - i) * n),
      c = t * (1 - (1 - e + i) * n),
      v = i % 6;
    return {
      r: _(255 * [t, l, u, u, c, t][v]),
      g: _(255 * [c, t, t, l, u, u][v]),
      b: _(255 * [u, u, c, t, t, l][v]),
      a: _(o, 2),
    };
  },
  ie = function (r) {
    var e =
      /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
        r
      );
    return e
      ? Tr({
          r: Number(e[1]) / (e[2] ? 100 / 255 : 1),
          g: Number(e[3]) / (e[4] ? 100 / 255 : 1),
          b: Number(e[5]) / (e[6] ? 100 / 255 : 1),
          a: e[7] === void 0 ? 1 : Number(e[7]) / (e[8] ? 100 : 1),
        })
      : { h: 0, s: 0, v: 0, a: 1 };
  },
  nr = function (r) {
    var e = r.toString(16);
    return e.length < 2 ? "0" + e : e;
  },
  Tr = function (r) {
    var e = r.r,
      n = r.g,
      t = r.b,
      o = r.a,
      i = Math.max(e, n, t),
      u = i - Math.min(e, n, t),
      l = u
        ? i === e
          ? (n - t) / u
          : i === n
          ? 2 + (t - e) / u
          : 4 + (e - n) / u
        : 0;
    return {
      h: _(60 * (l < 0 ? l + 6 : l)),
      s: _(i ? (u / i) * 100 : 0),
      v: _((i / 255) * 100),
      a: o,
    };
  },
  Fr = O.memo(function (a) {
    var r = a.hue,
      e = a.onChange,
      n = W(["react-colorful__hue", a.className]);
    return O.createElement(
      "div",
      { className: n },
      O.createElement(
        pr,
        {
          onMove: function (o) {
            e({ h: 360 * o.left });
          },
          onKey: function (o) {
            e({ h: B(r + 360 * o.left, 0, 360) });
          },
          "aria-label": "Hue",
          "aria-valuetext": _(r),
        },
        O.createElement(gr, {
          className: "react-colorful__hue-pointer",
          left: r / 360,
          color: sr({ h: r, s: 100, v: 100, a: 1 }),
        })
      )
    );
  }),
  Pr = O.memo(function (a) {
    var r = a.hsva,
      e = a.onChange,
      n = { backgroundColor: sr({ h: r.h, s: 100, v: 100, a: 1 }) };
    return O.createElement(
      "div",
      { className: "react-colorful__saturation", style: n },
      O.createElement(
        pr,
        {
          onMove: function (o) {
            e({ s: 100 * o.left, v: 100 - 100 * o.top });
          },
          onKey: function (o) {
            e({
              s: B(r.s + 100 * o.left, 0, 100),
              v: B(r.v - 100 * o.top, 0, 100),
            });
          },
          "aria-label": "Color",
          "aria-valuetext":
            "Saturation " + _(r.s) + "%, Brightness " + _(r.v) + "%",
        },
        O.createElement(gr, {
          className: "react-colorful__saturation-pointer",
          top: 1 - r.v / 100,
          left: r.s / 100,
          color: sr(r),
        })
      )
    );
  }),
  jr = function (r, e) {
    if (r === e) return !0;
    for (var n in r) if (r[n] !== e[n]) return !1;
    return !0;
  },
  zr = function (r, e) {
    return r.replace(/\s/g, "") === e.replace(/\s/g, "");
  };
function Lr(a, r, e) {
  var n = lr(e),
    t = d.exports.useState(function () {
      return a.toHsva(r);
    }),
    o = t[0],
    i = t[1],
    u = d.exports.useRef({ color: r, hsva: o });
  d.exports.useEffect(
    function () {
      if (!a.equal(r, u.current.color)) {
        var c = a.toHsva(r);
        (u.current = { hsva: c, color: r }), i(c);
      }
    },
    [r, a]
  ),
    d.exports.useEffect(
      function () {
        var c;
        jr(o, u.current.hsva) ||
          a.equal((c = a.fromHsva(o)), u.current.color) ||
          ((u.current = { hsva: o, color: c }), n(c));
      },
      [o, a, n]
    );
  var l = d.exports.useCallback(function (c) {
    i(function (v) {
      return Object.assign({}, v, c);
    });
  }, []);
  return [o, l];
}
var ue = typeof window < "u" ? d.exports.useLayoutEffect : d.exports.useEffect,
  le = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  },
  xr = new Map(),
  Br = function (r) {
    ue(function () {
      var e = r.current ? r.current.ownerDocument : document;
      if (e !== void 0 && !xr.has(e)) {
        var n = e.createElement("style");
        (n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
          xr.set(e, n);
        var t = le();
        t && n.setAttribute("nonce", t), e.head.appendChild(n);
      }
    }, []);
  },
  ce = function (r) {
    var e = r.className,
      n = r.colorModel,
      t = r.color,
      o = t === void 0 ? n.defaultColor : t,
      i = r.onChange,
      u = dr(r, ["className", "colorModel", "color", "onChange"]),
      l = d.exports.useRef(null);
    Br(l);
    var c = Lr(n, o, i),
      v = c[0],
      f = c[1],
      y = W(["react-colorful", e]);
    return Q("div", {
      ...z({}, u, { ref: l, className: y }),
      children: [
        w(Pr, { hsva: v, onChange: f }),
        w(Fr, {
          hue: v.h,
          onChange: f,
          className: "react-colorful__last-control",
        }),
      ],
    });
  },
  se = {
    defaultColor: "000",
    toHsva: function (r) {
      return Tr(ar(r));
    },
    fromHsva: function (r) {
      return (n = (e = Nr(r)).g), (t = e.b), "#" + nr(e.r) + nr(n) + nr(t);
      var e, n, t;
    },
    equal: function (r, e) {
      return r.toLowerCase() === e.toLowerCase() || jr(ar(r), ar(e));
    },
  },
  ve = function (r) {
    return O.createElement(ce, z({}, r, { colorModel: se }));
  },
  fe = function (r) {
    var e = r.className,
      n = r.hsva,
      t = r.onChange,
      o = {
        backgroundImage:
          "linear-gradient(90deg, " +
          J(Object.assign({}, n, { a: 0 })) +
          ", " +
          J(Object.assign({}, n, { a: 1 })) +
          ")",
      },
      i = W(["react-colorful__alpha", e]);
    return O.createElement(
      "div",
      { className: i },
      w("div", { className: "react-colorful__alpha-gradient", style: o }),
      O.createElement(
        pr,
        {
          onMove: function (l) {
            t({ a: l.left });
          },
          onKey: function (l) {
            t({ a: B(n.a + l.left) });
          },
          "aria-label": "Alpha",
          "aria-valuetext": _(100 * n.a) + "%",
        },
        O.createElement(gr, {
          className: "react-colorful__alpha-pointer",
          left: n.a,
          color: J(n),
        })
      )
    );
  },
  $r = function (r) {
    var e = r.className,
      n = r.colorModel,
      t = r.color,
      o = t === void 0 ? n.defaultColor : t,
      i = r.onChange,
      u = dr(r, ["className", "colorModel", "color", "onChange"]),
      l = d.exports.useRef(null);
    Br(l);
    var c = Lr(n, o, i),
      v = c[0],
      f = c[1],
      y = W(["react-colorful", e]);
    return Q("div", {
      ...z({}, u, { ref: l, className: y }),
      children: [
        w(Pr, { hsva: v, onChange: f }),
        w(Fr, { hue: v.h, onChange: f }),
        w(fe, {
          hsva: v,
          onChange: f,
          className: "react-colorful__last-control",
        }),
      ],
    });
  },
  he = {
    defaultColor: "hsla(0, 0%, 0%, 1)",
    toHsva: te,
    fromHsva: J,
    equal: zr,
  },
  de = function (r) {
    return w($r, { ...z({}, r, { colorModel: he }) });
  },
  pe = {
    defaultColor: "rgba(0, 0, 0, 1)",
    toHsva: ie,
    fromHsva: function (r) {
      var e = Nr(r);
      return "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + e.a + ")";
    },
    equal: zr,
  },
  ge = function (r) {
    return w($r, { ...z({}, r, { colorModel: pe }) });
  },
  be = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  },
  G = be,
  Xr = {};
for (var tr = 0, wr = Object.keys(G); tr < wr.length; tr++) {
  var kr = wr[tr];
  Xr[G[kr]] = kr;
}
var s = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] },
  },
  qr = s;
for (var or = 0, Mr = Object.keys(s); or < Mr.length; or++) {
  var R = Mr[or];
  if (!("channels" in s[R])) throw new Error("missing channels property: " + R);
  if (!("labels" in s[R]))
    throw new Error("missing channel labels property: " + R);
  if (s[R].labels.length !== s[R].channels)
    throw new Error("channel and label counts mismatch: " + R);
  var Cr = s[R],
    me = Cr.channels,
    ye = Cr.labels;
  delete s[R].channels,
    delete s[R].labels,
    Object.defineProperty(s[R], "channels", { value: me }),
    Object.defineProperty(s[R], "labels", { value: ye });
}
s.rgb.hsl = function (a) {
  var r = a[0] / 255,
    e = a[1] / 255,
    n = a[2] / 255,
    t = Math.min(r, e, n),
    o = Math.max(r, e, n),
    i = o - t,
    u,
    l;
  o === t
    ? (u = 0)
    : r === o
    ? (u = (e - n) / i)
    : e === o
    ? (u = 2 + (n - r) / i)
    : n === o && (u = 4 + (r - e) / i),
    (u = Math.min(u * 60, 360)),
    u < 0 && (u += 360);
  var c = (t + o) / 2;
  return (
    o === t ? (l = 0) : c <= 0.5 ? (l = i / (o + t)) : (l = i / (2 - o - t)),
    [u, l * 100, c * 100]
  );
};
s.rgb.hsv = function (a) {
  var r,
    e,
    n,
    t,
    o,
    i = a[0] / 255,
    u = a[1] / 255,
    l = a[2] / 255,
    c = Math.max(i, u, l),
    v = c - Math.min(i, u, l),
    f = function (k) {
      return (c - k) / 6 / v + 1 / 2;
    };
  return (
    v === 0
      ? ((t = 0), (o = 0))
      : ((o = v / c),
        (r = f(i)),
        (e = f(u)),
        (n = f(l)),
        i === c
          ? (t = n - e)
          : u === c
          ? (t = 1 / 3 + r - n)
          : l === c && (t = 2 / 3 + e - r),
        t < 0 ? (t += 1) : t > 1 && (t -= 1)),
    [t * 360, o * 100, c * 100]
  );
};
s.rgb.hwb = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2],
    t = s.rgb.hsl(a)[0],
    o = (1 / 255) * Math.min(r, Math.min(e, n));
  return (
    (n = 1 - (1 / 255) * Math.max(r, Math.max(e, n))), [t, o * 100, n * 100]
  );
};
s.rgb.cmyk = function (a) {
  var r = a[0] / 255,
    e = a[1] / 255,
    n = a[2] / 255,
    t = Math.min(1 - r, 1 - e, 1 - n),
    o = (1 - r - t) / (1 - t) || 0,
    i = (1 - e - t) / (1 - t) || 0,
    u = (1 - n - t) / (1 - t) || 0;
  return [o * 100, i * 100, u * 100, t * 100];
};
function xe(a, r) {
  return (
    Math.pow(a[0] - r[0], 2) +
    Math.pow(a[1] - r[1], 2) +
    Math.pow(a[2] - r[2], 2)
  );
}
s.rgb.keyword = function (a) {
  var r = Xr[a];
  if (r) return r;
  for (var e = 1 / 0, n, t = 0, o = Object.keys(G); t < o.length; t++) {
    var i = o[t],
      u = G[i],
      l = xe(a, u);
    l < e && ((e = l), (n = i));
  }
  return n;
};
s.keyword.rgb = function (a) {
  return G[a];
};
s.rgb.xyz = function (a) {
  var r = a[0] / 255,
    e = a[1] / 255,
    n = a[2] / 255;
  (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92),
    (e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92),
    (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92);
  var t = r * 0.4124 + e * 0.3576 + n * 0.1805,
    o = r * 0.2126 + e * 0.7152 + n * 0.0722,
    i = r * 0.0193 + e * 0.1192 + n * 0.9505;
  return [t * 100, o * 100, i * 100];
};
s.rgb.lab = function (a) {
  var r = s.rgb.xyz(a),
    e = r[0],
    n = r[1],
    t = r[2];
  (e /= 95.047),
    (n /= 100),
    (t /= 108.883),
    (e = e > 0.008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116),
    (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116),
    (t = t > 0.008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116);
  var o = 116 * n - 16,
    i = 500 * (e - n),
    u = 200 * (n - t);
  return [o, i, u];
};
s.hsl.rgb = function (a) {
  var r = a[0] / 360,
    e = a[1] / 100,
    n = a[2] / 100,
    t,
    o,
    i;
  if (e === 0) return (i = n * 255), [i, i, i];
  n < 0.5 ? (t = n * (1 + e)) : (t = n + e - n * e);
  for (var u = 2 * n - t, l = [0, 0, 0], c = 0; c < 3; c++)
    (o = r + (1 / 3) * -(c - 1)),
      o < 0 && o++,
      o > 1 && o--,
      6 * o < 1
        ? (i = u + (t - u) * 6 * o)
        : 2 * o < 1
        ? (i = t)
        : 3 * o < 2
        ? (i = u + (t - u) * (2 / 3 - o) * 6)
        : (i = u),
      (l[c] = i * 255);
  return l;
};
s.hsl.hsv = function (a) {
  var r = a[0],
    e = a[1] / 100,
    n = a[2] / 100,
    t = e,
    o = Math.max(n, 0.01);
  (n *= 2), (e *= n <= 1 ? n : 2 - n), (t *= o <= 1 ? o : 2 - o);
  var i = (n + e) / 2,
    u = n === 0 ? (2 * t) / (o + t) : (2 * e) / (n + e);
  return [r, u * 100, i * 100];
};
s.hsv.rgb = function (a) {
  var r = a[0] / 60,
    e = a[1] / 100,
    n = a[2] / 100,
    t = Math.floor(r) % 6,
    o = r - Math.floor(r),
    i = 255 * n * (1 - e),
    u = 255 * n * (1 - e * o),
    l = 255 * n * (1 - e * (1 - o));
  switch (((n *= 255), t)) {
    case 0:
      return [n, l, i];
    case 1:
      return [u, n, i];
    case 2:
      return [i, n, l];
    case 3:
      return [i, u, n];
    case 4:
      return [l, i, n];
    case 5:
      return [n, i, u];
  }
};
s.hsv.hsl = function (a) {
  var r = a[0],
    e = a[1] / 100,
    n = a[2] / 100,
    t = Math.max(n, 0.01),
    o,
    i;
  i = (2 - e) * n;
  var u = (2 - e) * t;
  return (
    (o = e * t),
    (o /= u <= 1 ? u : 2 - u),
    (o = o || 0),
    (i /= 2),
    [r, o * 100, i * 100]
  );
};
s.hwb.rgb = function (a) {
  var r = a[0] / 360,
    e = a[1] / 100,
    n = a[2] / 100,
    t = e + n,
    o;
  t > 1 && ((e /= t), (n /= t));
  var i = Math.floor(6 * r),
    u = 1 - n;
  (o = 6 * r - i), (i & 1) !== 0 && (o = 1 - o);
  var l = e + o * (u - e),
    c,
    v,
    f;
  switch (i) {
    default:
    case 6:
    case 0:
      (c = u), (v = l), (f = e);
      break;
    case 1:
      (c = l), (v = u), (f = e);
      break;
    case 2:
      (c = e), (v = u), (f = l);
      break;
    case 3:
      (c = e), (v = l), (f = u);
      break;
    case 4:
      (c = l), (v = e), (f = u);
      break;
    case 5:
      (c = u), (v = e), (f = l);
      break;
  }
  return [c * 255, v * 255, f * 255];
};
s.cmyk.rgb = function (a) {
  var r = a[0] / 100,
    e = a[1] / 100,
    n = a[2] / 100,
    t = a[3] / 100,
    o = 1 - Math.min(1, r * (1 - t) + t),
    i = 1 - Math.min(1, e * (1 - t) + t),
    u = 1 - Math.min(1, n * (1 - t) + t);
  return [o * 255, i * 255, u * 255];
};
s.xyz.rgb = function (a) {
  var r = a[0] / 100,
    e = a[1] / 100,
    n = a[2] / 100,
    t,
    o,
    i;
  return (
    (t = r * 3.2406 + e * -1.5372 + n * -0.4986),
    (o = r * -0.9689 + e * 1.8758 + n * 0.0415),
    (i = r * 0.0557 + e * -0.204 + n * 1.057),
    (t = t > 0.0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055 : t * 12.92),
    (o = o > 0.0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : o * 12.92),
    (i = i > 0.0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : i * 12.92),
    (t = Math.min(Math.max(0, t), 1)),
    (o = Math.min(Math.max(0, o), 1)),
    (i = Math.min(Math.max(0, i), 1)),
    [t * 255, o * 255, i * 255]
  );
};
s.xyz.lab = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2];
  (r /= 95.047),
    (e /= 100),
    (n /= 108.883),
    (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116),
    (e = e > 0.008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116),
    (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116);
  var t = 116 * e - 16,
    o = 500 * (r - e),
    i = 200 * (e - n);
  return [t, o, i];
};
s.lab.xyz = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2],
    t,
    o,
    i;
  (o = (r + 16) / 116), (t = e / 500 + o), (i = o - n / 200);
  var u = Math.pow(o, 3),
    l = Math.pow(t, 3),
    c = Math.pow(i, 3);
  return (
    (o = u > 0.008856 ? u : (o - 16 / 116) / 7.787),
    (t = l > 0.008856 ? l : (t - 16 / 116) / 7.787),
    (i = c > 0.008856 ? c : (i - 16 / 116) / 7.787),
    (t *= 95.047),
    (o *= 100),
    (i *= 108.883),
    [t, o, i]
  );
};
s.lab.lch = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2],
    t,
    o = Math.atan2(n, e);
  (t = (o * 360) / 2 / Math.PI), t < 0 && (t += 360);
  var i = Math.sqrt(e * e + n * n);
  return [r, i, t];
};
s.lch.lab = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2],
    t = (n / 360) * 2 * Math.PI,
    o = e * Math.cos(t),
    i = e * Math.sin(t);
  return [r, o, i];
};
s.rgb.ansi16 = function (a) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
    e = N(a, 3),
    n = e[0],
    t = e[1],
    o = e[2],
    i = r === null ? s.rgb.hsv(a)[2] : r;
  if (((i = Math.round(i / 50)), i === 0)) return 30;
  var u =
    30 +
    ((Math.round(o / 255) << 2) |
      (Math.round(t / 255) << 1) |
      Math.round(n / 255));
  return i === 2 && (u += 60), u;
};
s.hsv.ansi16 = function (a) {
  return s.rgb.ansi16(s.hsv.rgb(a), a[2]);
};
s.rgb.ansi256 = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2];
  if (r === e && e === n)
    return r < 8 ? 16 : r > 248 ? 231 : Math.round(((r - 8) / 247) * 24) + 232;
  var t =
    16 +
    36 * Math.round((r / 255) * 5) +
    6 * Math.round((e / 255) * 5) +
    Math.round((n / 255) * 5);
  return t;
};
s.ansi16.rgb = function (a) {
  var r = a % 10;
  if (r === 0 || r === 7)
    return a > 50 && (r += 3.5), (r = (r / 10.5) * 255), [r, r, r];
  var e = (~~(a > 50) + 1) * 0.5,
    n = (r & 1) * e * 255,
    t = ((r >> 1) & 1) * e * 255,
    o = ((r >> 2) & 1) * e * 255;
  return [n, t, o];
};
s.ansi256.rgb = function (a) {
  if (a >= 232) {
    var r = (a - 232) * 10 + 8;
    return [r, r, r];
  }
  a -= 16;
  var e,
    n = (Math.floor(a / 36) / 5) * 255,
    t = (Math.floor((e = a % 36) / 6) / 5) * 255,
    o = ((e % 6) / 5) * 255;
  return [n, t, o];
};
s.rgb.hex = function (a) {
  var r =
      ((Math.round(a[0]) & 255) << 16) +
      ((Math.round(a[1]) & 255) << 8) +
      (Math.round(a[2]) & 255),
    e = r.toString(16).toUpperCase();
  return "000000".substring(e.length) + e;
};
s.hex.rgb = function (a) {
  var r = a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!r) return [0, 0, 0];
  var e = r[0];
  r[0].length === 3 &&
    (e = e
      .split("")
      .map(function (u) {
        return u + u;
      })
      .join(""));
  var n = parseInt(e, 16),
    t = (n >> 16) & 255,
    o = (n >> 8) & 255,
    i = n & 255;
  return [t, o, i];
};
s.rgb.hcg = function (a) {
  var r = a[0] / 255,
    e = a[1] / 255,
    n = a[2] / 255,
    t = Math.max(Math.max(r, e), n),
    o = Math.min(Math.min(r, e), n),
    i = t - o,
    u,
    l;
  return (
    i < 1 ? (u = o / (1 - i)) : (u = 0),
    i <= 0
      ? (l = 0)
      : t === r
      ? (l = ((e - n) / i) % 6)
      : t === e
      ? (l = 2 + (n - r) / i)
      : (l = 4 + (r - e) / i),
    (l /= 6),
    (l %= 1),
    [l * 360, i * 100, u * 100]
  );
};
s.hsl.hcg = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = e < 0.5 ? 2 * r * e : 2 * r * (1 - e),
    t = 0;
  return n < 1 && (t = (e - 0.5 * n) / (1 - n)), [a[0], n * 100, t * 100];
};
s.hsv.hcg = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = r * e,
    t = 0;
  return n < 1 && (t = (e - n) / (1 - n)), [a[0], n * 100, t * 100];
};
s.hcg.rgb = function (a) {
  var r = a[0] / 360,
    e = a[1] / 100,
    n = a[2] / 100;
  if (e === 0) return [n * 255, n * 255, n * 255];
  var t = [0, 0, 0],
    o = (r % 1) * 6,
    i = o % 1,
    u = 1 - i,
    l = 0;
  switch (Math.floor(o)) {
    case 0:
      (t[0] = 1), (t[1] = i), (t[2] = 0);
      break;
    case 1:
      (t[0] = u), (t[1] = 1), (t[2] = 0);
      break;
    case 2:
      (t[0] = 0), (t[1] = 1), (t[2] = i);
      break;
    case 3:
      (t[0] = 0), (t[1] = u), (t[2] = 1);
      break;
    case 4:
      (t[0] = i), (t[1] = 0), (t[2] = 1);
      break;
    default:
      (t[0] = 1), (t[1] = 0), (t[2] = u);
  }
  return (
    (l = (1 - e) * n),
    [(e * t[0] + l) * 255, (e * t[1] + l) * 255, (e * t[2] + l) * 255]
  );
};
s.hcg.hsv = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = r + e * (1 - r),
    t = 0;
  return n > 0 && (t = r / n), [a[0], t * 100, n * 100];
};
s.hcg.hsl = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = e * (1 - r) + 0.5 * r,
    t = 0;
  return (
    n > 0 && n < 0.5
      ? (t = r / (2 * n))
      : n >= 0.5 && n < 1 && (t = r / (2 * (1 - n))),
    [a[0], t * 100, n * 100]
  );
};
s.hcg.hwb = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = r + e * (1 - r);
  return [a[0], (n - r) * 100, (1 - n) * 100];
};
s.hwb.hcg = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = 1 - e,
    t = n - r,
    o = 0;
  return t < 1 && (o = (n - t) / (1 - t)), [a[0], t * 100, o * 100];
};
s.apple.rgb = function (a) {
  return [(a[0] / 65535) * 255, (a[1] / 65535) * 255, (a[2] / 65535) * 255];
};
s.rgb.apple = function (a) {
  return [(a[0] / 255) * 65535, (a[1] / 255) * 65535, (a[2] / 255) * 65535];
};
s.gray.rgb = function (a) {
  return [(a[0] / 100) * 255, (a[0] / 100) * 255, (a[0] / 100) * 255];
};
s.gray.hsl = function (a) {
  return [0, 0, a[0]];
};
s.gray.hsv = s.gray.hsl;
s.gray.hwb = function (a) {
  return [0, 100, a[0]];
};
s.gray.cmyk = function (a) {
  return [0, 0, 0, a[0]];
};
s.gray.lab = function (a) {
  return [a[0], 0, 0];
};
s.gray.hex = function (a) {
  var r = Math.round((a[0] / 100) * 255) & 255,
    e = (r << 16) + (r << 8) + r,
    n = e.toString(16).toUpperCase();
  return "000000".substring(n.length) + n;
};
s.rgb.gray = function (a) {
  var r = (a[0] + a[1] + a[2]) / 3;
  return [(r / 255) * 100];
};
var Z = qr;
function we() {
  for (var a = {}, r = Object.keys(Z), e = r.length, n = 0; n < e; n++)
    a[r[n]] = { distance: -1, parent: null };
  return a;
}
function ke(a) {
  var r = we(),
    e = [a];
  for (r[a].distance = 0; e.length; )
    for (
      var n = e.pop(), t = Object.keys(Z[n]), o = t.length, i = 0;
      i < o;
      i++
    ) {
      var u = t[i],
        l = r[u];
      l.distance === -1 &&
        ((l.distance = r[n].distance + 1), (l.parent = n), e.unshift(u));
    }
  return r;
}
function Me(a, r) {
  return function (e) {
    return r(a(e));
  };
}
function Ce(a, r) {
  for (
    var e = [r[a].parent, a], n = Z[r[a].parent][a], t = r[a].parent;
    r[t].parent;

  )
    e.unshift(r[t].parent), (n = Me(Z[r[t].parent][t], n)), (t = r[t].parent);
  return (n.conversion = e), n;
}
var Se = function (r) {
    for (
      var e = ke(r), n = {}, t = Object.keys(e), o = t.length, i = 0;
      i < o;
      i++
    ) {
      var u = t[i],
        l = e[u];
      l.parent !== null && (n[u] = Ce(u, e));
    }
    return n;
  },
  vr = qr,
  Ee = Se,
  L = {},
  _e = Object.keys(vr);
function Oe(a) {
  var r = function () {
    for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++)
      t[o] = arguments[o];
    var i = t[0];
    return i == null ? i : (i.length > 1 && (t = i), a(t));
  };
  return "conversion" in a && (r.conversion = a.conversion), r;
}
function Ie(a) {
  var r = function () {
    for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++)
      t[o] = arguments[o];
    var i = t[0];
    if (i == null) return i;
    i.length > 1 && (t = i);
    var u = a(t);
    if (ur(u) === "object")
      for (var l = u.length, c = 0; c < l; c++) u[c] = Math.round(u[c]);
    return u;
  };
  return "conversion" in a && (r.conversion = a.conversion), r;
}
_e.forEach(function (a) {
  (L[a] = {}),
    Object.defineProperty(L[a], "channels", { value: vr[a].channels }),
    Object.defineProperty(L[a], "labels", { value: vr[a].labels });
  var r = Ee(a),
    e = Object.keys(r);
  e.forEach(function (n) {
    var t = r[n];
    (L[a][n] = Ie(t)), (L[a][n].raw = Oe(t));
  });
});
var H = L,
  Re = Jr,
  He = function () {
    return Re.Date.now();
  },
  Ne = He,
  Te = /\s/;
function Fe(a) {
  for (var r = a.length; r-- && Te.test(a.charAt(r)); );
  return r;
}
var Pe = Fe,
  je = Pe,
  ze = /^\s+/;
function Le(a) {
  return a && a.slice(0, je(a) + 1).replace(ze, "");
}
var Be = Le,
  $e = Be,
  Sr = hr,
  Xe = Yr,
  Er = 0 / 0,
  qe = /^[-+]0x[0-9a-f]+$/i,
  Ae = /^0b[01]+$/i,
  Ve = /^0o[0-7]+$/i,
  Ge = parseInt;
function We(a) {
  if (typeof a == "number") return a;
  if (Xe(a)) return Er;
  if (Sr(a)) {
    var r = typeof a.valueOf == "function" ? a.valueOf() : a;
    a = Sr(r) ? r + "" : r;
  }
  if (typeof a != "string") return a === 0 ? a : +a;
  a = $e(a);
  var e = Ae.test(a);
  return e || Ve.test(a) ? Ge(a.slice(2), e ? 2 : 8) : qe.test(a) ? Er : +a;
}
var Ke = We,
  De = hr,
  ir = Ne,
  _r = Ke,
  Ue = "Expected a function",
  Ye = Math.max,
  Je = Math.min;
function Qe(a, r, e) {
  var n,
    t,
    o,
    i,
    u,
    l,
    c = 0,
    v = !1,
    f = !1,
    y = !0;
  if (typeof a != "function") throw new TypeError(Ue);
  (r = _r(r) || 0),
    De(e) &&
      ((v = !!e.leading),
      (f = "maxWait" in e),
      (o = f ? Ye(_r(e.maxWait) || 0, r) : o),
      (y = "trailing" in e ? !!e.trailing : y));
  function k(x) {
    var T = n,
      F = t;
    return (n = t = void 0), (c = x), (i = a.apply(F, T)), i;
  }
  function C(x) {
    return (c = x), (u = setTimeout(h, r)), v ? k(x) : i;
  }
  function I(x) {
    var T = x - l,
      F = x - c,
      K = r - T;
    return f ? Je(K, o - F) : K;
  }
  function m(x) {
    var T = x - l,
      F = x - c;
    return l === void 0 || T >= r || T < 0 || (f && F >= o);
  }
  function h() {
    var x = ir();
    if (m(x)) return p(x);
    u = setTimeout(h, I(x));
  }
  function p(x) {
    return (u = void 0), y && n ? k(x) : ((n = t = void 0), i);
  }
  function g() {
    u !== void 0 && clearTimeout(u), (c = 0), (n = l = t = u = void 0);
  }
  function M() {
    return u === void 0 ? i : p(ir());
  }
  function S() {
    var x = ir(),
      T = m(x);
    if (((n = arguments), (t = this), (l = x), T)) {
      if (u === void 0) return C(l);
      if (f) return clearTimeout(u), (u = setTimeout(h, r)), k(l);
    }
    return u === void 0 && (u = setTimeout(h, r)), i;
  }
  return (S.cancel = g), (S.flush = M), S;
}
var Ze = Qe,
  ra = Ze,
  ea = hr,
  aa = "Expected a function";
function na(a, r, e) {
  var n = !0,
    t = !0;
  if (typeof a != "function") throw new TypeError(aa);
  return (
    ea(e) &&
      ((n = "leading" in e ? !!e.leading : n),
      (t = "trailing" in e ? !!e.trailing : t)),
    ra(a, r, { leading: n, maxWait: r, trailing: t })
  );
}
var ta = na,
  oa = P.div({ position: "relative", maxWidth: 250 }),
  ia = P(Rr)({ position: "absolute", zIndex: 1, top: 4, left: 4 }),
  ua = P.div({
    width: 200,
    margin: 5,
    ".react-colorful__saturation": { borderRadius: "4px 4px 0 0" },
    ".react-colorful__hue": { boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)" },
    ".react-colorful__last-control": { borderRadius: "0 0 4px 4px" },
  }),
  la = P(Gr)(function (a) {
    var r = a.theme;
    return { fontFamily: r.typography.fonts.base };
  }),
  ca = P.div({
    display: "grid",
    gridTemplateColumns: "repeat(9, 16px)",
    gap: 6,
    padding: 3,
    marginTop: 5,
    width: 200,
  }),
  sa = P.div(function (a) {
    var r = a.theme,
      e = a.active;
    return {
      width: 16,
      height: 16,
      boxShadow: e
        ? ""
            .concat(r.appBorderColor, " 0 0 0 1px inset, ")
            .concat(r.color.mediumdark, "50 0 0 0 4px")
        : "".concat(r.appBorderColor, " 0 0 0 1px inset"),
      borderRadius: r.appBorderRadius,
    };
  }),
  va = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
  Or = function (r) {
    var e = r.value,
      n = r.active,
      t = r.onClick,
      o = r.style,
      i = Ur(r, ["value", "active", "onClick", "style"]),
      u = "linear-gradient("
        .concat(e, ", ")
        .concat(e, "), ")
        .concat(va, ", linear-gradient(#fff, #fff)");
    return w(sa, {
      ...Object.assign(
        {},
        i,
        { active: n, onClick: t },
        { style: Object.assign(Object.assign({}, o), { backgroundImage: u }) }
      ),
    });
  },
  fa = P(Wr.Input)(function (a) {
    var r = a.theme;
    return {
      width: "100%",
      paddingLeft: 30,
      paddingRight: 30,
      boxSizing: "border-box",
      fontFamily: r.typography.fonts.base,
    };
  }),
  ha = P(Kr)(function (a) {
    var r = a.theme;
    return {
      position: "absolute",
      zIndex: 1,
      top: 6,
      right: 7,
      width: 20,
      height: 20,
      padding: 4,
      boxSizing: "border-box",
      cursor: "pointer",
      color: r.input.color,
    };
  }),
  b;
(function (a) {
  (a.RGB = "rgb"), (a.HSL = "hsl"), (a.HEX = "hex");
})(b || (b = {}));
var U = Object.values(b),
  da = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,
  pa = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,
  ga = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,
  fr = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,
  ba = /^\s*#?([0-9a-f]{3})\s*$/i,
  ma = ((X = {}), E(X, b.HEX, ve), E(X, b.RGB, ge), E(X, b.HSL, de), X),
  Y =
    ((q = {}),
    E(q, b.HEX, "transparent"),
    E(q, b.RGB, "rgba(0, 0, 0, 0)"),
    E(q, b.HSL, "hsla(0, 0%, 0%, 0)"),
    q),
  Ir = function (r) {
    var e = r == null ? void 0 : r.match(da);
    if (!e) return [0, 0, 0, 1];
    var n = N(e, 5),
      t = n[1],
      o = n[2],
      i = n[3],
      u = n[4],
      l = u === void 0 ? 1 : u;
    return [t, o, i, l].map(Number);
  },
  V = function (r) {
    var e;
    if (!!r) {
      var n = !0;
      if (pa.test(r)) {
        var t,
          o = Ir(r),
          i = N(o, 4),
          u = i[0],
          l = i[1],
          c = i[2],
          v = i[3],
          f = H.rgb.hsl([u, l, c]) || [0, 0, 0],
          y = N(f, 3),
          k = y[0],
          C = y[1],
          I = y[2];
        return (
          (t = {
            valid: n,
            value: r,
            keyword: H.rgb.keyword([u, l, c]),
            colorSpace: b.RGB,
          }),
          E(t, b.RGB, r),
          E(
            t,
            b.HSL,
            "hsla("
              .concat(k, ", ")
              .concat(C, "%, ")
              .concat(I, "%, ")
              .concat(v, ")")
          ),
          E(t, b.HEX, "#".concat(H.rgb.hex([u, l, c]).toLowerCase())),
          t
        );
      }
      if (ga.test(r)) {
        var m,
          h = Ir(r),
          p = N(h, 4),
          g = p[0],
          M = p[1],
          S = p[2],
          x = p[3],
          T = H.hsl.rgb([g, M, S]) || [0, 0, 0],
          F = N(T, 3),
          K = F[0],
          Ar = F[1],
          Vr = F[2];
        return (
          (m = {
            valid: n,
            value: r,
            keyword: H.hsl.keyword([g, M, S]),
            colorSpace: b.HSL,
          }),
          E(
            m,
            b.RGB,
            "rgba("
              .concat(K, ", ")
              .concat(Ar, ", ")
              .concat(Vr, ", ")
              .concat(x, ")")
          ),
          E(m, b.HSL, r),
          E(m, b.HEX, "#".concat(H.hsl.hex([g, M, S]).toLowerCase())),
          m
        );
      }
      var D = r.replace("#", ""),
        $ = H.keyword.rgb(D) || H.hex.rgb(D),
        er = H.rgb.hsl($),
        j = r;
      if (
        (/[^#a-f0-9]/i.test(r) ? (j = D) : fr.test(r) && (j = "#".concat(D)),
        j.startsWith("#"))
      )
        n = fr.test(j);
      else
        try {
          H.keyword.hex(j);
        } catch {
          n = !1;
        }
      return (
        (e = {
          valid: n,
          value: j,
          keyword: H.rgb.keyword($),
          colorSpace: b.HEX,
        }),
        E(
          e,
          b.RGB,
          "rgba(".concat($[0], ", ").concat($[1], ", ").concat($[2], ", 1)")
        ),
        E(
          e,
          b.HSL,
          "hsla("
            .concat(er[0], ", ")
            .concat(er[1], "%, ")
            .concat(er[2], "%, 1)")
        ),
        E(e, b.HEX, j),
        e
      );
    }
  },
  ya = function (r, e, n) {
    if (!r || !(e != null && e.valid)) return Y[n];
    if (n !== b.HEX) return (e == null ? void 0 : e[n]) || Y[n];
    if (!e.hex.startsWith("#"))
      try {
        return "#".concat(H.keyword.hex(e.hex));
      } catch {
        return Y.hex;
      }
    var t = e.hex.match(ba);
    if (!t) return fr.test(e.hex) ? e.hex : Y.hex;
    var o = t[1].split(""),
      i = N(o, 3),
      u = i[0],
      l = i[1],
      c = i[2];
    return "#".concat(u).concat(u).concat(l).concat(l).concat(c).concat(c);
  },
  xa = function (r, e) {
    var n = d.exports.useState(r || ""),
      t = N(n, 2),
      o = t[0],
      i = t[1],
      u = d.exports.useState(function () {
        return V(o);
      }),
      l = N(u, 2),
      c = l[0],
      v = l[1],
      f = d.exports.useState((c == null ? void 0 : c.colorSpace) || b.HEX),
      y = N(f, 2),
      k = y[0],
      C = y[1];
    d.exports.useEffect(
      function () {
        r === void 0 && (i(""), v(void 0), C(b.HEX));
      },
      [r]
    );
    var I = d.exports.useMemo(
        function () {
          return ya(o, c, k).toLowerCase();
        },
        [o, c, k]
      ),
      m = d.exports.useCallback(
        function (p) {
          var g = V(p);
          i((g == null ? void 0 : g.value) || p || ""),
            g && (v(g), C(g.colorSpace), e(g.value));
        },
        [e]
      ),
      h = d.exports.useCallback(
        function () {
          var p = U.indexOf(k) + 1;
          p >= U.length && (p = 0), C(U[p]);
          var g = (c == null ? void 0 : c[U[p]]) || "";
          i(g), e(g);
        },
        [c, k, e]
      );
    return {
      value: o,
      realValue: I,
      updateValue: m,
      color: c,
      colorSpace: k,
      cycleColorSpace: h,
    };
  },
  rr = function (r) {
    return r.replace(/\s*/, "").toLowerCase();
  },
  wa = function (r, e, n) {
    var t = d.exports.useState(e != null && e.valid ? [e] : []),
      o = N(t, 2),
      i = o[0],
      u = o[1];
    d.exports.useEffect(
      function () {
        e === void 0 && u([]);
      },
      [e]
    );
    var l = d.exports.useMemo(
        function () {
          var v = (r || []).map(function (f) {
            return typeof f == "string"
              ? V(f)
              : f.title
              ? Object.assign(Object.assign({}, V(f.color)), {
                  keyword: f.title,
                })
              : V(f.color);
          });
          return v.concat(i).filter(Boolean).slice(-27);
        },
        [r, i]
      ),
      c = d.exports.useCallback(
        function (v) {
          !(v != null && v.valid) ||
            l.some(function (f) {
              return rr(f[n]) === rr(v[n]);
            }) ||
            u(function (f) {
              return f.concat(v);
            });
        },
        [n, l]
      );
    return { presets: l, addPreset: c };
  },
  Ia = function (r) {
    var e = r.name,
      n = r.value,
      t = r.onChange,
      o = r.onFocus,
      i = r.onBlur,
      u = r.presetColors,
      l = r.startOpen,
      c = xa(n, ta(t, 200)),
      v = c.value,
      f = c.realValue,
      y = c.updateValue,
      k = c.color,
      C = c.colorSpace,
      I = c.cycleColorSpace,
      m = wa(u, k, C),
      h = m.presets,
      p = m.addPreset,
      g = ma[C];
    return Q(oa, {
      children: [
        w(ia, {
          trigger: "click",
          startOpen: l,
          closeOnClick: !0,
          onVisibilityChange: function () {
            return p(k);
          },
          tooltip: Q(ua, {
            children: [
              w(g, {
                ...Object.assign(
                  { color: f === "transparent" ? "#000000" : f },
                  { onChange: y, onFocus: o, onBlur: i }
                ),
              }),
              h.length > 0 &&
                w(ca, {
                  children: h.map(function (M, S) {
                    return w(
                      Rr,
                      {
                        hasChrome: !1,
                        tooltip: w(la, { note: M.keyword || M.value }),
                        children: w(Or, {
                          value: M[C],
                          active: k && rr(M[C]) === rr(k[C]),
                          onClick: function () {
                            return y(M.value);
                          },
                        }),
                      },
                      "".concat(M.value, "-").concat(S)
                    );
                  }),
                }),
            ],
          }),
          children: w(Or, { value: f, style: { margin: 4 } }),
        }),
        w(fa, {
          id: Dr(e),
          value: v,
          onChange: function (S) {
            return y(S.target.value);
          },
          onFocus: function (S) {
            return S.target.select();
          },
          placeholder: "Choose color...",
        }),
        v ? w(ha, { icon: "markup", onClick: I }) : null,
      ],
    });
  };
export { Ia as ColorControl, Ia as default };
//# sourceMappingURL=Color-f953d088.9b1c0446.js.map
