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
    _createElementVNode("path", { d: "M21.5,9V8H20.5L19.5,9H15L14,8H13L7,12H4A2,2 0 0,0 2,14V16H10L13,15H15V16H21.5V14C21.5,14 22,13 22,11.5C22,10 21.5,9 21.5,9Z" })
  ]))
}