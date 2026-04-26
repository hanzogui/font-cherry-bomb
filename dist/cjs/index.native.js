"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
var index_exports = {};
__export(index_exports, {
  createCherryBombFont: () => createCherryBombFont
});
module.exports = __toCommonJS(index_exports);
var import_constants = require("@hanzogui/constants");
var import_core = require("@hanzogui/core");
var createCherryBombFont = function () {
  var font = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    {
      sizeLineHeight = function (size2) {
        return size2 + 10;
      },
      sizeSize = function (size2) {
        return size2 * 1;
      }
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var size = Object.fromEntries(Object.entries({
    ...defaultSizes,
    ...font.size
  }).map(function (param) {
    var [k, v] = param;
    return [k, Math.round(sizeSize(+v))];
  }));
  return (0, import_core.createFont)({
    family: import_constants.isWeb ? '"Cherry Bomb", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : '"Cherry Bomb"',
    lineHeight: Object.fromEntries(Object.entries(size).map(function (param) {
      var [k, v] = param;
      return [k, Math.round(sizeLineHeight((0, import_core.getVariableValue)(v)))];
    })),
    weight: {
      4: "300"
    },
    letterSpacing: {
      4: 0
    },
    ...font,
    size
  });
};
var scale = 1.6;
var defaultSizes = {
  1: scale * 11,
  2: scale * 12,
  3: scale * 13,
  4: scale * 14,
  true: scale * 14,
  5: scale * 16,
  6: scale * 18,
  7: scale * 20,
  8: scale * 23,
  9: scale * 30,
  10: scale * 46,
  11: scale * 55,
  12: scale * 62,
  13: scale * 72,
  14: scale * 92,
  15: scale * 114,
  16: scale * 134
};
//# sourceMappingURL=index.native.js.map
