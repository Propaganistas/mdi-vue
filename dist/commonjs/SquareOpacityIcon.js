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
    _createElementVNode("path", { d: "M19 13V11H21V13H19M21 9V7H19V9H21M21 3H19V5H21V3M17 15H19V13H17V15M21 17V15H19V17H21M13 17V15H15V13H13V11H15V9H13V7H15V5H13V3H3V21H13V19H15V17H13M15 21H17V19H15V21M17 3H15V5H17V3M17 11H19V9H17V11M15 17H17V15H15V17M17 19H19V17H17V19M21 21V19H19V21H21M15 9H17V7H15V9M15 13H17V11H15V13M17 5V7H19V5H17Z" })
  ]))
}