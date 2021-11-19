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
    _createElementVNode("path", { d: "M2 12C2 17 6 21 11 21C13.4 21 15.7 20.1 17.4 18.4L15.9 16.9C14.6 18.3 12.9 19 11 19C4.8 19 1.6 11.5 6.1 7.1S18 5.8 18 12H15L19 16H19.1L23 12H20C20 7 16 3 11 3S2 7 2 12M10 15H12V17H10V15M10 7H12V13H10V7" })
  ]))
}