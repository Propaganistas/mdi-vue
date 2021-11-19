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
    _createElementVNode("path", { d: "M12,2C9.11,2 6.6,3.64 5.35,6.04C2.34,6.36 0,8.91 0,12A6,6 0 0,0 6,18V22H18V18H19A5,5 0 0,0 24,13C24,10.36 21.95,8.22 19.35,8.04C18.67,4.59 15.64,2 12,2M8,13H16V20H8V13M9,14V15H15V14H9M9,16V17H15V16H9M9,18V19H15V18H9Z" })
  ]))
}