// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBzJsuGWLdYH5Wt9XcTb-Vgkz_5-bRP6z8",
    authDomain: "seddit-e3b74.firebaseapp.com",
    databaseURL: "https://seddit-e3b74.firebaseio.com",
    projectId: "seddit-e3b74",
    storageBucket: "seddit-e3b74.appspot.com",
    messagingSenderId: "923099618454",
    appId: "1:923099618454:web:82bde24d94968a889cf6b7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
    
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}
    /*
    firebase.auth().signInWithRedirect(provider);
    console.log("successful signin");
    
}
*/

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log("The signin was successful");
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

function googleSignout() {
   firebase.auth().signOut()
	
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}
