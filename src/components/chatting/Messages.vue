<template>
  <div>
    <h2>메시지</h2>
    <div v-for="message in messages" style="text-align: left">
      <div>{{message.userId}} : {{message.content}}</div>
    </div>
  </div>
</template>

<script>
import {db} from '../../firebase'

  export default {
    name: "Messages",
    data () {
      return {
        messages: [],
        rid:''
      }
    },
    firestore () {
      return {
        messages: db.collection('rooms').doc(this.$route.params.rid).collection('messages').orderBy('timestamp', 'asc')
      }
    }
  }
</script>

<style scoped>

</style>
