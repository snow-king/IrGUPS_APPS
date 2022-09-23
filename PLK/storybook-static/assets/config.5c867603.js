import {a as Qu, c as Au, m as Ku} from "./iframe.657ba62d.js";
import {s as Hu} from "./string.dd967029.js";
import {j as Xu, o as Yu} from "./jsx-runtime.9dff8acf.js";
import {V as Zu} from "./vue.esm-bundler.b327b46a.js";
import {a as ue} from "./index.3cfb1b41.js";
import "./es.map.constructor.3fc5bb37.js";
import "./render.bd4b5248.js";

var ee = function (u) {
    switch (u.type) {
      case "function":
        return { name: "function" };
      case "object":
        var r = {};
        return (
          u.signature.properties.forEach(function (a) {
            r[a.key] = Su(a.value);
          }),
          { name: "object", value: r }
        );
      default:
        throw new Error("Unknown: ".concat(u));
    }
  },
  Su = function e(u) {
    var r = u.name,
      a = u.raw,
      t = {};
    switch ((typeof a < "u" && (t.raw = a), u.name)) {
      case "string":
      case "number":
      case "symbol":
      case "boolean":
        return Object.assign({}, t, { name: r });
      case "Array":
        return Object.assign({}, t, {
          name: "array",
          value: u.elements.map(e),
        });
      case "signature":
        return Object.assign({}, t, ee(u));
      case "union":
      case "intersection":
        return Object.assign({}, t, { name: r, value: u.elements.map(e) });
      default:
        return Object.assign({}, t, { name: "other", value: r });
    }
  },
  re = function (u) {
    return u.name === "literal";
  },
  te = function (u) {
    return u.value.replace(/['|"]/g, "");
  },
  ne = function (u) {
    switch (u.type) {
      case "function":
        return { name: "function" };
      case "object":
        var r = {};
        return (
          u.signature.properties.forEach(function (a) {
            r[a.key] = bu(a.value);
          }),
          { name: "object", value: r }
        );
      default:
        throw new Error("Unknown: ".concat(u));
    }
  },
  bu = function e(u) {
    var r = u.name,
      a = u.raw,
      t = {};
    switch ((typeof a < "u" && (t.raw = a), u.name)) {
      case "literal":
        return Object.assign({}, t, { name: "other", value: u.value });
      case "string":
      case "number":
      case "symbol":
      case "boolean":
        return Object.assign({}, t, { name: r });
      case "Array":
        return Object.assign({}, t, {
          name: "array",
          value: u.elements.map(e),
        });
      case "signature":
        return Object.assign({}, t, ne(u));
      case "union":
        return u.elements.every(re)
          ? Object.assign({}, t, { name: "enum", value: u.elements.map(te) })
          : Object.assign({}, t, { name: r, value: u.elements.map(e) });
      case "intersection":
        return Object.assign({}, t, { name: r, value: u.elements.map(e) });
      default:
        return Object.assign({}, t, { name: "other", value: r });
    }
  },
  Nu = /^['"]|['"]$/g,
  ie = function (u) {
    return u.replace(Nu, "");
  },
  ae = function (u) {
    return Nu.test(u);
  },
  De = /^\(.*\) => /,
  se = function e(u) {
    var r = u.name,
      a = u.raw,
      t = u.computed,
      F = u.value,
      n = {};
    switch ((typeof a < "u" && (n.raw = a), r)) {
      case "enum": {
        var p = t
          ? F
          : F.map(function (C) {
              var S = ie(C.value);
              return ae(C.value) || Number.isNaN(Number(S)) ? S : Number(S);
            });
        return Object.assign({}, n, { name: r, value: p });
      }
      case "string":
      case "number":
      case "symbol":
        return Object.assign({}, n, { name: r });
      case "func":
        return Object.assign({}, n, { name: "function" });
      case "bool":
      case "boolean":
        return Object.assign({}, n, { name: "boolean" });
      case "arrayOf":
      case "array":
        return Object.assign({}, n, { name: "array", value: F && e(F) });
      case "object":
        return Object.assign({}, n, { name: r });
      case "objectOf":
        return Object.assign({}, n, { name: r, value: e(F) });
      case "shape":
      case "exact":
        var x = Ku(F, function (C) {
          return e(C);
        });
        return Object.assign({}, n, { name: "object", value: x });
      case "union":
        return Object.assign({}, n, {
          name: "union",
          value: F.map(function (C) {
            return e(C);
          }),
        });
      case "instanceOf":
      case "element":
      case "elementType":
      default: {
        if ((r == null ? void 0 : r.indexOf("|")) > 0)
          try {
            var v = r.split("|").map(function (C) {
              return JSON.parse(C);
            });
            return Object.assign({}, n, { name: "enum", value: v });
          } catch {}
        var U = F ? "".concat(r, "(").concat(F, ")") : r,
          j = De.test(r) ? "function" : "other";
        return Object.assign({}, n, { name: j, value: U });
      }
    }
  },
  Cu = function (u) {
    var r = u.type,
      a = u.tsType,
      t = u.flowType;
    return r != null ? se(r) : a != null ? Su(a) : t != null ? bu(t) : null;
  },
  uu;
(function (e) {
  (e.JAVASCRIPT = "JavaScript"),
    (e.FLOW = "Flow"),
    (e.TYPESCRIPT = "TypeScript"),
    (e.UNKNOWN = "Unknown");
})(uu || (uu = {}));
var Ae = ["null", "undefined"];
function lu(e) {
  return Ae.some(function (u) {
    return u === e;
  });
}
function fu(e) {
  return !!e.__docgenInfo;
}
function oe(e) {
  return e != null && Object.keys(e).length > 0;
}
function Fe(e, u) {
  return fu(e) ? e.__docgenInfo[u] : null;
}
function Ce(e) {
  return fu(e) && Hu(e.__docgenInfo.description);
}
var wu = {},
  ou = {},
  Ou = { exports: {} };
(function () {
  function e(n) {
    if (n == null) return !1;
    switch (n.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return !0;
    }
    return !1;
  }
  function u(n) {
    if (n == null) return !1;
    switch (n.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return !0;
    }
    return !1;
  }
  function r(n) {
    if (n == null) return !1;
    switch (n.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return !0;
    }
    return !1;
  }
  function a(n) {
    return r(n) || (n != null && n.type === "FunctionDeclaration");
  }
  function t(n) {
    switch (n.type) {
      case "IfStatement":
        return n.alternate != null ? n.alternate : n.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return n.body;
    }
    return null;
  }
  function F(n) {
    var p;
    if (n.type !== "IfStatement" || n.alternate == null) return !1;
    p = n.consequent;
    do {
      if (p.type === "IfStatement" && p.alternate == null) return !0;
      p = t(p);
    } while (p);
    return !1;
  }
  Ou.exports = {
    isExpression: e,
    isStatement: r,
    isIterationStatement: u,
    isSourceElement: a,
    isProblematicIfStatement: F,
    trailingStatement: t,
  };
})();
var pu = { exports: {} };
(function () {
  var e, u, r, a, t, F;
  (u = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  }),
    (e = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
    });
  function n(m) {
    return 48 <= m && m <= 57;
  }
  function p(m) {
    return (
      (48 <= m && m <= 57) || (97 <= m && m <= 102) || (65 <= m && m <= 70)
    );
  }
  function x(m) {
    return m >= 48 && m <= 55;
  }
  r = [
    5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
    8239, 8287, 12288, 65279,
  ];
  function v(m) {
    return (
      m === 32 ||
      m === 9 ||
      m === 11 ||
      m === 12 ||
      m === 160 ||
      (m >= 5760 && r.indexOf(m) >= 0)
    );
  }
  function U(m) {
    return m === 10 || m === 13 || m === 8232 || m === 8233;
  }
  function j(m) {
    if (m <= 65535) return String.fromCharCode(m);
    var K = String.fromCharCode(Math.floor((m - 65536) / 1024) + 55296),
      Q = String.fromCharCode(((m - 65536) % 1024) + 56320);
    return K + Q;
  }
  for (a = new Array(128), F = 0; F < 128; ++F)
    a[F] =
      (F >= 97 && F <= 122) || (F >= 65 && F <= 90) || F === 36 || F === 95;
  for (t = new Array(128), F = 0; F < 128; ++F)
    t[F] =
      (F >= 97 && F <= 122) ||
      (F >= 65 && F <= 90) ||
      (F >= 48 && F <= 57) ||
      F === 36 ||
      F === 95;
  function C(m) {
    return m < 128 ? a[m] : u.NonAsciiIdentifierStart.test(j(m));
  }
  function S(m) {
    return m < 128 ? t[m] : u.NonAsciiIdentifierPart.test(j(m));
  }
  function b(m) {
    return m < 128 ? a[m] : e.NonAsciiIdentifierStart.test(j(m));
  }
  function B(m) {
    return m < 128 ? t[m] : e.NonAsciiIdentifierPart.test(j(m));
  }
  pu.exports = {
    isDecimalDigit: n,
    isHexDigit: p,
    isOctalDigit: x,
    isWhiteSpace: v,
    isLineTerminator: U,
    isIdentifierStartES5: C,
    isIdentifierPartES5: S,
    isIdentifierStartES6: b,
    isIdentifierPartES6: B,
  };
})();
var Ru = { exports: {} };
(function () {
  var e = pu.exports;
  function u(C) {
    switch (C) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "let":
        return !0;
      default:
        return !1;
    }
  }
  function r(C, S) {
    return !S && C === "yield" ? !1 : a(C, S);
  }
  function a(C, S) {
    if (S && u(C)) return !0;
    switch (C.length) {
      case 2:
        return C === "if" || C === "in" || C === "do";
      case 3:
        return C === "var" || C === "for" || C === "new" || C === "try";
      case 4:
        return (
          C === "this" ||
          C === "else" ||
          C === "case" ||
          C === "void" ||
          C === "with" ||
          C === "enum"
        );
      case 5:
        return (
          C === "while" ||
          C === "break" ||
          C === "catch" ||
          C === "throw" ||
          C === "const" ||
          C === "yield" ||
          C === "class" ||
          C === "super"
        );
      case 6:
        return (
          C === "return" ||
          C === "typeof" ||
          C === "delete" ||
          C === "switch" ||
          C === "export" ||
          C === "import"
        );
      case 7:
        return C === "default" || C === "finally" || C === "extends";
      case 8:
        return C === "function" || C === "continue" || C === "debugger";
      case 10:
        return C === "instanceof";
      default:
        return !1;
    }
  }
  function t(C, S) {
    return C === "null" || C === "true" || C === "false" || r(C, S);
  }
  function F(C, S) {
    return C === "null" || C === "true" || C === "false" || a(C, S);
  }
  function n(C) {
    return C === "eval" || C === "arguments";
  }
  function p(C) {
    var S, b, B;
    if (C.length === 0 || ((B = C.charCodeAt(0)), !e.isIdentifierStartES5(B)))
      return !1;
    for (S = 1, b = C.length; S < b; ++S)
      if (((B = C.charCodeAt(S)), !e.isIdentifierPartES5(B))) return !1;
    return !0;
  }
  function x(C, S) {
    return (C - 55296) * 1024 + (S - 56320) + 65536;
  }
  function v(C) {
    var S, b, B, m, K;
    if (C.length === 0) return !1;
    for (K = e.isIdentifierStartES6, S = 0, b = C.length; S < b; ++S) {
      if (((B = C.charCodeAt(S)), 55296 <= B && B <= 56319)) {
        if (
          (++S, S >= b || ((m = C.charCodeAt(S)), !(56320 <= m && m <= 57343)))
        )
          return !1;
        B = x(B, m);
      }
      if (!K(B)) return !1;
      K = e.isIdentifierPartES6;
    }
    return !0;
  }
  function U(C, S) {
    return p(C) && !t(C, S);
  }
  function j(C, S) {
    return v(C) && !F(C, S);
  }
  Ru.exports = {
    isKeywordES5: r,
    isKeywordES6: a,
    isReservedWordES5: t,
    isReservedWordES6: F,
    isRestrictedWord: n,
    isIdentifierNameES5: p,
    isIdentifierNameES6: v,
    isIdentifierES5: U,
    isIdentifierES6: j,
  };
})();
(function () {
  (ou.ast = Ou.exports), (ou.code = pu.exports), (ou.keyword = Ru.exports);
})();
var Du = {},
  nu = {};
