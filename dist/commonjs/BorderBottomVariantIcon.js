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
    _createElementVNode("path", { d: "M5,15H3V17H5M3,21H21V19H3M5,11H3V13H5M19,9H21V7H19M19,5H21V3H19M5,7H3V9H5M19,17H21V15H19M19,13H21V11H19M17,3H15V5H17M13,3H11V5H13M5,3H3V5H5M9,3H7V5H9" })
  ]))
}