<template>
  <div>
    <div v-for="room in rooms" :key="room['.key']">
      <room :room="room"/>
    </div>

    <button @click="addRoom()">
      Add Room
    </button>

    <AddRoom v-if="isAddRoom"/>
  </div>
</template>

<script>
  import {db} from '../../firebase'
  import Room from "./Room";
  import AddRoom from "./AddRoom";
  import {mapMutations, mapState} from 'vuex';

  export default {
    name: "Rooms",
    components: {AddRoom, Room},
    data() {
      return {
        rooms: []
      }
    },
    computed: {
      ...mapState(['isAddRoom'])
    },
    firestore() {
      return {
        rooms: db.collection('rooms'),
      }
    },
    created() {
      this.$firestore.rooms.get().then(function (docs) {
        docs.forEach(function (doc) {
          this.rooms.add(doc);
        })
      })
    },
    methods: {
      ...mapMutations([
        'SET_IS_ADD_ROOM'
      ]),
      addRoom() {
        this.SET_IS_ADD_ROOM(true);
      }
    }
  }
</script>

<style scoped>

</style>
