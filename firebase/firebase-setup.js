import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } from '@env';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
};

let myApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(myApp);