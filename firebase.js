// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCvkmzvGsV11FfZL-EUt_FG9AUZPhX8apw",
//   authDomain: "rn-notubereats.firebaseapp.com",
//   projectId: "rn-notubereats",
//   storageBucket: "rn-notubereats.appspot.com",
//   messagingSenderId: "583207135336",
//   appId: "1:583207135336:web:bf30658495f789156ef3dd",
//   measurementId: "G-FJ76N8487B",
// };

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// export default firebase;
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvkmzvGsV11FfZL-EUt_FG9AUZPhX8apw",
  authDomain: "rn-notubereats.firebaseapp.com",
  projectId: "rn-notubereats",
  storageBucket: "rn-notubereats.appspot.com",
  messagingSenderId: "583207135336",
  appId: "1:583207135336:web:bf30658495f789156ef3dd",
  measurementId: "G-FJ76N8487B",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
