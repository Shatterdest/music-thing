import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

export const useFirebaseServices = () => {
  const { $firebaseAuth } = useNuxtApp();

  const db = getFirestore();
  const storage = getStorage();
  const messaging = getMessaging();

  return {
    auth: $firebaseAuth,
    db,
    storage,
    messaging,
  };
};
