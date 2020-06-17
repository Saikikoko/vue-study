<template>
  <div class="hello">
    <h1>{{ foo }}</h1>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  components: {
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
    
  },
  mounted () {
    
  },
  methods: {
    
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
