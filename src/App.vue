<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <h2>{{count}}</h2> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" @addClick="addCount($event)"/> -->
    <d-form :model="model" :rules="rules" ref="form">
      <d-form-item label="用户名" prop="username">
        <d-input v-model="model.username" />
      </d-form-item>
      <d-form-item label="密码" prop="password">
        <d-input v-model="model.password" type="password" placeholder="请输入密码" />
      </d-form-item>
      <d-form-item>
        <button @click="submit">提交</button>
      </d-form-item>
    </d-form>
  </div>
</template>

<script>
import DInput from './components/DForm/DInput.vue';
import DFormItem from './components/DForm/DFormItem.vue';
import DForm from './components/DForm/DForm.vue';

export default {
  name: 'App',
  data() {
    return {
      model: {
        username: 'tom',
        passsword: '' 
      },
      rules: {
        username: [{ required: true, message: '用户名为必填项' }],
        password: [{ required: true, message: '密码为必填项' }]
      }
    }
  },
  components: {
    DInput,
    DFormItem,
    DForm
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if(valid) {
          alert('校验成功')
        } else {
          alert('校验失败')
        }
      })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
