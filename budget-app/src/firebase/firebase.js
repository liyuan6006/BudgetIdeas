import firebase from 'firebase';
import 'firebase/auth';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDN2v5IFqQG4ohFAFUXBSQJNRtnjqkgO-0",
  authDomain: "budgetideas-5957a.firebaseapp.com",
  databaseURL: "https://budgetideas-5957a.firebaseio.com",
  projectId: "budgetideas-5957a",
  storageBucket: "",
  messagingSenderId: "834717410211"
};
firebase.initializeApp(config);

const auth = firebase.auth();
export {auth,firebase};