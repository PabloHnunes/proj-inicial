import { app } from "./firebaseConfig";

export default {
    googleLogar: async () => {
        const provider = new app.auth.GoogleAuthProvider();
        let result = await app.auth().signInWithPopup(provider)
        return result;
    } 

}
  