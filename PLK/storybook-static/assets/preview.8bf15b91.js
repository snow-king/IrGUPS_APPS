import {f, j as c, S as v, w as s} from "./iframe.657ba62d.js";
import {m as u} from "./make-decorator.9b42b6f6.js";

var k = "links",
  m = s.document,
  L = s.HTMLElement,
  p = function (e) {
    return f.getChannel().emit(c, e);
  },
  l = function (e) {
    var n = e.target;
    if (n instanceof L) {
      var d = n,
        a = d.dataset,
        i = a.sbKind,
        o = a.sbStory;
      (i || o) && (e.preventDefault(), p({ kind: i, story: o }));
    }
  },
  r = !1,
  h = function () {
    r || ((r = !0), m.addEventListener("click", l));
  },
  E = function () {
    r && ((r = !1), m.removeEventListener("click", l));
  },
  w = u({
    name: "withLinks",
    parameterName: k,
    wrapper: function (e, n) {
      return h(), f.getChannel().once(v, E), e(n);
    },
  });
module && module.hot && module.hot.decline && module.hot.decline();
var T = [w];
export { T as decorators };
//# sourceMappingURL=preview.8bf15b91.js.map
