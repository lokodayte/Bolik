// Initialize Firebase for GitHub Pages (compat version)
const firebaseConfig = {
  apiKey: "AIzaSyA09Fms6TMFxO2NS69EP_baPltcQCieefU",
  authDomain: "bolik-4c5b7.firebaseapp.com",
  projectId: "bolik-4c5b7",
  storageBucket: "bolik-4c5b7.appspot.com",
  messagingSenderId: "893615231073",
  appId: "1:893615231073:web:b2f6a514a417325b211a20",
  measurementId: "G-N4CEGDDVS6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
