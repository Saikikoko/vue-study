<template>
    <div>
        <button @click="test">ts</button>
        <h1>{{foo}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Child1',
        inject: ['foo'],
        methods: {
            test() {
                this.$root.$emit('foo')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>