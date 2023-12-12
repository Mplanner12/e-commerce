// firebase/auth.js
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from './firebase';

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in:", user);
    // Redirect to the dashboard or perform other actions as needed
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};
