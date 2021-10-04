import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from "snabbdom";

// 创建patch函数
const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
]);

// 创建虚拟节点
const myVnode = h('ul', {}, [
    h('li', 'pingugo'),
    h('li', 'xigua'),
    h('li', 'xiangjiao'),
    h('li', 'haha')
]);
const container = document.getElementById("container");

// 让虚拟节点渲染上树
patch(container, myVnode);