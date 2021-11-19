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
    _createElementVNode("path", { d: "M13 20H5V10H19V11.05C19.74 11.13 20.42 11.38 21 11.78V6C21 4.89 20.11 4 19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.11 3.9 22 5 22H13.18C13.07 21.69 13 21.35 13 21V20M5 6H19V8H5V6M21 16V15.5C21 14.12 19.88 13 18.5 13S16 14.12 16 15.5V16C15.45 16 15 16.45 15 17V21C15 21.55 15.45 22 16 22H21C21.55 22 22 21.55 22 21V17C22 16.45 21.55 16 21 16M20 16H17V15.5C17 14.67 17.67 14 18.5 14S20 14.67 20 15.5V16Z" })
  ]))
}