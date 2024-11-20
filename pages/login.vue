<script setup>
import { ref } from "vue";
import useFirebaseAuth from "../composables/firebaseAuth";

const { user, login, signUp } = useFirebaseAuth();

const email = ref("");
const password = ref("");

  const storeUser = async () => {
    const uid = auth.currentUser.uid;

    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .set({
        authId: uid,
        male: true,
        collection: [],
      })
      .then(() => {
        console.log("User data added to Firestore");
      })
      .catch((error) => {
        console.error("Error adding user data: ", error);
      });
  };
};
</script>

<template>
  <div>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="signUp">Sign Up</button>
    <button @click="login">Login</button>
  </div>
</template>
