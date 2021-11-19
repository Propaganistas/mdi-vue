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
    _createElementVNode("path", { d: "M11 3C10.18 3 9.44 3.5 9.14 4.27L3.64 18.27C3.12 19.58 4.09 21 5.5 21H7.75C8.59 21 9.33 20.5 9.62 19.7L10.26 18H13.74L14.38 19.7C14.67 20.5 15.42 21 16.25 21H18.5C19.91 21 20.88 19.58 20.36 18.27L14.86 4.27C14.56 3.5 13.82 3 13 3M11 5H13L18.5 19H16.25L15.12 16H8.87L7.75 19H5.5M12 7.67L9.62 14H14.37Z" })
  ]))
}