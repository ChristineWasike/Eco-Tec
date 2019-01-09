var mainapp = {};
(function(){
    var firebase =app_firebase;
var uid = {};
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.uid;
        }else{  
            window.location.replace("index.html");
        }
      });
    function logOut(){
        firebase.auth().signOut();
    }
    mainapp.logOut = logOut;
})()
