import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const createFirebaseApp = (config) => {
  if (!getApps().length) {
    return initializeApp(config);
  } else {
    return getApp();
  }
};

const firebaseConfig = {
  apiKey: 'AIzaSyBODpt58XyMsOtQ1h-AB_4-3FF_4t6FQzo',
  authDomain: 'simple-contacts-6b4b6.firebaseapp.com',
  projectId: 'simple-contacts-6b4b6',
  storageBucket: 'simple-contacts-6b4b6.appspot.com',
  messagingSenderId: '91579404339',
  appId: '1:91579404339:web:fb1081beb071f2ec589346',
};

const app = createFirebaseApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
