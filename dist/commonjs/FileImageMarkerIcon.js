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
    _createElementVNode("path", { d: "M6 20L12 14L13.03 15.03C13.28 12.26 15.68 10 18.5 10C19 10 19.5 10.08 20 10.22V8L14 2H6C4.89 2 4 2.89 4 4V20C4 21.1 4.89 22 6 22H15.91C15.5 21.44 15 20.76 14.55 20H6M13 3.5L18.5 9H13V3.5M8 9C9.11 9 10 9.9 10 11S9.11 13 8 13 6 12.11 6 11 6.9 9 8 9M18.5 12C16.6 12 15 13.6 15 15.5C15 18.1 18.5 22 18.5 22S22 18.1 22 15.5C22 13.6 20.4 12 18.5 12M18.5 16.8C17.8 16.8 17.3 16.2 17.3 15.6C17.3 14.9 17.9 14.4 18.5 14.4S19.7 15 19.7 15.6C19.8 16.2 19.2 16.8 18.5 16.8Z" })
  ]))
}