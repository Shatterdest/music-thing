<script setup>
import { ref } from "vue";
import useFirebaseAuth from "../composables/firebaseAuth";

const { user, login, signUp } = useFirebaseAuth();

const email = ref("");
const password = ref("");


</script>

<template>
  <div>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="signUp(email, password)">Sign Up</button>
    <button @click="login(email, password)">Login</button>
  </div>
</template>
