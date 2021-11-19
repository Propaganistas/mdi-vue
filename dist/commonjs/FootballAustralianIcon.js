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
    _createElementVNode("path", { d: "M7.5,7.5C9.17,5.87 11.29,4.69 13.37,4.18C18,3 21,6 19.82,10.63C19.31,12.71 18.13,14.83 16.5,16.5C14.83,18.13 12.71,19.31 10.63,19.82C6,21 3,18 4.18,13.37C4.69,11.29 5.87,9.17 7.5,7.5M10.62,11.26L10.26,11.62L12.38,13.74L12.74,13.38L10.62,11.26M11.62,10.26L11.26,10.62L13.38,12.74L13.74,12.38L11.62,10.26M9.62,12.26L9.26,12.62L11.38,14.74L11.74,14.38L9.62,12.26M12.63,9.28L12.28,9.63L14.4,11.75L14.75,11.4L12.63,9.28M8.63,13.28L8.28,13.63L10.4,15.75L10.75,15.4L8.63,13.28M13.63,8.28L13.28,8.63L15.4,10.75L15.75,10.4L13.63,8.28Z" })
  ]))
}