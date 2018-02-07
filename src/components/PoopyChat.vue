<template>
  <div>
    <h1>POOPYCHAT</h1>

    <article v-for="(message, idx) in messages" :key="idx">
      <p>{{ message.message }}</p>
    </article>

    <form @submit="postMessage">
      <input v-model="newMessage" placeholder="Poop something" autofocus="true">
      <button type="submit">POOP!</button>
    </form>
  </div>
</template>

<script lang="coffee">
import { db } from '../main'

export default
  data: ->
    messages: []
    newMessage: ''

  firestore: ->
    messages: db.collection('messages').orderBy('createdAt')

  methods: 
    postMessage: ->
      db.collection('messages').add
        message: @newMessage
        createdAt: new Date()
        
      @newMessage = ''
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
