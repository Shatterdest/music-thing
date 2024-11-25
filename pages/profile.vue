<template>
  <div v-if="isLoggedIn">
    <h1>Welcome, {{ user.displayName || user.email }}!</h1>
    <button @click="logout">Sign Out</button>
  </div>
  <div v-else>
    <p>You need to be logged in to access this page.</p>
  </div>
</template>

<script>
import useAuth from "../composables/firebaseAuth";

const { logout } = useAuth();
</script>
