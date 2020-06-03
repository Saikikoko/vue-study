<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="add">click</button>
    <!-- event bus -->
    <Child1/>
    <Child2 msg="hello child2" v-on="$listeners" warn="ward" />  
    <Comp>
      <!-- 默认插槽 -->
      <template v-slot:default="slotProps">默认插槽{{slotProps.msg}}</template>
      <br>
      <!-- 具名插槽 -->
      <template v-slot:foo>具名插槽</template>
    </Comp>
  </div>
</template>

<script>
import Child1 from './communication/Child1'
import Child2 from './communication/Child2'
import Comp from './slotPage/Comp.vue'

export default {
  name: 'HelloWorld',
  components: {
    Child1,
    Child2,
    Comp,
  },
  provide() {
    return {
      foo: 'abc'
    }
  },
  props: {
    msg: String
  },
  created () {
    // $children
    console.log(this.$children)
    console.log(this.$listeners);
    
  },
  mounted () {
    console.log(this.$children)
  },
  methods: {
    add() {
      this.$emit('addClick', 1)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
