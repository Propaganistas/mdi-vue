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
    _createElementVNode("path", { d: "M21 2V6H3V2H21M4 7H20V20H4V7M9 12H15V10.5C15 10.22 14.78 10 14.5 10H9.5C9.22 10 9 10.22 9 10.5V12M7 24H9V22H7V24M11 24H13V22H11V24M15 24H17V22H15V24Z" })
  ]))
}