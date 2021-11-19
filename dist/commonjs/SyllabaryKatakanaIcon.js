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
    _createElementVNode("path", { d: "M4 4V6H18V6.09L14.29 9.79L15.71 11.21L20 6.91V4M11 9V13C11 15.78 10.25 16.89 8.36 18.46L9.64 20C11.75 18.24 13 16.22 13 13V9Z" })
  ]))
}