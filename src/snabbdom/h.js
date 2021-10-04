/*
 * 本方法将节点转换为虚拟dom
 * @method h
 * @for 所属类名
 * @param {无限制} 参数：sel, data, children 参数个数：3
 * @return {返回值类型} object 本函数的返回值为虚拟dom，即js对象
 */

// 简化版的h函数只实现以下三种情况
/*
    1. h('div',{},'text')
    2. h('div',{},[])
    3. h('div',{},h())
*/
import vnode from './vnode';
export default function(sel, data, c) {
    // 检查参数的个数
    if (arguments.length !== 3)
        throw new Error('Argument number must be 3');
    // 检查参数c的类型
    if (typeof c === 'string' || typeof c === 'number') {
        return vnode(sel, data, undefined, c, undefined);
    } else if (Array.isArray(c)) {
        // 第二种情况
        // children用来收集子节点
        let children = [];
        for (let i = 0; i < c.length; i++) {
            // 检查c的项是不是对象
            if (!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))) {
                throw new Error('数组中有项的类型不是h函数');
            }
            children.push(c[i]);
        }
        return vnode(sel, data, children, undefined, undefined);
    } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
        // 第三种情况
        let children = [c];
        return vnode(sel, data, children, undefined, undefined);
    } else {
        throw new Error('传入的第三个参数类型有误');
    }
}