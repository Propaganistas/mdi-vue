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
    _createElementVNode("path", { d: "M10.5 7.59L8.16 13.2L5.85 7.59H2L6.29 17.23L4.75 20.7H8.5L14.24 7.59H10.5M15 12.73C13.63 12.73 12.59 13.77 12.59 15C12.59 16.17 13.59 17.16 14.93 17.16C16.32 17.16 17.36 16.13 17.36 14.9C17.36 13.69 16.36 12.73 15 12.73M17.72 3.3L13.89 11.89H18.17L22 3.3H17.72Z" })
  ]))
}