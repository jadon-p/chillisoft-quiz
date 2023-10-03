// document.addEventListener("DOMContentLoaded",event=> {
//     const app = firebase.app();
// })

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)

    .then(result=>{
        const user = result.user;
        window.location.href="startQuiz.html";
    })
    .catch(console.log)
}

function emailLogin() {
    const loginEmail = email.value;
    const loginPassword = password.value;

    firebase.auth().signInWithEmailAndPassword(loginEmail,loginPassword)
    .then((userCredential) => {
        var user = userCredential.user;
        if (user.emailVerified){
            window.location.href="startQuiz.html";
        } else {
            document.getElementById('loginError').innerText = "Email is not verified";
        }

    })
    .catch((error)=>{
        var errorMessage = error.message;
        document.getElementById('loginError').innerText = errorMessage;
    })
}

function createEmailLogin(){
    const loginEmail = email.value;
    const loginPassword = password.value;
    firebase.auth().createUserWithEmailAndPassword(loginEmail, loginPassword).then((userCredential) => {
    // Signed in 
    var user = userCredential.user;

    user.updateProfile({
        displayName: chosenName.value
    }).then(()=>{
        //update successful
        document.getElementById('signUpError').innerText = "Account successfully created!"
    }).catch((error)=>{
        //an error occured
        var errorMessage = error.message;
        document.getElementById('signUpError').innerText = errorMessage;
    })
    
    firebase.auth().currentUser.sendEmailVerification()
    .then(() => {});

    }).catch((error) => {
        var errorMessage = error.message;
        document.getElementById('signUpError').innerText = errorMessage;
    });
}

function changePassword(){
    const userEmail = email.value;
    firebase.auth().sendPasswordResetEmail(userEmail)
  .then(() => {
    document.getElementById('passwordError').innerText = "Check the entered email to continue this process"
  })
  .catch((error) => {
    var errorMessage = error.message;
    document.getElementById('passwordError').innerText = errorMessage;
  });
} 

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("User is logged in:", user);
    } else {
        console.log("No user is logged in.");
    }
});