const Ee = "doctrine",
  ce = "JSDoc parser",
  le = "https://github.com/eslint/doctrine",
  fe = "lib/doctrine.js",
  pe = "3.0.0",
  Be = { node: ">=6.0.0" },
  ye = { lib: "./lib" },
  me = ["lib"],
  he = [
    {
      name: "Nicholas C. Zakas",
      email: "nicholas+npm@nczconsulting.com",
      web: "https://www.nczonline.net",
    },
    {
      name: "Yusuke Suzuki",
      email: "utatane.tea@gmail.com",
      web: "https://github.com/Constellation",
    },
  ],
  de = "eslint/doctrine",
  ge = {
    coveralls: "^3.0.1",
    dateformat: "^1.0.11",
    eslint: "^1.10.3",
    "eslint-release": "^1.0.0",
    linefix: "^0.1.1",
    mocha: "^3.4.2",
    "npm-license": "^0.3.1",
    nyc: "^10.3.2",
    semver: "^5.0.3",
    shelljs: "^0.5.3",
    "shelljs-nodecli": "^0.1.1",
    should: "^5.0.1",
  },
  ve = "Apache-2.0",
  xe = {
    pretest: "npm run lint",
    test: "nyc mocha",
    coveralls: "nyc report --reporter=text-lcov | coveralls",
    lint: "eslint lib/",
    "generate-release": "eslint-generate-release",
    "generate-alpharelease": "eslint-generate-prerelease alpha",
    "generate-betarelease": "eslint-generate-prerelease beta",
    "generate-rcrelease": "eslint-generate-prerelease rc",
    "publish-release": "eslint-publish-release",
  },
  Te = { esutils: "^2.0.2" },
  Se = {
    name: Ee,
    description: ce,
    homepage: le,
    main: fe,
    version: pe,
    engines: Be,
    directories: ye,
    files: me,
    maintainers: he,
    repository: de,
    devDependencies: ge,
    license: ve,
    scripts: xe,
    dependencies: Te,
  };
var Pu = { exports: {} },
  _u = {},
  be = function (u) {
    return (
      u &&
      typeof u == "object" &&
      typeof u.copy == "function" &&
      typeof u.fill == "function" &&
      typeof u.readUInt8 == "function"
    );
  },
  cu = { exports: {} };
typeof Object.create == "function"
  ? (cu.exports = function (u, r) {
      (u.super_ = r),
        (u.prototype = Object.create(r.prototype, {
          constructor: {
            value: u,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        }));
    })
  : (cu.exports = function (u, r) {
      u.super_ = r;
      var a = function () {};
      (a.prototype = r.prototype),
        (u.prototype = new a()),
        (u.prototype.constructor = u);
    });
(function (e) {
  var u = /%[sdj%]/g;
  (e.format = function (o) {
    if (!Y(o)) {
      for (var c = [], l = 0; l < arguments.length; l++)
        c.push(t(arguments[l]));
      return c.join(" ");
    }
    for (
      var l = 1,
        O = arguments,
        L = O.length,
        _ = String(o).replace(u, function (T) {
          if (T === "%%") return "%";
          if (l >= L) return T;
          switch (T) {
            case "%s":
              return String(O[l++]);
            case "%d":
              return Number(O[l++]);
            case "%j":
              try {
                return JSON.stringify(O[l++]);
              } catch {
                return "[Circular]";
              }
            default:
              return T;
          }
        }),
        R = O[l];
      l < L;
      R = O[++l]
    )
      m(R) || !M(R) ? (_ += " " + R) : (_ += " " + t(R));
    return _;
  }),
    (e.deprecate = function (o, c) {
      if (N(Au.process))
        return function () {
          return e.deprecate(o, c).apply(this, arguments);
        };
      if (process.noDeprecation === !0) return o;
      var l = !1;
      function O() {
        if (!l) {
          if (process.throwDeprecation) throw new Error(c);
          process.traceDeprecation ? console.trace(c) : console.error(c),
            (l = !0);
        }
        return o.apply(this, arguments);
      }
      return O;
    });
  var r = {},
    a;
  e.debuglog = function (o) {
    if (
      (N(a) && (a = process.env.NODE_DEBUG || ""), (o = o.toUpperCase()), !r[o])
    )
      if (new RegExp("\\b" + o + "\\b", "i").test(a)) {
        var c = process.pid;
        r[o] = function () {
          var l = e.format.apply(e, arguments);
          console.error("%s %d: %s", o, c, l);
        };
      } else r[o] = function () {};
    return r[o];
  };
  function t(o, c) {
    var l = { seen: [], stylize: n };
    return (
      arguments.length >= 3 && (l.depth = arguments[2]),
      arguments.length >= 4 && (l.colors = arguments[3]),
      B(c) ? (l.showHidden = c) : c && e._extend(l, c),
      N(l.showHidden) && (l.showHidden = !1),
      N(l.depth) && (l.depth = 2),
      N(l.colors) && (l.colors = !1),
      N(l.customInspect) && (l.customInspect = !0),
      l.colors && (l.stylize = F),
      x(l, o, l.depth)
    );
  }
  (e.inspect = t),
    (t.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39],
    }),
    (t.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      regexp: "red",
    });
  function F(o, c) {
    var l = t.styles[c];
    return l
      ? "\x1B[" + t.colors[l][0] + "m" + o + "\x1B[" + t.colors[l][1] + "m"
      : o;
  }
  function n(o, c) {
    return o;
  }
  function p(o) {
    var c = {};
    return (
      o.forEach(function (l, O) {
        c[l] = !0;
      }),
      c
    );
  }
  function x(o, c, l) {
    if (
      o.customInspect &&
      c &&
      z(c.inspect) &&
      c.inspect !== e.inspect &&
      !(c.constructor && c.constructor.prototype === c)
    ) {
      var O = c.inspect(l, o);
      return Y(O) || (O = x(o, O, l)), O;
    }
    var L = v(o, c);
    if (L) return L;
    var _ = Object.keys(c),
      R = p(_);
    if (
      (o.showHidden && (_ = Object.getOwnPropertyNames(c)),
      $(c) && (_.indexOf("message") >= 0 || _.indexOf("description") >= 0))
    )
      return U(c);
    if (_.length === 0) {
      if (z(c)) {
        var T = c.name ? ": " + c.name : "";
        return o.stylize("[Function" + T + "]", "special");
      }
      if (E(c)) return o.stylize(RegExp.prototype.toString.call(c), "regexp");
      if (f(c)) return o.stylize(Date.prototype.toString.call(c), "date");
      if ($(c)) return U(c);
    }
    var w = "",
      i = !1,
      D = ["{", "}"];
    if ((b(c) && ((i = !0), (D = ["[", "]"])), z(c))) {
      var h = c.name ? ": " + c.name : "";
      w = " [Function" + h + "]";
    }
    if (
      (E(c) && (w = " " + RegExp.prototype.toString.call(c)),
      f(c) && (w = " " + Date.prototype.toUTCString.call(c)),
      $(c) && (w = " " + U(c)),
      _.length === 0 && (!i || c.length == 0))
    )
      return D[0] + w + D[1];
    if (l < 0)
      return E(c)
        ? o.stylize(RegExp.prototype.toString.call(c), "regexp")
        : o.stylize("[Object]", "special");
    o.seen.push(c);
    var A;
    return (
      i
        ? (A = j(o, c, l, R, _))
        : (A = _.map(function (s) {
            return C(o, c, l, R, s, i);
          })),
      o.seen.pop(),
      S(A, w, D)
    );
  }
  function v(o, c) {
    if (N(c)) return o.stylize("undefined", "undefined");
    if (Y(c)) {
      var l =
        "'" +
        JSON.stringify(c)
          .replace(/^"|"$/g, "")
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"') +
        "'";
      return o.stylize(l, "string");
    }
    if (Q(c)) return o.stylize("" + c, "number");
    if (B(c)) return o.stylize("" + c, "boolean");
    if (m(c)) return o.stylize("null", "null");
  }
  function U(o) {
    return "[" + Error.prototype.toString.call(o) + "]";
  }
  function j(o, c, l, O, L) {
    for (var _ = [], R = 0, T = c.length; R < T; ++R)
      k(c, String(R)) ? _.push(C(o, c, l, O, String(R), !0)) : _.push("");
    return (
      L.forEach(function (w) {
        w.match(/^\d+$/) || _.push(C(o, c, l, O, w, !0));
      }),
      _
    );
  }
  function C(o, c, l, O, L, _) {
    var R, T, w;
    if (
      ((w = Object.getOwnPropertyDescriptor(c, L) || { value: c[L] }),
      w.get
        ? w.set
          ? (T = o.stylize("[Getter/Setter]", "special"))
          : (T = o.stylize("[Getter]", "special"))
        : w.set && (T = o.stylize("[Setter]", "special")),
      k(O, L) || (R = "[" + L + "]"),
      T ||
        (o.seen.indexOf(w.value) < 0
          ? (m(l) ? (T = x(o, w.value, null)) : (T = x(o, w.value, l - 1)),
            T.indexOf(`
`) > -1 &&
              (_
                ? (T = T.split(
                    `
`
                  )
                    .map(function (i) {
                      return "  " + i;
                    })
                    .join(
                      `
`
                    )
                    .substr(2))
                : (T =
                    `
` +
                    T.split(
                      `
`
                    ).map(function (i) {
                      return "   " + i;
                    }).join(`
`))))
          : (T = o.stylize("[Circular]", "special"))),
      N(R))
    ) {
      if (_ && L.match(/^\d+$/)) return T;
      (R = JSON.stringify("" + L)),
        R.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((R = R.substr(1, R.length - 2)), (R = o.stylize(R, "name")))
          : ((R = R.replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (R = o.stylize(R, "string")));
    }
    return R + ": " + T;
  }
  function S(o, c, l) {
    var O = o.reduce(function (L, _) {
      return (
        _.indexOf(`
`) >= 0,
        L + _.replace(/\u001b\[\d\d?m/g, "").length + 1
      );
    }, 0);
    return O > 60
      ? l[0] +
          (c === ""
            ? ""
            : c +
              `
 `) +
          " " +
          o.join(`,
  `) +
          " " +
          l[1]
      : l[0] + c + " " + o.join(", ") + " " + l[1];
  }
  function b(o) {
    return Array.isArray(o);
  }
  e.isArray = b;
  function B(o) {
    return typeof o == "boolean";
  }
  e.isBoolean = B;
  function m(o) {
    return o === null;
  }
  e.isNull = m;
  function K(o) {
    return o == null;
  }
  e.isNullOrUndefined = K;
  function Q(o) {
    return typeof o == "number";
  }
  e.isNumber = Q;
  function Y(o) {
    return typeof o == "string";
  }
  e.isString = Y;
  function J(o) {
    return typeof o == "symbol";
  }
  e.isSymbol = J;
  function N(o) {
    return o === void 0;
  }
  e.isUndefined = N;
  function E(o) {
    return M(o) && X(o) === "[object RegExp]";
  }
  e.isRegExp = E;
  function M(o) {
    return typeof o == "object" && o !== null;
  }
  e.isObject = M;
  function f(o) {
    return M(o) && X(o) === "[object Date]";
  }
  e.isDate = f;
  function $(o) {
    return M(o) && (X(o) === "[object Error]" || o instanceof Error);
  }
  e.isError = $;
  function z(o) {
    return typeof o == "function";
  }
  e.isFunction = z;
  function g(o) {
    return (
      o === null ||
      typeof o == "boolean" ||
      typeof o == "number" ||
      typeof o == "string" ||
      typeof o == "symbol" ||
      typeof o > "u"
    );
  }
  (e.isPrimitive = g), (e.isBuffer = be);
  function X(o) {
    return Object.prototype.toString.call(o);
  }
  function eu(o) {
    return o < 10 ? "0" + o.toString(10) : o.toString(10);
  }
  var Z = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function tu() {
    var o = new Date(),
      c = [eu(o.getHours()), eu(o.getMinutes()), eu(o.getSeconds())].join(":");
    return [o.getDate(), Z[o.getMonth()], c].join(" ");
  }
  (e.log = function () {
    console.log("%s - %s", tu(), e.format.apply(e, arguments));
  }),
    (e.inherits = cu.exports),
    (e._extend = function (o, c) {
      if (!c || !M(c)) return o;
      for (var l = Object.keys(c), O = l.length; O--; ) o[l[O]] = c[l[O]];
      return o;
    });
  function k(o, c) {
    return Object.prototype.hasOwnProperty.call(o, c);
  }
})(_u);
var Ne = Yu;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function Bu(e, u) {
  if (e === u) return 0;
  for (var r = e.length, a = u.length, t = 0, F = Math.min(r, a); t < F; ++t)
    if (e[t] !== u[t]) {
      (r = e[t]), (a = u[t]);
      break;
    }
  return r < a ? -1 : a < r ? 1 : 0;
}
function su(e) {
  return Au.Buffer && typeof Au.Buffer.isBuffer == "function"
    ? Au.Buffer.isBuffer(e)
    : !!(e != null && e._isBuffer);
}
var H = _u,
  we = Object.prototype.hasOwnProperty,
  yu = Array.prototype.slice,
  ku = (function () {
    return function () {}.name === "foo";
  })();
