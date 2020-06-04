<template>
    <div>
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: String,
                default: 'message'
            },
        },
        data() {
            return {
                ifShow: true
            }
        },
        methods: {
            show() {
               this.ifShow = true
                setTimeout(() => {
                    this.hide()
                }, 2000)
            },
            hide() {
                this.ifShow = false
                this.remove()
            }
        },
    }
</script>

<style scoped>

</style>