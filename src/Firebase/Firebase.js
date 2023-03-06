import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCdLpjebcjEmMMVYvjB46YsUW2kdxq3CBw",
    authDomain: "my-note-app-d6700.firebaseapp.com",
    databaseURL: "https://my-note-app-d6700-default-rtdb.firebaseio.com",
    projectId: "my-note-app-d6700",
    storageBucket: "my-note-app-d6700.appspot.com",
    messagingSenderId: "1060056869039",
    appId: "1:1060056869039:web:bbed29d48de2977f85cc5a"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  