function mu(e) {
  return Object.prototype.toString.call(e);
}
function hu(e) {
  return su(e) || typeof Au.ArrayBuffer != "function"
    ? !1
    : typeof ArrayBuffer.isView == "function"
    ? ArrayBuffer.isView(e)
    : e
    ? !!(e instanceof DataView || (e.buffer && e.buffer instanceof ArrayBuffer))
    : !1;
}
var P = (Pu.exports = Lu),
  Oe = /\s*function\s+([^\(\s]*)\s*/;
function Iu(e) {
  if (!!H.isFunction(e)) {
    if (ku) return e.name;
    var u = e.toString(),
      r = u.match(Oe);
    return r && r[1];
  }
}
P.AssertionError = function (u) {
  (this.name = "AssertionError"),
    (this.actual = u.actual),
    (this.expected = u.expected),
    (this.operator = u.operator),
    u.message
      ? ((this.message = u.message), (this.generatedMessage = !1))
      : ((this.message = Re(this)), (this.generatedMessage = !0));
  var r = u.stackStartFunction || G;
  if (Error.captureStackTrace) Error.captureStackTrace(this, r);
  else {
    var a = new Error();
    if (a.stack) {
      var t = a.stack,
        F = Iu(r),
        n = t.indexOf(
          `
` + F
        );
      if (n >= 0) {
        var p = t.indexOf(
          `
`,
          n + 1
        );
        t = t.substring(p + 1);
      }
      this.stack = t;
    }
  }
};
H.inherits(P.AssertionError, Error);
function du(e, u) {
  return typeof e == "string" ? (e.length < u ? e : e.slice(0, u)) : e;
}
function gu(e) {
  if (ku || !H.isFunction(e)) return H.inspect(e);
  var u = Iu(e),
    r = u ? ": " + u : "";
  return "[Function" + r + "]";
}
function Re(e) {
  return (
    du(gu(e.actual), 128) + " " + e.operator + " " + du(gu(e.expected), 128)
  );
}
function G(e, u, r, a, t) {
  throw new P.AssertionError({
    message: r,
    actual: e,
    expected: u,
    operator: a,
    stackStartFunction: t,
  });
}
P.fail = G;
function Lu(e, u) {
  e || G(e, !0, u, "==", P.ok);
}
P.ok = Lu;
P.equal = function (u, r, a) {
  u != r && G(u, r, a, "==", P.equal);
};
P.notEqual = function (u, r, a) {
  u == r && G(u, r, a, "!=", P.notEqual);
};
P.deepEqual = function (u, r, a) {
  au(u, r, !1) || G(u, r, a, "deepEqual", P.deepEqual);
};
P.deepStrictEqual = function (u, r, a) {
  au(u, r, !0) || G(u, r, a, "deepStrictEqual", P.deepStrictEqual);
};
function au(e, u, r, a) {
  if (e === u) return !0;
  if (su(e) && su(u)) return Bu(e, u) === 0;
  if (H.isDate(e) && H.isDate(u)) return e.getTime() === u.getTime();
  if (H.isRegExp(e) && H.isRegExp(u))
    return (
      e.source === u.source &&
      e.global === u.global &&
      e.multiline === u.multiline &&
      e.lastIndex === u.lastIndex &&
      e.ignoreCase === u.ignoreCase
    );
  if (
    (e === null || typeof e != "object") &&
    (u === null || typeof u != "object")
  )
    return r ? e === u : e == u;
  if (
    hu(e) &&
    hu(u) &&
    mu(e) === mu(u) &&
    !(e instanceof Float32Array || e instanceof Float64Array)
  )
    return Bu(new Uint8Array(e.buffer), new Uint8Array(u.buffer)) === 0;
  if (su(e) !== su(u)) return !1;
  a = a || { actual: [], expected: [] };
  var t = a.actual.indexOf(e);
  return t !== -1 && t === a.expected.indexOf(u)
    ? !0
    : (a.actual.push(e), a.expected.push(u), Pe(e, u, r, a));
}
function vu(e) {
  return Object.prototype.toString.call(e) == "[object Arguments]";
}
function Pe(e, u, r, a) {
  if (e == null || u === null || u === void 0) return !1;
  if (H.isPrimitive(e) || H.isPrimitive(u)) return e === u;
  if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(u)) return !1;
  var t = vu(e),
    F = vu(u);
  if ((t && !F) || (!t && F)) return !1;
  if (t) return (e = yu.call(e)), (u = yu.call(u)), au(e, u, r);
  var n = Tu(e),
    p = Tu(u),
    x,
    v;
  if (n.length !== p.length) return !1;
  for (n.sort(), p.sort(), v = n.length - 1; v >= 0; v--)
    if (n[v] !== p[v]) return !1;
  for (v = n.length - 1; v >= 0; v--)
    if (((x = n[v]), !au(e[x], u[x], r, a))) return !1;
  return !0;
}
P.notDeepEqual = function (u, r, a) {
  au(u, r, !1) && G(u, r, a, "notDeepEqual", P.notDeepEqual);
};
P.notDeepStrictEqual = ju;
function ju(e, u, r) {
  au(e, u, !0) && G(e, u, r, "notDeepStrictEqual", ju);
}
P.strictEqual = function (u, r, a) {
  u !== r && G(u, r, a, "===", P.strictEqual);
};
P.notStrictEqual = function (u, r, a) {
  u === r && G(u, r, a, "!==", P.notStrictEqual);
};
function xu(e, u) {
  if (!e || !u) return !1;
  if (Object.prototype.toString.call(u) == "[object RegExp]") return u.test(e);
  try {
    if (e instanceof u) return !0;
  } catch {}
  return Error.isPrototypeOf(u) ? !1 : u.call({}, e) === !0;
}
function _e(e) {
  var u;
  try {
    e();
  } catch (r) {
    u = r;
  }
  return u;
}
function Mu(e, u, r, a) {
  var t;
  if (typeof u != "function")
    throw new TypeError('"block" argument must be a function');
  typeof r == "string" && ((a = r), (r = null)),
    (t = _e(u)),
    (a = (r && r.name ? " (" + r.name + ")." : ".") + (a ? " " + a : ".")),
    e && !t && G(t, r, "Missing expected exception" + a);
  var F = typeof a == "string",
    n = !e && H.isError(t),
    p = !e && t && !r;
  if (
    (((n && F && xu(t, r)) || p) && G(t, r, "Got unwanted exception" + a),
    (e && t && r && !xu(t, r)) || (!e && t))
  )
    throw t;
}
P.throws = function (e, u, r) {
  Mu(!0, e, u, r);
};
P.doesNotThrow = function (e, u, r) {
  Mu(!1, e, u, r);
};
P.ifError = function (e) {
  if (e) throw e;
};
function Uu(e, u) {
  e || G(e, !0, u, "==", Uu);
}
P.strict = Ne(Uu, P, {
  equal: P.strictEqual,
  deepEqual: P.deepStrictEqual,
  notEqual: P.notStrictEqual,
  notDeepEqual: P.notDeepStrictEqual,
});
P.strict.strict = P.strict;
var Tu =
  Object.keys ||
  function (e) {
    var u = [];
    for (var r in e) we.call(e, r) && u.push(r);
    return u;
  };
