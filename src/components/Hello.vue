<template>
  <div class="hello">
    <h1 v-html="msg"></h1>
    <input type="text" v-model="newItem" @keyup.enter="addNew">
    <ul>
      <li v-for="item in items" :class="{finished: item.isFinished}">
        <input type="checkbox" @click="toggleFinished(item)">
        {{ item.label }}
      </li>
    </ul>
    <p>Child Tell me: {{ childWords }}</p>
    <component-a msgfromfather="父组件来的信息" v-on:children-tell-me-something="listenToMyBoy"></component-a>
  </div>
</template>

<script>
import store from '../store'
import componentA from './ComponentA.vue'
export default {
  components: {componentA},
  name: 'hello',
  data () {
    return {
      msg: '<span>Vue Todolist</span>',
      items: store.fetch(),
      newItem: '',
      childWords: ''
    }
  },
  methods: {
    toggleFinished: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    listenToMyBoy: function (msg) {
      this.childWords = msg
    }
  },
  watch: {
    items: {
      handler: function (val, oldVal) {
        store.save(val)
      },
      deep: true
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
