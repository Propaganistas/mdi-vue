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
    _createElementVNode("path", { d: "M12 6C13.66 6 15 7.34 15 9C15 9.78 14.7 10.5 14.21 11L10 6.79C10.5 6.3 11.22 6 12 6M12 4C14.76 4 17 6.24 17 9C17 10.33 16.47 11.53 15.62 12.42L17.04 13.84C18.25 12.59 19 10.88 19 9C19 5.13 15.87 2 12 2C10.12 2 8.41 2.75 7.16 3.96L8.58 5.38C9.47 4.53 10.67 4 12 4M22.11 21.46L20.84 22.73L19.46 21.35C19.1 21.75 18.58 22 18 22H6C4.89 22 4 21.11 4 20C4 19.62 4.1 19.27 4.29 18.97L6.11 15.81C7.69 17.17 9.75 18 12 18C13.21 18 14.37 17.75 15.43 17.32L13.85 15.74C13.26 15.91 12.64 16 12 16C8.13 16 5 12.87 5 9C5 8.36 5.09 7.74 5.26 7.15L1.11 3L2.39 1.73L22.11 21.46M12.1 14L7 8.9C7 8.93 7 8.97 7 9C7 11.76 9.24 14 12 14C12.03 14 12.07 14 12.1 14Z" })
  ]))
}