import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBHVvtK-8IbXcixAn55XjDDvGzLJ1Ux-GI',
  authDomain: 'fir-login-5fae7.firebaseapp.com',
  projectId: 'fir-login-5fae7',
  storageBucket: 'fir-login-5fae7.appspot.com',
  messagingSenderId: '1063376019517',
  appId: '1:1063376019517:web:4169f9713b4f0492634a54',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

export {app, auth}