//firebase instance
import firebase from 'firebase';

var config = {
    apiKey: API_KEY,
    authDomain: APP_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};
// Initialize Firebase
const fire = firebase.initializeApp(config);

export default fire;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.14.6/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.14.6/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>