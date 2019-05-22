<template>
  <div style="height: 60px;">
    <div class="menu" v-for="link in links">
      <router-link :to="link.to">{{link.name}}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        links : [
          {name: 'Chart', to: '/chart'},
          {name: 'Progress', to: '/progress'},
          {name: 'Chatting', to: '/chatting'}
        ]
      }
    },
  }
</script>

<style scoped>

  .menu {
    float: left;
    margin: 20px;
  }
</style>
