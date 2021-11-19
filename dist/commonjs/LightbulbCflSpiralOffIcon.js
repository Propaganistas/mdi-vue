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
    _createElementVNode("path", { d: "M15.45 9.9L13.88 10.68L12.38 9.18L14.55 8.1C14.69 8.03 14.84 8 15 8C16 8 16.42 9.34 15.45 9.9M11.22 8L15.45 5.9C16.41 5.43 16 4 15 4C14.83 4 14.69 4.03 14.55 4.1L9.72 6.5L11.22 8M20.84 22.73L16.09 18H8C7.44 18 7 17.55 7 17V14H8V12C8 11.6 8.2 11.25 8.7 11.03L9 10.88L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M12.11 14L10.5 12.38L10 12.62V14H12.11M9 21C9 21.57 9.46 22 10 22H14C14.56 22 15 21.55 15 21V20H9V21M9 5C9.16 5 9.32 4.95 9.45 4.9L11.45 3.9C12.43 3.36 12 2 11 2C10.84 2 10.69 2.03 10.55 2.1L8.55 3.1C7.56 3.66 8 5 9 5Z" })
  ]))
}