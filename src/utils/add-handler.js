// 封装事件绑定
export function addHandler(element, type, handle) {
  if (element.addEventListener) {
    element.addEventListener(type, handle, false)
  } else if (element.attachEvent) { //兼容ie浏览器
    element.attachEvent("on" + type, handle);
  } else {
    element["on" + type] = handle;
  }
}