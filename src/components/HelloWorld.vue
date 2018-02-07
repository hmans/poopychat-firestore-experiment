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

<script lang="coffee">
import { db } from '../main'

PoopyChat =
  data: ->
    messages: []
    message: ''

  firestore: ->
    messages: db.collection('messages').orderBy('createdAt')

  methods: 
    addMessage: (message) ->
      createdAt = new Date()
      db.collection('messages').add({ message, createdAt })
      @message = ''
      
export default PoopyChat
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
