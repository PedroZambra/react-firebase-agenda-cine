import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