(function () {
  var e;
  (e = Se.version), (nu.VERSION = e);
  function u(a) {
    (this.name = "DoctrineError"), (this.message = a);
  }
  (u.prototype = (function () {
    var a = function () {};
    return (a.prototype = Error.prototype), new a();
  })()),
    (u.prototype.constructor = u),
    (nu.DoctrineError = u);
  function r(a) {
    throw new u(a);
  }
  (nu.throwError = r), (nu.assert = Pu.exports);
})();
(function () {
  var e, u, r, a, t, F, n, p, x, v, U, j;
  (x = ou),
    (v = nu),
    (e = {
      NullableLiteral: "NullableLiteral",
      AllLiteral: "AllLiteral",
      NullLiteral: "NullLiteral",
      UndefinedLiteral: "UndefinedLiteral",
      VoidLiteral: "VoidLiteral",
      UnionType: "UnionType",
      ArrayType: "ArrayType",
      RecordType: "RecordType",
      FieldType: "FieldType",
      FunctionType: "FunctionType",
      ParameterType: "ParameterType",
      RestType: "RestType",
      NonNullableType: "NonNullableType",
      OptionalType: "OptionalType",
      NullableType: "NullableType",
      NameExpression: "NameExpression",
      TypeApplication: "TypeApplication",
      StringLiteralType: "StringLiteralType",
      NumericLiteralType: "NumericLiteralType",
      BooleanLiteralType: "BooleanLiteralType",
    }),
    (u = {
      ILLEGAL: 0,
      DOT_LT: 1,
      REST: 2,
      LT: 3,
      GT: 4,
      LPAREN: 5,
      RPAREN: 6,
      LBRACE: 7,
      RBRACE: 8,
      LBRACK: 9,
      RBRACK: 10,
      COMMA: 11,
      COLON: 12,
      STAR: 13,
      PIPE: 14,
      QUESTION: 15,
      BANG: 16,
      EQUAL: 17,
      NAME: 18,
      STRING: 19,
      NUMBER: 20,
      EOF: 21,
    });
  function C(i) {
    return (
      "><(){}[],:*|?!=".indexOf(String.fromCharCode(i)) === -1 &&
      !x.code.isWhiteSpace(i) &&
      !x.code.isLineTerminator(i)
    );
  }
  function S(i, D, h, A) {
    (this._previous = i),
      (this._index = D),
      (this._token = h),
      (this._value = A);
  }
  (S.prototype.restore = function () {
    (F = this._previous),
      (t = this._index),
      (n = this._token),
      (p = this._value);
  }),
    (S.save = function () {
      return new S(F, t, n, p);
    });
  function b(i, D) {
    return j && (i.range = [D[0] + U, D[1] + U]), i;
  }
  function B() {
    var i = r.charAt(t);
    return (t += 1), i;
  }
  function m(i) {
    var D,
      h,
      A,
      s = 0;
    for (h = i === "u" ? 4 : 2, D = 0; D < h; ++D)
      if (t < a && x.code.isHexDigit(r.charCodeAt(t)))
        (A = B()), (s = s * 16 + "0123456789abcdef".indexOf(A.toLowerCase()));
      else return "";
    return String.fromCharCode(s);
  }
  function K() {
    var i = "",
      D,
      h,
      A,
      s,
      y;
    for (D = r.charAt(t), ++t; t < a; )
      if (((h = B()), h === D)) {
        D = "";
        break;
      } else if (h === "\\")
        if (((h = B()), x.code.isLineTerminator(h.charCodeAt(0))))
          h === "\r" && r.charCodeAt(t) === 10 && ++t;
        else
          switch (h) {
            case "n":
              i += `
`;
              break;
            case "r":
              i += "\r";
              break;
            case "t":
              i += "	";
              break;
            case "u":
            case "x":
              (y = t), (s = m(h)), s ? (i += s) : ((t = y), (i += h));
              break;
            case "b":
              i += "\b";
              break;
            case "f":
              i += "\f";
              break;
            case "v":
              i += "\v";
              break;
            default:
              x.code.isOctalDigit(h.charCodeAt(0))
                ? ((A = "01234567".indexOf(h)),
                  t < a &&
                    x.code.isOctalDigit(r.charCodeAt(t)) &&
                    ((A = A * 8 + "01234567".indexOf(B())),
                    "0123".indexOf(h) >= 0 &&
                      t < a &&
                      x.code.isOctalDigit(r.charCodeAt(t)) &&
                      (A = A * 8 + "01234567".indexOf(B()))),
                  (i += String.fromCharCode(A)))
                : (i += h);
              break;
          }
      else {
        if (x.code.isLineTerminator(h.charCodeAt(0))) break;
        i += h;
      }
    return D !== "" && v.throwError("unexpected quote"), (p = i), u.STRING;
  }
  function Q() {
    var i, D;
    if (((i = ""), (D = r.charCodeAt(t)), D !== 46)) {
      if (((i = B()), (D = r.charCodeAt(t)), i === "0")) {
        if (D === 120 || D === 88) {
          for (
            i += B();
            t < a && ((D = r.charCodeAt(t)), !!x.code.isHexDigit(D));

          )
            i += B();
          return (
            i.length <= 2 && v.throwError("unexpected token"),
            t < a &&
              ((D = r.charCodeAt(t)),
              x.code.isIdentifierStartES5(D) &&
                v.throwError("unexpected token")),
            (p = parseInt(i, 16)),
            u.NUMBER
          );
        }
        if (x.code.isOctalDigit(D)) {
          for (
            i += B();
            t < a && ((D = r.charCodeAt(t)), !!x.code.isOctalDigit(D));

          )
            i += B();
          return (
            t < a &&
              ((D = r.charCodeAt(t)),
              (x.code.isIdentifierStartES5(D) || x.code.isDecimalDigit(D)) &&
                v.throwError("unexpected token")),
            (p = parseInt(i, 8)),
            u.NUMBER
          );
        }
        x.code.isDecimalDigit(D) && v.throwError("unexpected token");
      }
      for (; t < a && ((D = r.charCodeAt(t)), !!x.code.isDecimalDigit(D)); )
        i += B();
    }
    if (D === 46)
      for (
        i += B();
        t < a && ((D = r.charCodeAt(t)), !!x.code.isDecimalDigit(D));

      )
        i += B();
    if (D === 101 || D === 69)
      if (
        ((i += B()),
        (D = r.charCodeAt(t)),
        (D === 43 || D === 45) && (i += B()),
        (D = r.charCodeAt(t)),
        x.code.isDecimalDigit(D))
      )
        for (
          i += B();
          t < a && ((D = r.charCodeAt(t)), !!x.code.isDecimalDigit(D));

        )
          i += B();
      else v.throwError("unexpected token");
    return (
      t < a &&
        ((D = r.charCodeAt(t)),
        x.code.isIdentifierStartES5(D) && v.throwError("unexpected token")),
      (p = parseFloat(i)),
      u.NUMBER
    );
  }
  function Y() {
    var i, D;
    for (p = B(); t < a && C(r.charCodeAt(t)); ) {
      if (((i = r.charCodeAt(t)), i === 46)) {
        if (t + 1 >= a) return u.ILLEGAL;
        if (((D = r.charCodeAt(t + 1)), D === 60)) break;
      }
      p += B();
    }
    return u.NAME;
  }
  function J() {
    var i;
    for (F = t; t < a && x.code.isWhiteSpace(r.charCodeAt(t)); ) B();
    if (t >= a) return (n = u.EOF), n;
    switch (((i = r.charCodeAt(t)), i)) {
      case 39:
      case 34:
        return (n = K()), n;
      case 58:
        return B(), (n = u.COLON), n;
      case 44:
        return B(), (n = u.COMMA), n;
      case 40:
        return B(), (n = u.LPAREN), n;
      case 41:
        return B(), (n = u.RPAREN), n;
      case 91:
        return B(), (n = u.LBRACK), n;
      case 93:
        return B(), (n = u.RBRACK), n;
      case 123:
        return B(), (n = u.LBRACE), n;
      case 125:
        return B(), (n = u.RBRACE), n;
      case 46:
        if (t + 1 < a) {
          if (((i = r.charCodeAt(t + 1)), i === 60))
            return B(), B(), (n = u.DOT_LT), n;
          if (i === 46 && t + 2 < a && r.charCodeAt(t + 2) === 46)
            return B(), B(), B(), (n = u.REST), n;
          if (x.code.isDecimalDigit(i)) return (n = Q()), n;
        }
        return (n = u.ILLEGAL), n;
      case 60:
        return B(), (n = u.LT), n;
      case 62:
        return B(), (n = u.GT), n;
      case 42:
        return B(), (n = u.STAR), n;
      case 124:
        return B(), (n = u.PIPE), n;
      case 63:
        return B(), (n = u.QUESTION), n;
      case 33:
        return B(), (n = u.BANG), n;
      case 61:
        return B(), (n = u.EQUAL), n;
      case 45:
        return (n = Q()), n;
      default:
        return x.code.isDecimalDigit(i)
          ? ((n = Q()), n)
          : (v.assert(C(i)), (n = Y()), n);
    }
  }
  function N(i, D) {
    v.assert(n === i, D || "consumed token not matched"), J();
  }
  function E(i, D) {
    n !== i && v.throwError(D || "unexpected token"), J();
  }
  function M() {
    var i,
      D = t - 1;
    if (
      (N(u.LPAREN, "UnionType should start with ("), (i = []), n !== u.RPAREN)
    )
      for (; i.push(l()), n !== u.RPAREN; ) E(u.PIPE);
    return (
      N(u.RPAREN, "UnionType should end with )"),
      b({ type: e.UnionType, elements: i }, [D, F])
    );
  }
  function f() {
    var i,
      D = t - 1,
      h;
    for (
      N(u.LBRACK, "ArrayType should start with ["), i = [];
      n !== u.RBRACK;

    ) {
      if (n === u.REST) {
        (h = t - 3),
          N(u.REST),
          i.push(b({ type: e.RestType, expression: l() }, [h, F]));
        break;
      } else i.push(l());
      n !== u.RBRACK && E(u.COMMA);
    }
    return E(u.RBRACK), b({ type: e.ArrayType, elements: i }, [D, F]);
  }
  function $() {
    var i = p;
    if (n === u.NAME || n === u.STRING) return J(), i;
    if (n === u.NUMBER) return N(u.NUMBER), String(i);
    v.throwError("unexpected token");
  }
  function z() {
    var i,
      D = F;
    return (
      (i = $()),
      n === u.COLON
        ? (N(u.COLON), b({ type: e.FieldType, key: i, value: l() }, [D, F]))
        : b({ type: e.FieldType, key: i, value: null }, [D, F])
    );
  }
  function g() {
    var i,
      D = t - 1,
      h;
    if (
      (N(u.LBRACE, "RecordType should start with {"), (i = []), n === u.COMMA)
    )
      N(u.COMMA);
    else for (; n !== u.RBRACE; ) i.push(z()), n !== u.RBRACE && E(u.COMMA);
    return (h = t), E(u.RBRACE), b({ type: e.RecordType, fields: i }, [D, h]);
  }
  function X() {
    var i = p,
      D = t - i.length;
    return (
      E(u.NAME),
      n === u.COLON &&
        (i === "module" || i === "external" || i === "event") &&
        (N(u.COLON), (i += ":" + p), E(u.NAME)),
      b({ type: e.NameExpression, name: i }, [D, F])
    );
  }
  function eu() {
    var i = [];
    for (i.push(O()); n === u.COMMA; ) N(u.COMMA), i.push(O());
    return i;
  }
  function Z() {
    var i,
      D,
      h = t - p.length;
    return (
      (i = X()),
      n === u.DOT_LT || n === u.LT
        ? (J(),
          (D = eu()),
          E(u.GT),
          b({ type: e.TypeApplication, expression: i, applications: D }, [
            h,
            F,
          ]))
        : i
    );
  }
  function tu() {
    return (
      N(u.COLON, "ResultType should start with :"),
      n === u.NAME && p === "void" ? (N(u.NAME), { type: e.VoidLiteral }) : l()
    );
  }
  function k() {
    for (var i = [], D = !1, h, A = !1, s, y = t - 3, d; n !== u.RPAREN; )
      n === u.REST && (N(u.REST), (A = !0)),
        (s = F),
        (h = l()),
        h.type === e.NameExpression &&
          n === u.COLON &&
          ((d = F - h.name.length),
          N(u.COLON),
          (h = b({ type: e.ParameterType, name: h.name, expression: l() }, [
            d,
            F,
          ]))),
        n === u.EQUAL
          ? (N(u.EQUAL),
            (h = b({ type: e.OptionalType, expression: h }, [s, F])),
            (D = !0))
          : D && v.throwError("unexpected token"),
        A && (h = b({ type: e.RestType, expression: h }, [y, F])),
        i.push(h),
        n !== u.RPAREN && E(u.COMMA);
    return i;
  }
  function o() {
    var i,
      D,
      h,
      A,
      s,
      y = t - p.length;
    return (
      v.assert(
        n === u.NAME && p === "function",
        "FunctionType should start with 'function'"
      ),
      N(u.NAME),
      E(u.LPAREN),
      (i = !1),
      (h = []),
      (D = null),
      n !== u.RPAREN &&
        (n === u.NAME && (p === "this" || p === "new")
          ? ((i = p === "new"),
            N(u.NAME),
            E(u.COLON),
            (D = Z()),
            n === u.COMMA && (N(u.COMMA), (h = k())))
          : (h = k())),
      E(u.RPAREN),
      (A = null),
      n === u.COLON && (A = tu()),
      (s = b({ type: e.FunctionType, params: h, result: A }, [y, F])),
      D && ((s.this = D), i && (s.new = !0)),
      s
    );
  }
  function c() {
    var i, D;
    switch (n) {
      case u.STAR:
        return N(u.STAR), b({ type: e.AllLiteral }, [F - 1, F]);
      case u.LPAREN:
        return M();
      case u.LBRACK:
        return f();
      case u.LBRACE:
        return g();
      case u.NAME:
        if (((D = t - p.length), p === "null"))
          return N(u.NAME), b({ type: e.NullLiteral }, [D, F]);
        if (p === "undefined")
          return N(u.NAME), b({ type: e.UndefinedLiteral }, [D, F]);
        if (p === "true" || p === "false")
          return (
            N(u.NAME),
            b({ type: e.BooleanLiteralType, value: p === "true" }, [D, F])
          );
        if (((i = S.save()), p === "function"))
          try {
            return o();
          } catch {
            i.restore();
          }
        return Z();
      case u.STRING:
        return (
          J(), b({ type: e.StringLiteralType, value: p }, [F - p.length - 2, F])
        );
      case u.NUMBER:
        return (
          J(),
          b({ type: e.NumericLiteralType, value: p }, [F - String(p).length, F])
        );
      default:
        v.throwError("unexpected token");
    }
  }
  function l() {
    var i, D;
    return n === u.QUESTION
      ? ((D = t - 1),
        N(u.QUESTION),
        n === u.COMMA ||
        n === u.EQUAL ||
        n === u.RBRACE ||
        n === u.RPAREN ||
        n === u.PIPE ||
        n === u.EOF ||
        n === u.RBRACK ||
        n === u.GT
          ? b({ type: e.NullableLiteral }, [D, F])
          : b({ type: e.NullableType, expression: c(), prefix: !0 }, [D, F]))
      : n === u.BANG
      ? ((D = t - 1),
        N(u.BANG),
        b({ type: e.NonNullableType, expression: c(), prefix: !0 }, [D, F]))
      : ((D = F),
        (i = c()),
        n === u.BANG
          ? (N(u.BANG),
            b({ type: e.NonNullableType, expression: i, prefix: !1 }, [D, F]))
          : n === u.QUESTION
          ? (N(u.QUESTION),
            b({ type: e.NullableType, expression: i, prefix: !1 }, [D, F]))
          : n === u.LBRACK
          ? (N(u.LBRACK),
            E(
              u.RBRACK,
              "expected an array-style type declaration (" + p + "[])"
            ),
            b(
              {
                type: e.TypeApplication,
                expression: b({ type: e.NameExpression, name: "Array" }, [
                  D,
                  F,
                ]),
                applications: [i],
              },
              [D, F]
            ))
          : i);
  }
  function O() {
    var i, D;
    if (((i = l()), n !== u.PIPE)) return i;
    for (D = [i], N(u.PIPE); D.push(l()), n === u.PIPE; ) N(u.PIPE);
    return b({ type: e.UnionType, elements: D }, [0, t]);
  }
  function L() {
    var i;
    return n === u.REST
      ? (N(u.REST), b({ type: e.RestType, expression: O() }, [0, t]))
      : ((i = O()),
        n === u.EQUAL
          ? (N(u.EQUAL), b({ type: e.OptionalType, expression: i }, [0, t]))
          : i);
  }
  function _(i, D) {
    var h;
    return (
      (r = i),
      (a = r.length),
      (t = 0),
      (F = 0),
      (j = D && D.range),
      (U = (D && D.startIndex) || 0),
      J(),
      (h = O()),
      D && D.midstream
        ? { expression: h, index: F }
        : (n !== u.EOF && v.throwError("not reach to EOF"), h)
    );
  }
  function R(i, D) {
    var h;
    return (
      (r = i),
      (a = r.length),
      (t = 0),
      (F = 0),
      (j = D && D.range),
      (U = (D && D.startIndex) || 0),
      J(),
      (h = L()),
      D && D.midstream
        ? { expression: h, index: F }
        : (n !== u.EOF && v.throwError("not reach to EOF"), h)
    );
  }
  function T(i, D, h) {
    var A, s, y;
    switch (i.type) {
      case e.NullableLiteral:
        A = "?";
        break;
      case e.AllLiteral:
        A = "*";
        break;
      case e.NullLiteral:
        A = "null";
        break;
      case e.UndefinedLiteral:
        A = "undefined";
        break;
      case e.VoidLiteral:
        A = "void";
        break;
      case e.UnionType:
        for (h ? (A = "") : (A = "("), s = 0, y = i.elements.length; s < y; ++s)
          (A += T(i.elements[s], D)), s + 1 !== y && (A += D ? "|" : " | ");
        h || (A += ")");
        break;
      case e.ArrayType:
        for (A = "[", s = 0, y = i.elements.length; s < y; ++s)
          (A += T(i.elements[s], D)), s + 1 !== y && (A += D ? "," : ", ");
        A += "]";
        break;
      case e.RecordType:
        for (A = "{", s = 0, y = i.fields.length; s < y; ++s)
          (A += T(i.fields[s], D)), s + 1 !== y && (A += D ? "," : ", ");
        A += "}";
        break;
      case e.FieldType:
        i.value ? (A = i.key + (D ? ":" : ": ") + T(i.value, D)) : (A = i.key);
        break;
      case e.FunctionType:
        for (
          A = D ? "function(" : "function (",
            i.this &&
              (i.new
                ? (A += D ? "new:" : "new: ")
                : (A += D ? "this:" : "this: "),
              (A += T(i.this, D)),
              i.params.length !== 0 && (A += D ? "," : ", ")),
            s = 0,
            y = i.params.length;
          s < y;
          ++s
        )
          (A += T(i.params[s], D)), s + 1 !== y && (A += D ? "," : ", ");
        (A += ")"), i.result && (A += (D ? ":" : ": ") + T(i.result, D));
        break;
      case e.ParameterType:
        A = i.name + (D ? ":" : ": ") + T(i.expression, D);
        break;
      case e.RestType:
        (A = "..."), i.expression && (A += T(i.expression, D));
        break;
      case e.NonNullableType:
        i.prefix
          ? (A = "!" + T(i.expression, D))
          : (A = T(i.expression, D) + "!");
        break;
      case e.OptionalType:
        A = T(i.expression, D) + "=";
        break;
      case e.NullableType:
        i.prefix
          ? (A = "?" + T(i.expression, D))
          : (A = T(i.expression, D) + "?");
        break;
      case e.NameExpression:
        A = i.name;
        break;
      case e.TypeApplication:
        for (
          A = T(i.expression, D) + ".<", s = 0, y = i.applications.length;
          s < y;
          ++s
        )
          (A += T(i.applications[s], D)), s + 1 !== y && (A += D ? "," : ", ");
        A += ">";
        break;
      case e.StringLiteralType:
        A = '"' + i.value + '"';
        break;
      case e.NumericLiteralType:
        A = String(i.value);
        break;
      case e.BooleanLiteralType:
        A = String(i.value);
        break;
      default:
        v.throwError("Unknown type " + i.type);
    }
    return A;
  }
  function w(i, D) {
    return D == null && (D = {}), T(i, D.compact, D.topLevel);
  }
  (Du.parseType = _),
    (Du.parseParamType = R),
    (Du.stringify = w),
    (Du.Syntax = e);
})();
(function (e) {
  (function () {
    var u, r, a, t, F;
    (t = ou), (u = Du), (r = nu);
    function n(E, M, f) {
      return E.slice(M, f);
    }
    F = (function () {
      var E = Object.prototype.hasOwnProperty;
      return function (f, $) {
        return E.call(f, $);
      };
    })();
    function p(E) {
      var M = {},
        f;
      for (f in E) E.hasOwnProperty(f) && (M[f] = E[f]);
      return M;
    }
    function x(E) {
      return (
        (E >= 97 && E <= 122) || (E >= 65 && E <= 90) || (E >= 48 && E <= 57)
      );
    }
    function v(E) {
      return E === "param" || E === "argument" || E === "arg";
    }
    function U(E) {
      return E === "return" || E === "returns";
    }
    function j(E) {
      return E === "property" || E === "prop";
    }
    function C(E) {
      return (
        v(E) ||
        j(E) ||
        E === "alias" ||
        E === "this" ||
        E === "mixes" ||
        E === "requires"
      );
    }
    function S(E) {
      return C(E) || E === "const" || E === "constant";
    }
    function b(E) {
      return j(E) || v(E);
    }
    function B(E) {
      return j(E) || v(E);
    }
    function m(E) {
      return (
        v(E) ||
        U(E) ||
        E === "define" ||
        E === "enum" ||
        E === "implements" ||
        E === "this" ||
        E === "type" ||
        E === "typedef" ||
        j(E)
      );
    }
    function K(E) {
      return (
        m(E) ||
        E === "throws" ||
        E === "const" ||
        E === "constant" ||
        E === "namespace" ||
        E === "member" ||
        E === "var" ||
        E === "module" ||
        E === "constructor" ||
        E === "class" ||
        E === "extends" ||
        E === "augments" ||
        E === "public" ||
        E === "private" ||
        E === "protected"
      );
    }
    var Q =
        "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]",
      Y =
        "(" +
        Q +
        "*(?:\\*" +
        Q +
        `?)?)(.+|[\r
\u2028\u2029])`;
    function J(E) {
      return E.replace(/^\/\*\*?/, "")
        .replace(/\*\/$/, "")
        .replace(new RegExp(Y, "g"), "$2")
        .replace(/\s*$/, "");
    }
    function N(E, M) {
      for (
        var f = E.replace(/^\/\*\*?/, ""), $ = 0, z = new RegExp(Y, "g"), g;
        (g = z.exec(f));

      )
        if ((($ += g[1].length), g.index + g[0].length > M + $))
          return M + $ + E.length - f.length;
      return E.replace(/\*\/$/, "").replace(/\s*$/, "").length;
    }
    (function (E) {
      var M, f, $, z, g, X, eu, Z, tu;
      function k() {
        var A = g.charCodeAt(f);
        return (
          (f += 1),
          t.code.isLineTerminator(A) &&
            !(A === 13 && g.charCodeAt(f) === 10) &&
            ($ += 1),
          String.fromCharCode(A)
        );
      }
      function o() {
        var A = "";
        for (k(); f < z && x(g.charCodeAt(f)); ) A += k();
        return A;
      }
      function c() {
        var A,
          s,
          y = f;
        for (s = !1; y < z; ) {
          if (
            ((A = g.charCodeAt(y)),
            t.code.isLineTerminator(A) &&
              !(A === 13 && g.charCodeAt(y + 1) === 10))
          )
            s = !0;
          else if (s) {
            if (A === 64) break;
            t.code.isWhiteSpace(A) || (s = !1);
          }
          y += 1;
        }
        return y;
      }
      function l(A, s, y) {
        for (var d, V, I, W, ru = !1; f < s; )
          if (((d = g.charCodeAt(f)), t.code.isWhiteSpace(d))) k();
          else if (d === 123) {
            k();
            break;
          } else {
            ru = !0;
            break;
          }
        if (ru) return null;
        for (V = 1, I = ""; f < s; )
          if (((d = g.charCodeAt(f)), t.code.isLineTerminator(d))) k();
          else {
            if (d === 125) {
              if (((V -= 1), V === 0)) {
                k();
                break;
              }
            } else d === 123 && (V += 1);
            I === "" && (W = f), (I += k());
          }
        return V !== 0
          ? r.throwError("Braces are not balanced")
          : B(A)
          ? u.parseParamType(I, { startIndex: T(W), range: y })
          : u.parseType(I, { startIndex: T(W), range: y });
      }
      function O(A) {
        var s;
        if (
          !t.code.isIdentifierStartES5(g.charCodeAt(f)) &&
          !g[f].match(/[0-9]/)
        )
          return null;
        for (s = k(); f < A && t.code.isIdentifierPartES5(g.charCodeAt(f)); )
          s += k();
        return s;
      }
      function L(A) {
        for (
          ;
          f < A &&
          (t.code.isWhiteSpace(g.charCodeAt(f)) ||
            t.code.isLineTerminator(g.charCodeAt(f)));

        )
          k();
      }
      function _(A, s, y) {
        var d = "",
          V,
          I;
        if ((L(A), f >= A)) return null;
        if (g.charCodeAt(f) === 91)
          if (s) (V = !0), (d = k());
          else return null;
        if (((d += O(A)), y))
          for (
            g.charCodeAt(f) === 58 &&
              (d === "module" || d === "external" || d === "event") &&
              ((d += k()), (d += O(A))),
              g.charCodeAt(f) === 91 &&
                g.charCodeAt(f + 1) === 93 &&
                ((d += k()), (d += k()));
            g.charCodeAt(f) === 46 ||
            g.charCodeAt(f) === 47 ||
            g.charCodeAt(f) === 35 ||
            g.charCodeAt(f) === 45 ||
            g.charCodeAt(f) === 126;

          )
            (d += k()), (d += O(A));
        if (V) {
          if ((L(A), g.charCodeAt(f) === 61)) {
            (d += k()), L(A);
            for (var W, ru = 1; f < A; ) {
              if (
                ((W = g.charCodeAt(f)),
                t.code.isWhiteSpace(W) && (I || (L(A), (W = g.charCodeAt(f)))),
                W === 39 && (I ? I === "'" && (I = "") : (I = "'")),
                W === 34 && (I ? I === '"' && (I = "") : (I = '"')),
                W === 91)
              )
                ru++;
              else if (W === 93 && --ru === 0) break;
              d += k();
            }
          }
          if ((L(A), f >= A || g.charCodeAt(f) !== 93)) return null;
          d += k();
        }
        return d;
      }
      function R() {
        for (; f < z && g.charCodeAt(f) !== 64; ) k();
        return f >= z ? !1 : (r.assert(g.charCodeAt(f) === 64), !0);
      }
      function T(A) {
        return g === X ? A : N(X, A);
      }
      function w(A, s) {
        (this._options = A),
          (this._title = s.toLowerCase()),
          (this._tag = { title: s, description: null }),
          this._options.lineNumbers && (this._tag.lineNumber = $),
          (this._first = f - s.length - 1),
          (this._last = 0),
          (this._extra = {});
      }
      (w.prototype.addError = function (s) {
        var y = Array.prototype.slice.call(arguments, 1),
          d = s.replace(/%(\d)/g, function (V, I) {
            return (
              r.assert(I < y.length, "Message reference must be in range"), y[I]
            );
          });
        return (
          this._tag.errors || (this._tag.errors = []),
          tu && r.throwError(d),
          this._tag.errors.push(d),
          eu
        );
      }),
        (w.prototype.parseType = function () {
          if (m(this._title))
            try {
              if (
                ((this._tag.type = l(
                  this._title,
                  this._last,
                  this._options.range
                )),
                !this._tag.type &&
                  !v(this._title) &&
                  !U(this._title) &&
                  !this.addError("Missing or invalid tag type"))
              )
                return !1;
            } catch (A) {
              if (((this._tag.type = null), !this.addError(A.message)))
                return !1;
            }
          else if (K(this._title))
            try {
              this._tag.type = l(this._title, this._last, this._options.range);
            } catch {}
          return !0;
        }),
        (w.prototype._parseNamePath = function (A) {
          var s;
          return (
            (s = _(this._last, Z && B(this._title), !0)),
            !s && !A && !this.addError("Missing or invalid tag name")
              ? !1
              : ((this._tag.name = s), !0)
          );
        }),
        (w.prototype.parseNamePath = function () {
          return this._parseNamePath(!1);
        }),
        (w.prototype.parseNamePathOptional = function () {
          return this._parseNamePath(!0);
        }),
        (w.prototype.parseName = function () {
          var A, s;
          if (S(this._title))
            if (
              ((this._tag.name = _(
                this._last,
                Z && B(this._title),
                b(this._title)
              )),
              this._tag.name)
            )
              (s = this._tag.name),
                s.charAt(0) === "[" &&
                  s.charAt(s.length - 1) === "]" &&
                  ((A = s.substring(1, s.length - 1).split("=")),
                  A.length > 1 && (this._tag.default = A.slice(1).join("=")),
                  (this._tag.name = A[0]),
                  this._tag.type &&
                    this._tag.type.type !== "OptionalType" &&
                    (this._tag.type = {
                      type: "OptionalType",
                      expression: this._tag.type,
                    }));
            else {
              if (!C(this._title)) return !0;
              if (v(this._title) && this._tag.type && this._tag.type.name)
                (this._extra.name = this._tag.type),
                  (this._tag.name = this._tag.type.name),
                  (this._tag.type = null);
              else if (!this.addError("Missing or invalid tag name")) return !1;
            }
          return !0;
        }),
        (w.prototype.parseDescription = function () {
          var s = n(g, f, this._last).trim();
          return (
            s &&
              (/^-\s+/.test(s) && (s = s.substring(2)),
              (this._tag.description = s)),
            !0
          );
        }),
        (w.prototype.parseCaption = function () {
          var s = n(g, f, this._last).trim(),
            y = "<caption>",
            d = "</caption>",
            V = s.indexOf(y),
            I = s.indexOf(d);
          return (
            V >= 0 && I >= 0
              ? ((this._tag.caption = s.substring(V + y.length, I).trim()),
                (this._tag.description = s.substring(I + d.length).trim()))
              : (this._tag.description = s),
            !0
          );
        }),
        (w.prototype.parseKind = function () {
          var s, y;
          return (
            (y = {
              class: !0,
              constant: !0,
              event: !0,
              external: !0,
              file: !0,
              function: !0,
              member: !0,
              mixin: !0,
              module: !0,
              namespace: !0,
              typedef: !0,
            }),
            (s = n(g, f, this._last).trim()),
            (this._tag.kind = s),
            !(!F(y, s) && !this.addError("Invalid kind name '%0'", s))
          );
        }),
        (w.prototype.parseAccess = function () {
          var s;
          return (
            (s = n(g, f, this._last).trim()),
            (this._tag.access = s),
            !(
              s !== "private" &&
              s !== "protected" &&
              s !== "public" &&
              !this.addError("Invalid access name '%0'", s)
            )
          );
        }),
        (w.prototype.parseThis = function () {
          var s = n(g, f, this._last).trim();
          if (s && s.charAt(0) === "{") {
            var y = this.parseType();
            return (y && this._tag.type.type === "NameExpression") ||
              this._tag.type.type === "UnionType"
              ? ((this._tag.name = this._tag.type.name), !0)
              : this.addError("Invalid name for this");
          } else return this.parseNamePath();
        }),
        (w.prototype.parseVariation = function () {
          var s, y;
          return (
            (y = n(g, f, this._last).trim()),
            (s = parseFloat(y, 10)),
            (this._tag.variation = s),
            !(isNaN(s) && !this.addError("Invalid variation '%0'", y))
          );
        }),
        (w.prototype.ensureEnd = function () {
          var A = n(g, f, this._last).trim();
          return !(A && !this.addError("Unknown content '%0'", A));
        }),
        (w.prototype.epilogue = function () {
          var s;
          return (
            (s = this._tag.description),
            !(
              B(this._title) &&
              !this._tag.type &&
              s &&
              s.charAt(0) === "[" &&
              ((this._tag.type = this._extra.name),
              this._tag.name || (this._tag.name = void 0),
              !Z && !this.addError("Missing or invalid tag name"))
            )
          );
        }),
        (M = {
          access: ["parseAccess"],
          alias: ["parseNamePath", "ensureEnd"],
          augments: ["parseType", "parseNamePathOptional", "ensureEnd"],
          constructor: ["parseType", "parseNamePathOptional", "ensureEnd"],
          class: ["parseType", "parseNamePathOptional", "ensureEnd"],
          extends: ["parseType", "parseNamePathOptional", "ensureEnd"],
          example: ["parseCaption"],
          deprecated: ["parseDescription"],
          global: ["ensureEnd"],
          inner: ["ensureEnd"],
          instance: ["ensureEnd"],
          kind: ["parseKind"],
          mixes: ["parseNamePath", "ensureEnd"],
          mixin: ["parseNamePathOptional", "ensureEnd"],
          member: ["parseType", "parseNamePathOptional", "ensureEnd"],
          method: ["parseNamePathOptional", "ensureEnd"],
          module: ["parseType", "parseNamePathOptional", "ensureEnd"],
          func: ["parseNamePathOptional", "ensureEnd"],
          function: ["parseNamePathOptional", "ensureEnd"],
          var: ["parseType", "parseNamePathOptional", "ensureEnd"],
          name: ["parseNamePath", "ensureEnd"],
          namespace: ["parseType", "parseNamePathOptional", "ensureEnd"],
          private: ["parseType", "parseDescription"],
          protected: ["parseType", "parseDescription"],
          public: ["parseType", "parseDescription"],
          readonly: ["ensureEnd"],
          requires: ["parseNamePath", "ensureEnd"],
          since: ["parseDescription"],
          static: ["ensureEnd"],
          summary: ["parseDescription"],
          this: ["parseThis", "ensureEnd"],
          todo: ["parseDescription"],
          typedef: ["parseType", "parseNamePathOptional"],
          variation: ["parseVariation"],
          version: ["parseDescription"],
        }),
        (w.prototype.parse = function () {
          var s, y, d, V;
          if (!this._title && !this.addError("Missing or invalid title"))
            return null;
          for (
            this._last = c(this._title),
              this._options.range &&
                (this._tag.range = [
                  this._first,
                  g.slice(0, this._last).replace(/\s*$/, "").length,
                ].map(T)),
              F(M, this._title)
                ? (d = M[this._title])
                : (d = [
                    "parseType",
                    "parseName",
                    "parseDescription",
                    "epilogue",
                  ]),
              s = 0,
              y = d.length;
            s < y;
            ++s
          )
            if (((V = d[s]), !this[V]())) return null;
          return this._tag;
        });
      function i(A) {
        var s, y, d;
        if (!R()) return null;
        for (s = o(), y = new w(A, s), d = y.parse(); f < y._last; ) k();
        return d;
      }
      function D(A) {
        var s = "",
          y,
          d;
        for (d = !0; f < z && ((y = g.charCodeAt(f)), !(d && y === 64)); )
          t.code.isLineTerminator(y)
            ? (d = !0)
            : d && !t.code.isWhiteSpace(y) && (d = !1),
            (s += k());
        return A ? s : s.trim();
      }
      function h(A, s) {
        var y = [],
          d,
          V,
          I,
          W,
          ru;
        if (
          (s === void 0 && (s = {}),
          typeof s.unwrap == "boolean" && s.unwrap ? (g = J(A)) : (g = A),
          (X = A),
          s.tags)
        )
          if (Array.isArray(s.tags))
            for (I = {}, W = 0, ru = s.tags.length; W < ru; W++)
              typeof s.tags[W] == "string"
                ? (I[s.tags[W]] = !0)
                : r.throwError('Invalid "tags" parameter: ' + s.tags);
          else r.throwError('Invalid "tags" parameter: ' + s.tags);
        for (
          z = g.length,
            f = 0,
            $ = 0,
            eu = s.recoverable,
            Z = s.sloppy,
            tu = s.strict,
            V = D(s.preserveWhitespace);
          (d = i(s)), !!d;

        )
          (!I || I.hasOwnProperty(d.title)) && y.push(d);
        return { description: V, tags: y };
      }
      E.parse = h;
    })((a = {})),
      (e.version = r.VERSION),
      (e.parse = a.parse),
      (e.parseType = u.parseType),
      (e.parseParamType = u.parseParamType),
      (e.unwrapComment = J),
      (e.Syntax = p(u.Syntax)),
      (e.Error = r.DoctrineError),
      (e.type = {
        Syntax: e.Syntax,
        parseType: u.parseType,
        parseParamType: u.parseParamType,
        stringify: u.stringify,
      });
  })();
})(wu);
function ke(e) {
  return e != null && e.includes("@");
}
function Ie(e, u) {
  var r;
  try {
    r = wu.parse(e, { tags: u, sloppy: !0 });
  } catch (a) {
    throw (console.error(a), new Error("Cannot parse JSDoc tags."));
  }
  return r;
}
var Le = { tags: ["param", "arg", "argument", "returns", "ignore"] },
  je = function (u) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le;
    if (!ke(u)) return { includesJsDoc: !1, ignore: !1 };
    var a = Ie(u, r.tags),
      t = Me(a);
    return t.ignore
      ? { includesJsDoc: !0, ignore: !0 }
      : {
          includesJsDoc: !0,
          ignore: !1,
          description: a.description,
          extractedTags: t,
        };
  };
