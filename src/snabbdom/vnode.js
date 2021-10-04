/*
 * 此方法将输入的参数以对象的形式返回
 * @method vnode
 * @for 所属类名
 * @param {无限制} 参数：sel, data, children, text, elm 参数个数：5
 * @return {返回值类型} object
 */
export default function(sel, data, children, text, elm) {
    return {
        sel,
        data,
        children,
        text,
        elm
    }
}