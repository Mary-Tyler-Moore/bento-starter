import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyDQy6_6vy5H-FyaO3SVPhBajV_MkfvooBY",
    authDomain: "bento-42964.firebaseapp.com",
    databaseURL: "https://bento-42964.firebaseio.com",
    projectId: "bento-42964",
    storageBucket: "bento-42964.appspot.com",
    messagingSenderId: "145093359374",
    appId: "1:145093359374:web:a0792b26a67db179"
}

firebase.initializeApp(config)
