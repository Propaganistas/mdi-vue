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
    _createElementVNode("path", { d: "M16,6C16.56,6 17,6.44 17,7C17,7.56 16.56,8 16,8C15.44,8 15,7.56 15,7C15,6.44 15.44,6 16,6M16,3C18.73,3 21.06,4.66 22,7C21.06,9.34 18.73,11 16,11C13.27,11 10.94,9.34 10,7C10.94,4.66 13.27,3 16,3M16,4.5A2.5,2.5 0 0,0 13.5,7A2.5,2.5 0 0,0 16,9.5A2.5,2.5 0 0,0 18.5,7A2.5,2.5 0 0,0 16,4.5M18,12.75V16H13.08L10,19.08V16H4V6H8.27C8.59,5.27 9,4.6 9.5,4H4A2,2 0 0,0 2,6V16C2,17.11 2.9,18 4,18H8V21A1,1 0 0,0 9,22H9.5C9.75,22 10,21.9 10.2,21.71L13.9,18H18C19.11,18 20,17.11 20,16V12C19.37,12.33 18.7,12.58 18,12.75Z" })
  ]))
}