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
var blogDB = firebase.database().ref("blogs");

document.getElementById("blogs").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var title = getElementVal("title");
  var content = getElementVal("content");

  saveMessages(title, content);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("blogs").reset();
}

const saveMessages = (title,content) => {
  var newContactForm = blogDB.push();

  newContactForm.set({
    title: title,
    content: content,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};