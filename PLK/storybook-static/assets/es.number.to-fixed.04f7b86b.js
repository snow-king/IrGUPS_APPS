import {_ as R, A as E, B as F, v as I, x as O, y as x, z as S,} from "./iframe.657ba62d.js";

var N = x,
  T = I,
  j = O,
  C = RangeError,
  q = function (i) {
    var r = T(j(this)),
      e = "",
      t = N(i);
    if (t < 0 || t == 1 / 0) throw C("Wrong number of repetitions");
    for (; t > 0; (t >>>= 1) && (r += r)) t & 1 && (e += r);
    return e;
  },
  z = R,
  p = S,
  D = x,
  V = F,
  _ = q,
  d = E,
  k = RangeError,
  m = String,
  y = Math.floor,
  $ = p(_),
  w = p("".slice),
  l = p((1).toFixed),
  u = function (a, i, r) {
    return i === 0 ? r : i % 2 === 1 ? u(a, i - 1, r * a) : u(a * a, i / 2, r);
  },
  A = function (a) {
    for (var i = 0, r = a; r >= 4096; ) (i += 12), (r /= 4096);
    for (; r >= 2; ) (i += 1), (r /= 2);
    return i;
  },
  f = function (a, i, r) {
    for (var e = -1, t = r; ++e < 6; )
      (t += i * a[e]), (a[e] = t % 1e7), (t = y(t / 1e7));
  },
  h = function (a, i) {
    for (var r = 6, e = 0; --r >= 0; )
      (e += a[r]), (a[r] = y(e / i)), (e = (e % i) * 1e7);
  },
  b = function (a) {
    for (var i = 6, r = ""; --i >= 0; )
      if (r !== "" || i === 0 || a[i] !== 0) {
        var e = m(a[i]);
        r = r === "" ? e : r + $("0", 7 - e.length) + e;
      }
    return r;
  },
  B =
    d(function () {
      return (
        l(8e-5, 3) !== "0.000" ||
        l(0.9, 0) !== "1" ||
        l(1.255, 2) !== "1.25" ||
        l(0xde0b6b3a7640080, 0) !== "1000000000000000128"
      );
    }) ||
    !d(function () {
      l({});
    });
z(
  { target: "Number", proto: !0, forced: B },
  {
    toFixed: function (i) {
      var r = V(this),
        e = D(i),
        t = [0, 0, 0, 0, 0, 0],
        c = "",
        n = "0",
        o,
        g,
        v,
        s;
      if (e < 0 || e > 20) throw k("Incorrect fraction digits");
      if (r != r) return "NaN";
      if (r <= -1e21 || r >= 1e21) return m(r);
      if ((r < 0 && ((c = "-"), (r = -r)), r > 1e-21))
        if (
          ((o = A(r * u(2, 69, 1)) - 69),
          (g = o < 0 ? r * u(2, -o, 1) : r / u(2, o, 1)),
          (g *= 4503599627370496),
          (o = 52 - o),
          o > 0)
        ) {
          for (f(t, 0, g), v = e; v >= 7; ) f(t, 1e7, 0), (v -= 7);
          for (f(t, u(10, v, 1), 0), v = o - 1; v >= 23; )
            h(t, 1 << 23), (v -= 23);
          h(t, 1 << v), f(t, 1, 1), h(t, 2), (n = b(t));
        } else f(t, 0, g), f(t, 1 << -o, 0), (n = b(t) + $("0", e));
      return (
        e > 0
          ? ((s = n.length),
            (n =
              c +
              (s <= e
                ? "0." + $("0", e - s) + n
                : w(n, 0, s - e) + "." + w(n, s - e))))
          : (n = c + n),
        n
      );
    },
  }
);
export { q as s };
//# sourceMappingURL=es.number.to-fixed.04f7b86b.js.map
