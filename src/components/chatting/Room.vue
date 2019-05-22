<template>
  <router-link :to="'/room/' + room.title">
    <div class="room">
      {{room.title}}
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "Room",
    props: ['room']
  }
</script>

<style scoped>
  .room {
    text-align: center;
    margin: 10px;
  }
</style>
