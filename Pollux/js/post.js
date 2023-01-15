const getAuth = require("firebase/auth");
const auth = getAuth();
const user = auth.currentUser;

if (user) {
  app.get("/", function(req, res){
    res.sendFile(__dirname + "/post.html");
  });

  } else {
  // No user is signed in.
    alert('Kindly login.');
  }
