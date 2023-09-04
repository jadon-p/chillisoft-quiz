document.addEventListener("DOMContentLoaded",event=> {
    const app = firebase.app();
})

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)

    .then(result=>{
        const user = result.user;
        console.log(user)
    })
    .catch(console.log)
}


function emailLogin() {
    const loginEmail = email.value;
    const loginPassword = password.value;

    console.log(loginEmail);
    console.log(loginPassword);

    firebase.auth().signInWithEmailAndPassword(loginEmail,loginPassword)
    .then((userCredential) => {
        var user = userCredential.user;
    })
    .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
    })
}

function createEmailLogin(){
    const loginEmail = email.value;
    const loginPassword = password.value;
    firebase.auth().createUserWithEmailAndPassword(loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
