<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font: 18px/1.5 Georgia;
}

h1, h2, h3, h4, h5, h6 {
  font: inherit;
  font-weight: bold;
}

.container {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>
