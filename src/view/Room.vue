<template>
  <div>
    <Messages/>
    <SendMessage/>
  </div>
</template>

<script>
  import Messages from "../components/chatting/Messages";
  import SendMessage from "../components/chatting/SendMessage";
  export default {
    name: "Room",
    components: {SendMessage, Messages},
    data() {
      return {
        rid: ''
      }
    },
    created() {
      this.rid = this.$route.params.rid
    }

  }
</script>

<style scoped>

</style>
