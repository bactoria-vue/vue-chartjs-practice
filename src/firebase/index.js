import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import VueFirestore from 'vue-firestore';
Vue.use(VueFirestore)

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC_fOEvvGj13n2gw8nVMC1HpsIgY7YmgwM",
  authDomain: "firsttest-1bcae.firebaseapp.com",
  databaseURL: "firsttest-1bcae.firebaseapp.com",
  projectId: "firsttest-1bcae",
  storageBucket: "firsttest-1bcae.appspot.com",
  messagingSenderId: "991788347060"
});

export const db = firebaseApp.firestore();
