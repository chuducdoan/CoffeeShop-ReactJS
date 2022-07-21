import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Config Firebase
const config = {
    apiKey: 'AIzaSyBEZHwwXP-5pgNog0him9t9_cHQ5nH8IxQ',
    authDomain: 'valued-network-236802.firebaseapp.com',
    projectId: 'valued-network-236802'
}

// Initialize Firebase
const appfirebase = initializeApp(config);
export const auth = getAuth(appfirebase);