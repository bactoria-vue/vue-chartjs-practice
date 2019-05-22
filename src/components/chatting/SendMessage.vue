<template>
  <div>
    <textarea v-model="message" v-on:keyup.enter.exact="addMessage()" style="width: 100%;"/>
  </div>
</template>

<script>
  import {db} from '../../firebase'
  import {mapGetters} from 'vuex'
  import firebase from 'firebase'

  export default {
    name: "SendMessage",
    data() {
      return {
        message: '',
        rid: ''
      }
    },
    computed: {
      ...mapGetters({
        userName: 'GET_USER_ID'
      })
    },
    methods: {
      addMessage() {
        db.collection("rooms").doc(this.$route.params.rid).collection("messages").add(
          {
            userId: "아레이",
            content: this.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(() => {
            this.message = ""
          })
      }
    }
  }
</script>

<style scoped>

</style>
