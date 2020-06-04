<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        provide() {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: Object
        },
        mounted () {
            console.log(this.$children);
        },
        methods: {
            validate(cb) {
                const tasks = this.$children
                .filter(item => item.prop)
                .map(item => item.validate())
                
                console.log(tasks);
                
                Promise.all(tasks)
                .then(() => cb(true))
                .catch(() => cb(false))
            }
        },
    }
</script>

<style scoped>

</style>