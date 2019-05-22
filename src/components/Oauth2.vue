<template>
  <div>
    <button @click="checkUser">checkUser</button>
    <button @click="loginGithub()">login with Github</button>
    <button @click="authenticate('facebook')">auth Facebook</button>
    <button @click="loginGoogle()">auth Google</button>

    <button @click="login()">Login</button>
    <button @click="register()">Register</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import {mapMutations} from 'vuex'

  export default {
    name: "Oauth2",
    methods: {
      ...mapMutations([
        'ADD_USER', 'SET_TOKEN', 'SET_USER'
      ]),
      checkUser() {
        var usera = firebase.auth().currentUser;
        alert(usera)
      },
      loginGithub() {
        const that = this;
        firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).then(function(result) {
          alert(result.credential.accessToken)
          that.SET_TOKEN(result.credential.accessToken);
          that.SET_USER(result.user);
          that.$router.replace('chatting')
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      }
    }
  }
</script>

<style scoped>

</style>
