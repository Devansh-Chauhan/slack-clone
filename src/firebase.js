import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD98pmm2rIU8sHfIse4UDSh0dGvGyYNvHE",
  authDomain: "slack-clone-6f8a1.firebaseapp.com",
  projectId: "slack-clone-6f8a1",
  storageBucket: "slack-clone-6f8a1.appspot.com",
  messagingSenderId: "66818092360",
  appId: "1:66818092360:web:5363e076f53ceefe9b177d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db; 

