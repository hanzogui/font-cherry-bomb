import { isWeb } from "@hanzogui/constants";
import { createFont, getVariableValue } from "@hanzogui/core";
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
  return createFont({
    family: isWeb ? '"Cherry Bomb", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : '"Cherry Bomb"',
    lineHeight: Object.fromEntries(Object.entries(size).map(function (param) {
      var [k, v] = param;
      return [k, Math.round(sizeLineHeight(getVariableValue(v)))];
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
export { createCherryBombFont };
//# sourceMappingURL=index.native.js.map
