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
    _createElementVNode("path", { d: "M23,13V11H19.93C19.75,9.58 19.19,8.23 18.31,7.1L20.5,4.93L19.07,3.5L16.9,5.69C15.77,4.81 14.42,4.25 13,4.07V1H11V4.07C9.58,4.25 8.23,4.81 7.1,5.69L4.93,3.5L3.5,4.93L5.69,7.1C4.81,8.23 4.25,9.58 4.07,11H1V13H4.07C4.25,14.42 4.81,15.77 5.69,16.9L3.5,19.07L4.93,20.5L7.1,18.31C8.23,19.19 9.58,19.75 11,19.93V23H13V19.93C14.42,19.75 15.77,19.19 16.9,18.31L19.07,20.5L20.5,19.07L18.31,16.9C19.19,15.77 19.75,14.42 19.93,13H23M12,8A4,4 0 0,0 8,12H6A6,6 0 0,1 12,6V8Z" })
  ]))
}