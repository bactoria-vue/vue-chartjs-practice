<template>
  <div>
    Home
    <Messages/>
    <SendMessage/>
  </div>
</template>

<script>
  import Messages from "../components/chatting/Messages";
  import SendMessage from "../components/chatting/SendMessage";

  export default {
    name: "Home",
    components: {SendMessage, Messages}
  }
</script>

<style scoped>

</style>
