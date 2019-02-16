
  // Initialize Firebase
 var database;
 
  var config = {
    apiKey: "AIzaSyCtDQ4OePI-ALRm8Hol0SxMJvNkl8B4Nqc",
    authDomain: "portfolio-jd-04.firebaseapp.com",
    databaseURL: "https://portfolio-jd-04.firebaseio.com",
    projectId: "portfolio-jd-04",
    storageBucket: "",
    messagingSenderId: "130735999660"
  };

  firebase.initializeApp(config);
  database = firebase.database();

  function submitInfo() {

    var clientName = document.getElementById('name').value;
    var newName = database.ref().child('Names').push().key;
     database.ref('Names/'+newName+'name').set(clientName);
  
    var clientEmail = document.getElementById('email').value;
    var newEmail = database.ref().child('Emails').push().key;
     database.ref('Emails/'+newEmail+'email').set(clientEmail);

     var clientMessage = document.getElementById('message').value;
     var newMessage = database.ref().child('Messages').push().key;
      database.ref('Messages/'+newMessage+'email').set(clientMessage);
}

$(".fire").click(submitInfo);

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text("Thank you for your interest, you will be contacted shortly.");
      $result.css("color", "#4aaaa5")
    } else {
      $result.text(email + " is not valid. Please enter a valid email address.");
      $result.css("color", "red");
    }
    return false;
  }
  
  $(".fire").bind("click", validate);

function clearForm() {
        document.getElementById("contact-form").reset();
}

