<template>
  <div>
    <article v-for="(message, idx) in messages" :key="idx">
      <h1>{{ message.message }}</h1>
    </article>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  name: 'HelloWorld',
  data () {
    return {
      messages: []
    }
  },
  firestore () {
    return {
      messages: db.collection('messages').orderBy('createdAt')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
