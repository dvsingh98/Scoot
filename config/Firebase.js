import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCg_eGGeeTxYoIyQgEGv1JVtpNKB5PouCs',
  projectId: 'scoot-304323',
  appId: '1:884471611995:ios:469615bda54f447e44357e',
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
