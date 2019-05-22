<template>
  <modal>
    <div slot="header">
      <h2>
        새로운 채팅방 생성
        <a href="" class="modal-default-button"
           @click.prevent="SET_IS_ADD_ROOM(false)">&times;</a>
      </h2>
    </div>

    <div slot="body">
      <form id="add-room-form" @submit.prevent="onSubmitCreateRoom">
        <input  type="text" v-on:keyup.enter="submit" v-model="inputRoomTitle" ref="inputRoomTitle">
      </form>
    </div>

    <div slot="footer">
      <button class="btn" :class="{'btn-success': isValidInput}" type="submit" form="add-room-form" :disabled="!isValidInput">
        채팅방 생성</button>
    </div>

  </modal>
</template>

<script>
  import Modal from './Modal.vue'
  import {mapMutations} from 'vuex'
  import {db} from '../../firebase'
  import firebase from 'firebase'

  export default {
    components: {Modal},
    name: "AddRoom",
    data() {
      return {
        inputRoomTitle: '',
        isValidInput: false
      }
    },
    watch: {
      inputRoomTitle(val) {
        this.isValidInput = !!val.trim().length
      }
    },
    mounted () {
      this.$refs.inputRoomTitle.focus()
    },
    methods: {
      ...mapMutations(['SET_IS_ADD_ROOM']),
      onSubmitCreateRoom() {
        const data = {
          title: this.inputRoomTitle,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        db.collection('rooms').doc(this.inputRoomTitle).set(data).then(()=>{
          this.SET_IS_ADD_ROOM(false);
        })
      }
    }
  }
</script>

<style scoped>

</style>
