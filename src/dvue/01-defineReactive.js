function defineReactive(obj, key, val) {
    observe(val)
    // 使用了闭包
    Object.defineProperty(obj, key, {
        get() {
            console.log('get', val)
            return val
        },
        set(newVal) {
            if(newVal === val) return;
            console.log('set', newVal);
            
            val = newVal
        }
    })
}

let obj = {
    foo: '',
    far: 'baz',
    a: {
        name: 'cc'
    }
}
// defineReactive(obj, 'foo', '')



function observe(obj) {
    if(typeof obj !== 'object' || typeof obj === null) {
        return 
    }

    Object.keys(obj).forEach(key => {
        // observe(obj[key])
        defineReactive(obj, key, obj[key])
    })
}

observe(obj)

obj.foo
obj.foo = 'cccs'
obj.foo
obj.far
obj.far = 'boz'
obj.far
// obj.a.name
obj.a.name = 'bb'
obj.a.name