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
    _createElementVNode("path", { d: "M20.07,4.93C21.88,6.74 23,9.24 23,12C23,14.76 21.88,17.26 20.07,19.07L18.66,17.66C20.11,16.22 21,14.22 21,12C21,9.79 20.11,7.78 18.66,6.34L20.07,4.93M17.24,7.76C18.33,8.85 19,10.35 19,12C19,13.65 18.33,15.15 17.24,16.24L15.83,14.83C16.55,14.11 17,13.11 17,12C17,10.89 16.55,9.89 15.83,9.17L17.24,7.76M13,10A2,2 0 0,1 15,12A2,2 0 0,1 13,14A2,2 0 0,1 11,12A2,2 0 0,1 13,10M11.5,1A2.5,2.5 0 0,1 14,3.5V8H12V4H3V19H12V16H14V20.5A2.5,2.5 0 0,1 11.5,23H3.5A2.5,2.5 0 0,1 1,20.5V3.5A2.5,2.5 0 0,1 3.5,1H11.5Z" })
  ]))
}