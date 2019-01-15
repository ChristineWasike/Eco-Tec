var app_firebase = {};
(function(){ 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBB2rlzMTsD_loLDNY8pJbJ5eVPWTxFTVg",
    authDomain: "eco-tec-a3fed.firebaseapp.com",
    databaseURL: "https://eco-tec-a3fed.firebaseio.com",
    projectId: "eco-tec-a3fed",
    storageBucket: "eco-tec-a3fed.appspot.com",
    messagingSenderId: "930751107997"
  };
  firebase.initializeApp(config);
  app_firebase = firebase;
})()