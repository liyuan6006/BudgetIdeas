import firebase from './firebaseConfig'

const databaseRef = firebase.database().ref();
export const categoriesRef = databaseRef.child("categories/");