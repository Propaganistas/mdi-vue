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
    _createElementVNode("path", { d: "M4.38,20.9C3.78,20.71 3.3,20.23 3.1,19.63L19.63,3.1C20.23,3.3 20.71,3.78 20.9,4.38L4.38,20.9M20,16V18H13V16H20M3,6H6V3H8V6H11V8H8V11H6V8H3V6Z" })
  ]))
}