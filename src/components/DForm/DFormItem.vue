<template>
    <div>
        <label v-if="label">{{label}}</label>
        <!-- 插槽 -->
        <slot></slot>
        <p class="error">{{error}}</p>
    </div>
</template>

<script>
    import Schema from 'async-validator'

    export default {
        name: 'DFormItem',
        inject: ['form'],
        props: {
            label: {
                type: String,
                default: ""
            },
            prop: {
                type: String
            }
        },
        data() {
            return {
                error: ""
            }
        },
        created () {
            this.$on('validate', () => {
                this.validate()
            });
            // console.log(Schema);
            
        },
        methods: {
            validate() {
                // console.log('validate')
                const rules = this.form.rules[this.prop]
                const value = this.form.model[this.prop]

                console.log(rules, value);
                // 创建校验器
                const descriptor = {[this.prop]: rules}
                const validator = new Schema(descriptor)
                return validator.validate({[this.prop]: value}, (errors) => {
                    // console.log(errors);
                    
                    if(errors) {
                        this.error = errors[0].message
                    } else {
                        this.error = ''
                    }
                    
                })
                
            }
        },
    }
</script>

<style scoped>
.error {
    color: #ff2641;
}
</style>