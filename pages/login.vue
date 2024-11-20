<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const { $firebaseAuth } = useNuxtApp();

const email = ref("");
const password = ref("");
const message = ref("");

const signUp = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword($firebaseAuth, email.value, password.value);
    message.value = `Welcome, ${userCredential.user.email}! Account created successfully.`;
  } catch (error) {
    message.value = error.message;
  }
};

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword($firebaseAuth, email.value, password.value);
    message.value = `Welcome back, ${userCredential.user.email}! You are logged in.`;
  } catch (error) {
    message.value = error.message;
  }
};
</script>

<template>
  <div>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="signUp">Sign Up</button>
    <button @click="login">Login</button>
    <p>{{ message }}</p>
  </div>
</template>