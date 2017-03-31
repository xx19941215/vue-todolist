<template>
  <div class="hello">
    {{ msg }}
    <p>{{ msgfromfather }}</p>
    <button @click="onClickMe">Tell My Father</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentA',
  props: ['msgfromfather'],
  events: ['children-tell-me-something'],
  data () {
    return {
      msg: '你好'
    }
  },
  methods: {
    onClickMe: function () {
      this.$emit('children-tell-me-something', 'hello from component-a')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.finished {
  text-decoration: line-through;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
