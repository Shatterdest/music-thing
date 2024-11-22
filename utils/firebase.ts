export const useFirebaseServices = () => {
  const { $firebaseAuth, $firebaseDb } = useNuxtApp();

  return {
    auth: $firebaseAuth,
    db: $firebaseDb,
  };
};
