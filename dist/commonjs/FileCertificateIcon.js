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
    _createElementVNode("path", { d: "M14 2H7A2 2 0 0 0 5 4V18A2 2 0 0 0 7 20H10V23L12 22L14 23V20H17A2 2 0 0 0 19 18V7M14 15V17L12 16L10 17V15L8 14L10 13V11L12 12L14 11V13L16 14M13 8V3.5L17.5 8Z" })
  ]))
}