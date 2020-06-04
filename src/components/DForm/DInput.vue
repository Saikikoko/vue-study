<template>
    <div>
        <!-- 实现双向绑定-->
        <input :value="value" :type="type" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        name: "DInput",
        props: {
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            }
        },
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value)
                
                console.log(this.$parent);
                
                // 进行校验
                this.$parent.$emit('validate')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>