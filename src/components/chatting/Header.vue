<template>
  <div>
    <button @click="logout">로그인</button>
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    }
  }
</script>

<style scoped>

</style>
