<template>
  <div>
      <sub-title :sub-title="subTitle"/>
      <header/>
    <Rooms/>
    <router-view/>
  </div>
</template>

<script>
  import Messages from "../components/chatting/Messages";
  import SubTitle from "../components/SubTitle";
  import SendMessage from "../components/chatting/SendMessage";
  import Header from "../components/chatting/Header";
  import Rooms from "../components/chatting/Rooms";

  export default {
    name: "Chatting",
    data() {
      return {
        subTitle: "채팅방",
      }
    },
    components: {Rooms, Header, SendMessage, SubTitle, Messages}
  }
</script>

<style scoped>

</style>
