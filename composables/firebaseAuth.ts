import { ref } from "vue";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export function useAuth() {
  const { $firebaseAuth } = useNuxtApp();
  const auth = $firebaseAuth
  const user = ref();
  const error = ref<string | null>(null);

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      error.value = null;
    } catch (err: any) {
      error.value = err.message;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
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

  return {
    user,
    error,
    signUp,
    login,
    logout,
  };
}
