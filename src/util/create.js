import Vue from 'vue'

export function create(Component, props) {
    // 得到构造函数
    const Ctor = Vue.extend(Component)
    console.log(Ctor);
    
    const comp = new Ctor({propsData: props}).$mount()
    document.body.appendChild(comp.$el)
    comp.remove = () => {
        document.body.removeChild(comp.$el)

        comp.$destroy()
    }
    return comp
    // // 首先得到根实例
    // const vm = new Vue({
    //     // render: h => h(Component, {props})
    //     render(h) {
    //         console.log(h(Component, {props}));
    //         return h(Component, {props})
    //     }
    // }).$mount() // 鸡

    
    // document.body.appendChild(vm.$el)

    // // 淘汰机制
    // vm.$children[0].remove = () => {
    //     document.body.removeChild(vm.$el)

    //     vm.$destroy()
    // }

    // return vm.$children[0] // 蛋
}