function Me(e) {
  for (
    var u = { params: null, returns: null, ignore: !1 }, r = 0;
    r < e.tags.length;
    r += 1
  ) {
    var a = e.tags[r];
    if (a.title === "ignore") {
      u.ignore = !0;
      break;
    } else
      switch (a.title) {
        case "param":
        case "arg":
        case "argument": {
          var t = Ue(a);
          t != null && (u.params == null && (u.params = []), u.params.push(t));
          break;
        }
        case "returns": {
          var F = qe(a);
          F != null && (u.returns = F);
          break;
        }
      }
  }
  return u;
}
function Ue(e) {
  var u = e.name;
  return u != null && u !== "null-null"
    ? {
        name: e.name,
        type: e.type,
        description: e.description,
        getPrettyName: function () {
          return u.includes("null")
            ? u.replace("-null", "").replace(".null", "")
            : e.name;
        },
        getTypeName: function () {
          return e.type != null ? iu(e.type) : null;
        },
      }
    : null;
}
function qe(e) {
  return e.type != null
    ? {
        type: e.type,
        description: e.description,
        getTypeName: function () {
          return iu(e.type);
        },
      }
    : null;
}
function iu(e) {
  if (e.type === "NameExpression") return e.name;
  if (e.type === "RecordType") {
    var u = e.fields.map(function (t) {
      if (t.value != null) {
        var F = iu(t.value);
        return "".concat(t.key, ": ").concat(F);
      }
      return t.key;
    });
    return "({".concat(u.join(", "), "})");
  }
  if (e.type === "UnionType") {
    var r = e.elements.map(iu);
    return "(".concat(r.join("|"), ")");
  }
  if (e.type === "ArrayType") return "[]";
  if (
    e.type === "TypeApplication" &&
    e.expression != null &&
    e.expression.name === "Array"
  ) {
    var a = iu(e.applications[0]);
    return "".concat(a, "[]");
  }
  return e.type === "NullableType" ||
    e.type === "NonNullableType" ||
    e.type === "OptionalType"
    ? iu(e.expression)
    : e.type === "AllLiteral"
    ? "any"
    : null;
}
var Ve = 90,
  We = 50;
function qu(e) {
  return e.length > Ve;
}
function $e(e) {
  return e.length > We;
}
function q(e, u) {
  return e === u ? { summary: e } : { summary: e, detail: u };
}
var Fu;
(function (e) {
  (e.UNION = "union"), (e.SIGNATURE = "signature");
})(Fu || (Fu = {}));
function Vu(e) {
  var u = e.name,
    r = e.value,
    a = e.elements,
    t = e.raw;
  return r != null ? r : a != null ? a.map(Vu).join(" | ") : t != null ? t : u;
}
function ze(e) {
  var u = e.name,
    r = e.raw,
    a = e.elements;
  return a != null
    ? q(a.map(Vu).join(" | "))
    : r != null
    ? q(r.replace(/^\|\s*/, ""))
    : q(u);
}
function Ge(e) {
  var u = e.type,
    r = e.raw;
  return r != null ? q(r) : q(u);
}
function Je(e) {
  var u = e.type,
    r = e.raw;
  return r != null ? (qu(r) ? q(u, r) : q(r)) : q(u);
}
function Ke(e) {
  var u = e.type;
  return u === "object" ? Je(e) : Ge(e);
}
function Qe(e) {
  var u = e.name,
    r = e.raw;
  return r != null ? (qu(r) ? q(u, r) : q(r)) : q(u);
}
function He(e) {
  if (e == null) return null;
  switch (e.name) {
    case Fu.UNION:
      return ze(e);
    case Fu.SIGNATURE:
      return Ke(e);
    default:
      return Qe(e);
  }
}
function Ye(e, u) {
  if (e != null) {
    var r = e.value;
    if (!lu(r)) return $e(r) ? q(u.name, r) : q(r);
  }
  return null;
}
var Xe = function (u, r) {
  var a = r.flowType,
    t = r.description,
    F = r.required,
    n = r.defaultValue;
  return {
    name: u,
    type: He(a),
    required: F,
    description: t,
    defaultValue: Ye(n, a),
  };
};
function Ze(e) {
  var u = e.tsType,
    r = e.required;
  return u == null ? null : q(r ? u.name : u.name.replace(" | undefined", ""));
}
function ur(e) {
  var u = e.defaultValue;
  if (u != null) {
    var r = u.value;
    if (!lu(r)) return q(r);
  }
  return null;
}
var er = function (u, r) {
  var a = r.description,
    t = r.required;
  return {
    name: u,
    type: Ze(r),
    required: t,
    description: a,
    defaultValue: ur(r),
  };
};
function rr(e) {
  return e != null ? q(e.name) : null;
}
function tr(e) {
  var u = e.computed,
    r = e.func;
  return typeof u > "u" && typeof r > "u";
}
function nr(e) {
  return e
    ? e.name === "string"
      ? !0
      : e.name === "enum"
      ? Array.isArray(e.value) &&
        e.value.every(function (u) {
          var r = u.value;
          return (
            typeof r == "string" && r[0] === '"' && r[r.length - 1] === '"'
          );
        })
      : !1
    : !1;
}
function ir(e, u) {
  if (e != null) {
    var r = e.value;
    if (!lu(r)) return tr(e) && nr(u) ? q(JSON.stringify(r)) : q(r);
  }
  return null;
}
function Wu(e, u, r) {
  var a = r.description,
    t = r.required,
    F = r.defaultValue;
  return {
    name: e,
    type: rr(u),
    required: t,
    description: a,
    defaultValue: ir(F, u),
  };
}
function Eu(e, u) {
  if (u.includesJsDoc) {
    var r = u.description,
      a = u.extractedTags;
    r != null && (e.description = u.description);
    var t = a.params != null,
      F = a.returns != null && a.returns.type != null;
    (t || F) &&
      (e.jsDocTags = {
        params:
          t &&
          a.params.map(function (n) {
            return { name: n.getPrettyName(), description: n.description };
          }),
        returns: F && { description: a.returns.description },
      });
  }
  return e;
}
var ar = function (u, r, a) {
    var t = Wu(u, r.type, r);
    return (t.sbType = Cu(r)), Eu(t, a);
  },
  Dr = function (u, r, a) {
    var t = er(u, r);
    return (t.sbType = Cu(r)), Eu(t, a);
  },
  sr = function (u, r, a) {
    var t = Xe(u, r);
    return (t.sbType = Cu(r)), Eu(t, a);
  },
  Ar = function (u, r, a) {
    var t = Wu(u, { name: "unknown" }, r);
    return Eu(t, a);
  },
  $u = function (u) {
    switch (u) {
      case uu.JAVASCRIPT:
        return ar;
      case uu.TYPESCRIPT:
        return Dr;
      case uu.FLOW:
        return sr;
      default:
        return Ar;
    }
  },
  zu = function (u) {
    return u.type != null
      ? uu.JAVASCRIPT
      : u.flowType != null
      ? uu.FLOW
      : u.tsType != null
      ? uu.TYPESCRIPT
      : uu.UNKNOWN;
  },
  or = function (u) {
    var r = zu(u[0]),
      a = $u(r);
    return u.map(function (t) {
      var F,
        n = t;
      return (
        (F = t.type) !== null &&
          F !== void 0 &&
          F.elements &&
          (n = Object.assign({}, t, {
            type: Object.assign({}, t.type, { value: t.type.elements }),
          })),
        Gu(n.name, n, r, a)
      );
    });
  },
  Fr = function (u) {
    var r = Object.keys(u),
      a = zu(u[r[0]]),
      t = $u(a);
    return r
      .map(function (F) {
        var n = u[F];
        return n != null ? Gu(F, n, a, t) : null;
      })
      .filter(Boolean);
  },
  Cr = function (u, r) {
    var a = Fe(u, r);
    return oe(a) ? (Array.isArray(a) ? or(a) : Fr(a)) : [];
  };
function Gu(e, u, r, a) {
  var t = je(u.description),
    F = t.includesJsDoc && t.ignore;
  if (!F) {
    var n = a(e, u, t);
    return {
      propDef: n,
      jsDocTags: t.extractedTags,
      docgenInfo: u,
      typeSystem: r,
    };
  }
  return null;
}
function Er(e) {
  return e != null && Ce(e);
}
var cr = function (u) {
    var r = u.component,
      a = u.argTypes,
      t = u.parameters.docs,
      F = t === void 0 ? {} : t,
      n = F.extractArgTypes,
      p = n && r ? n(r) : {},
      x = p ? Qu(p, a) : a;
    return x;
  },
  lr = ["props", "events", "slots"],
  fr = function (u) {
    if (!fu(u)) return null;
    var r = {};
    return (
      lr.forEach(function (a) {
        var t = Cr(u, a);
        t.forEach(function (F) {
          var n = F.propDef,
            p = F.docgenInfo,
            x = F.jsDocTags,
            v = n.name,
            U = n.type,
            j = n.description,
            C = n.defaultValue,
            S = n.required,
            b = a === "props" ? Cu(p) : { name: "void" };
          r[v] = {
            name: v,
            description: j,
            type: Object.assign({ required: S }, b),
            table: { type: U, jsDocTags: x, defaultValue: C, category: a },
          };
        });
      }),
      r
    );
  },
  Ju = Zu,
  pr = Ju.render,
  Br = Ju.h,
  yr = function (u, r) {
    var a = r.args,
      t = u(),
      F = Br(t, a);
    return (
      (F.appContext = ue._context),
      Xu("div", {
        ref: function (p) {
          return p ? pr(F, p) : null;
        },
      })
    );
  },
  Sr = {
    docs: {
      inlineStories: !0,
      prepareForInline: yr,
      extractArgTypes: fr,
      extractComponentDescription: Er,
    },
  },
  br = [cr];
export { br as argTypesEnhancers, Sr as parameters };
//# sourceMappingURL=config.5c867603.js.map
