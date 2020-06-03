<template>
    <div>
        child2
        <h4 v-bind="$attrs">展开$attrs</h4>
        <p>{{$attrs.msg}}</p>
        <button @click="$emit('addClick')">$listeners</button>
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        name: 'Child2',
        created () {
            this.$root.$on('foo', this.foo)
            console.log(this.$attrs);
            
        },
        methods: {
            foo() {
                alert('foo')
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>