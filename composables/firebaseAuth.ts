import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { useFirebaseServices } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";

export function useAuth() {
  
  const { auth, db } = useFirebaseServices();
  const user = ref();
  const error = ref<string | null>(null);
  const userStore = useUserStore()

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      user.value = userCredential.user;
      error.value = null;
      if (userCredential.user) {
        await storeUser(userCredential.user.uid);
        storePinia(userCredential.user)
      }
    } catch (err: any) {
      error.value = err.message;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      user.value = userCredential.user;
      storePinia(userCredential.user)
      error.value = null;

    } catch (err: any) {
      error.value = err.message;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      user.value = null;
      error.value = null;
      userStore.$reset()
    } catch (err: any) {
      error.value = err.message;
    }
  };
  const storeUser = async (uid: string) => {
    try {
      await setDoc(doc(db, "users", uid), {
        authId: uid,
        male: true,
        collection: [],
      });
      console.log("User data added to Firestore");
    } catch (err: any) {
      console.error("Error adding user data: ", err);
      throw err;
    }
  };
  const storePinia = (user: any) => {
    userStore.email = user.email
    userStore.displayName = user.displayName
    userStore.token = user.accessToken
    userStore.refreshToken = user.refreshToken
    userStore.expiration =  Date.now() + user.expiration * 1000
  }

  return {
    user,
    error,
    signUp,
    login,
    logout,
  };
}
