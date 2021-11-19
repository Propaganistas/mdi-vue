const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", { d: "M12 2L2 12H4V21H20V12H22M12 5L18 11V19H6V11M13.5 14.58V16H10.5V14.58C9.07 13.75 8.57 11.92 9.4 10.5C10.23 9.05 12.07 8.56 13.5 9.38S15.43 12.05 14.6 13.5C14.34 13.94 13.96 14.32 13.5 14.58M13 17H11V18H13V17Z" })
  ]))
}