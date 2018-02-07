<template>
  <div>
    <h1>The the poop?</h1>
    <article v-for="(message, idx) in messages" :key="idx">
      <p>{{ message.message }}</p>
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
</style>
