import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Config Firebase
const config = {
    apiKey: "AIzaSyBEZHwwXP-5pgNog0him9t9_cHQ5nH8IxQ",
    authDomain: "valued-network-236802.firebaseapp.com",
    databaseURL: "https://valued-network-236802-default-rtdb.firebaseio.com",
    projectId: "valued-network-236802",
    storageBucket: "valued-network-236802.appspot.com",
    messagingSenderId: "1084934630808",
    appId: "1:1084934630808:web:8ad4b64eb06c1fe35fcfed",
    measurementId: "G-TY42SXM30K"
}

// Initialize Firebase
const appfirebase = initializeApp(config);
export const auth = getAuth(appfirebase);
export const db = getFirestore(appfirebase);