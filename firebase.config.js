import firebase from 'firebase/app';
import 'firebase/auth'; // Import the authentication module
import 'firebase/firestore'; // Import the Firestore module (if you're using it)
// ... other modules you need

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default app;