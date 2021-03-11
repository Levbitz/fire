
 var firebaseConfig = {
    apiKey: "AIzaSyBfOWuchHzm8t99Cc6-qHUDAJ9sxmULRJg",
    authDomain: "fir-totis.firebaseapp.com",
    projectId: "fir-totis",
    storageBucket: "fir-totis.appspot.com",
    messagingSenderId: "495805430441",
    appId: "1:495805430441:web:a335e9ffc540b163aa87b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  db.settings({
      cacheSizeBytes:1048576
  })
