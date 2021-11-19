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
    _createElementVNode("path", { d: "M13 14.89V16.59L17.21 20.79L15.79 22.21L13 19.41V22H11V19.41L8.21 22.21L6.79 20.79L11 16.59V14H5V6.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73L13 14.89M19 14V5H20C20.55 5 21 4.55 21 4V3C21 2.45 20.55 2 20 2H5.2L17.2 14H19Z" })
  ]))
}