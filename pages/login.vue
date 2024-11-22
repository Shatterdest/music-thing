<script setup>
import { ref } from "vue";
import { useAuth } from "../composables/firebaseAuth";

const { login, signUp } = useAuth();

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
