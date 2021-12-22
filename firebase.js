import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { keyGen } from "./keyGen";
import { apikey, publickey, user } from "./src/store";

var firebaseConfig = {
  apiKey: "AIzaSyBk4jHWqZuza97tipWXlp1IBviRWofE1L8",
  authDomain: "vide-server.firebaseapp.com",
  projectId: "vide-server",
  storageBucket: "vide-server.appspot.com",
  messagingSenderId: "56731503187",
  appId: "1:56731503187:web:c3b45d7f44ff06bba694a6",
  measurementId: "${config.measurementId}",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export const db = getDatabase(app);

export const login = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log("User Logged In.");

      onValue(
        ref(db, `/userkey/${result.user.uid}`),
        (snapshot) => {
          apikey.update(
            (k) => (k = (snapshot.val() && snapshot.val().apikey) || "")
          );
          publickey.update(
            (k) => (k = (snapshot.val() && snapshot.val().publickey) || "")
          );
        },
        {
          onlyOnce: true,
        }
      );

      if (apikey === "") {
        const apikey = keyGen();
        const publickey = keyGen();
        console.log(`unable to get`, { apikey, publickey });
        set(ref(db, `userkey/${auth.currentUser.uid}`), {
          apikey,
          publickey,
          createdAt: new Date().getTime(),
        })
          .then((d) => {
            console.log(`Created and saved to db : ${JSON.stringify(d)}`, {
              apikey,
              publickey,
            });
          })
          .catch(console.log);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      return { errorCode, errorMessage, email, credential };
    });
};

export const logout = () => {
  signOut(auth)
    .then(() => {
      user.set({});
    })
    .catch((error) => {
      console.error(error);
    });
};

onAuthStateChanged(auth, (u) => {
  user.update((e) => (e = { ...u }));
  const userId = u.uid;
  onValue(
    ref(db, `/userkey/${userId}`),
    (snapshot) => {
      apikey.update(
        (k) => (k = (snapshot.val() && snapshot.val().apikey) || "")
      );
      publickey.update(
        (k) => (k = (snapshot.val() && snapshot.val().publickey) || "")
      );
    },
    {
      onlyOnce: true,
    }
  );
});
