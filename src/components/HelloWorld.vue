<template>
  <div>
    <h1>POOPYCHAT</h1>

    <article v-for="(message, idx) in messages" :key="idx">
      <p>{{ message.message }}</p>
    </article>

    <form @submit="addMessage(message)">
      <input v-model="message" placeholder="Poop something" autofocus="true">
      <button type="submit">POOP!</button>
    </form>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  name: 'HelloWorld',
  data () {
    return {
      messages: [],
      message: ''
    }
  },
  firestore () {
    return {
      messages: db.collection('messages').orderBy('createdAt')
    }
  },
  methods: {
    addMessage (message) {
      const createdAt = new Date()
      db.collection('messages').add({ message, createdAt })
      this.message = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
