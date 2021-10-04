import h from './snabbdom/h';

let vnode1 = h('div', {}, [
    h('p', {}, 'hh'),
    h('p', {}, 'dd'),
    h('p', {}, 'ff'),
    h('p', {}, 'aa')
]);

let vnode2 = h('ul', {}, [
    h('li', {}, 'apple'),
    h('li', {}, 'banana'),
    h('li', {}, [
        h('div', {}, [
            h('p', {}, 'aa'),
            h('p', {}, 'aa')
        ])
    ]),
    h('li', {}, h('li', {}, 'banana'))
])

console.log(vnode2);