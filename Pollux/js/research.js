// const firebaseConfig = {
//   apiKey: "AIzaSyCHiYDxPf_ShRVsEIcc9_edphiPaDaU5q0",
//   authDomain: "wordpad-46016.firebaseapp.com",
//   databaseURL: "https://wordpad-46016-default-rtdb.firebaseio.com",
//   projectId: "wordpad-46016",
//   storageBucket: "wordpad-46016.appspot.com",
//   messagingSenderId: "668400414476",
//   appId: "1:668400414476:web:e6c0af264657227f296329",
//   measurementId: "G-TCBFR1W0L9"
// };

// firebase.initializeApp(firebaseConfig);

// //reference from database
// var blogDB = firebase.database().ref("blogs");

// document.getElementById("blogs").addEventListener("submit", publishBlog);

// function publishBlog(e) {
//   e.preventDefault();

//   var title = document.getElementById("title");
//   var content = document.getElementById("content");
//   console.log("Working");

//   console.log(title, content);
// }

const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyCHiYDxPf_ShRVsEIcc9_edphiPaDaU5q0",
    authDomain: "wordpad-46016.firebaseapp.com",
    databaseURL: "https://wordpad-46016-default-rtdb.firebaseio.com",
    projectId: "wordpad-46016",
    storageBucket: "wordpad-46016.appspot.com",
    messagingSenderId: "668400414476",
    appId: "1:668400414476:web:e6c0af264657227f296329",
    measurementId: "G-TCBFR1W0L9"
  };
  
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var researchDB = firebase.database().ref("researchs");
  
  document.getElementById("researchs").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var title_re = getElementVal("title_re");
    var content_re = getElementVal("content_re");
  
    saveMessages(title_re, content_re);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("researchs").reset();
  }
  
  const saveMessages = (title_re,content_re) => {
    var newContactForm = researchDB.push();
  
    newContactForm.set({
      title_re: title_re,
      content_re: content_re,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };