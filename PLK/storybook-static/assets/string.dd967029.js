import {_ as e} from "./iframe.657ba62d.js";

var i = e;
i(
  { target: "Number", stat: !0 },
  {
    isNaN: function (r) {
      return r != r;
    },
  }
);
var s = function (r) {
  if (!r) return "";
  if (typeof r == "string") return r;
  throw new Error(
    "Description: expected string, got: ".concat(JSON.stringify(r))
  );
};
export { s };
//# sourceMappingURL=string.dd967029.js.map
