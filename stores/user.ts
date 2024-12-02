import { getAuth } from "firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useFirebaseServices } from "../utils/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import getPokemon from "@/utils/fetch";

export const useUserStore = defineStore("userStore", () => {
  const { db } = useFirebaseServices();

  const uid = ref("");
  const email = ref("");
  const displayName = ref("");
  const token = ref("");
  const refreshToken = ref("");
  const expiration = ref(0);
  const pokemon = ref<PokemonObject[]>([]);
  const allPokemon = ref<PokemonObject[]>([]);

  function $reset() {
    uid.value = "";
    email.value = "";
    displayName.value = "";
    token.value = "";
    refreshToken.value = "";
    expiration.value = 0;
    pokemon.value = [];
  }

  function addPokemon() {
    const number = Math.floor(Math.random() * 151);
    const mon = allPokemon.value[number]
    pokemon.value.push(mon)
  }

  async function fetchAllPokemon() {
    allPokemon.value = await getPokemon();
  }

  async function fetchData() {
    try {
      const docRef = doc(db, "users", uid.value);
      const docSnap = await getDoc(docRef);
      pokemon.value = docSnap.data()!.collection;
      console.log("User data fetched from Firestore");
    } catch (err: any) {
      console.log("Error fetching user data:", err);
    }
  }

  async function saveData() {
    try {
      await setDoc(doc(db, "users", uid.value), {
        collection: pokemon.value
      });
      console.log("User data saved to Firestore");
    } catch (err: any) {
      console.error("Error saving user data: ", err);
    }
  }

  async function fetchToken() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) throw new Error("User not authenticated");

    try {
      const idToken = await user.getIdToken(true);
      token.value = idToken;
      expiration.value = Date.now() + 3600 * 1000;
    } catch (error: any) {
      console.error("Error fetching ID token:", error.message);
      throw error;
    }
  }

  return { uid, email, displayName, token, refreshToken, pokemon, allPokemon, expiration, fetchToken, saveData, fetchData, fetchAllPokemon, addPokemon, $reset };
});
