import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useFirebaseServices } from "../utils/firebase.ts";

export default function useAuth() {
  const { auth, db } = useFirebaseServices();
  const user = ref();
  const error = ref<string | null>(null);

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      user.value = userCredential.user;
      error.value = null;
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
    } catch (err: any) {
      error.value = err.message;
    }
  };
  const storeUser = async () => {
    const uid = auth.currentUser.uid;

    db
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

  return {
    user,
    error,
    signUp,
    login,
    logout,
  };
}
