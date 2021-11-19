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
    _createElementVNode("path", { d: "M1.11 3L4.14 6.04H3C1.9 6.04 1 6.93 1 8.04V10.04C1 10.59 1.45 11.04 2 11.04H9.15L10.15 12.04H2V20.04C2 21.14 2.9 22.04 4 22.04H20C20.05 22.04 20.09 22.03 20.13 22L21.56 23.45L22.83 22.18L2.39 1.73L1.11 3M11 12.89L13 14.89V20.04H11V12.89M22 12.04V18.8L15.24 12.04H22M21 6.04H17.83C19 2.77 14.6 .455 12.57 3.28L12 4.04L11.43 3.26C10.8 2.37 9.93 2 9.06 1.97C8.06 1.96 7.08 2.5 6.5 3.3L8.04 4.84C8.13 4.38 8.5 4.04 9 4.04C9.89 4.04 10.34 5.12 9.71 5.75C9.56 5.89 9.39 6 9.21 6L11.24 8.04H13V9.8L14.24 11.04H22C22.55 11.04 23 10.59 23 10.04V8.04C23 6.93 22.11 6.04 21 6.04M15.71 5.75C15.08 6.38 14 5.93 14 5.04C14 4.5 14.45 4.04 15 4.04C15.89 4.04 16.34 5.12 15.71 5.75Z" })
  ]))
}