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
    _createElementVNode("path", { d: "M18 10V7A2 2 0 0 0 16 5H8A2 2 0 0 0 6 7V10A2 2 0 0 0 4 12V17H5.33L6 19H7L7.67 17H16.33L17 19H18L18.67 17H20V12A2 2 0 0 0 18 10M11 10H8V7H11M16 10H13V7H16Z" })
  ]))
}