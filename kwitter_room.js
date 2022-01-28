
var firebaseConfig = {
      apiKey: "AIzaSyDOXubLRbO4uCisefdMo4gJg9or7tbAuj0",
      authDomain: "quitter-project.firebaseapp.com",
      projectId: "quitter-project",
      storageBucket: "quitter-project.appspot.com",
      messagingSenderId: "1008003916670",
      appId: "1:1008003916670:web:cfd2ad996c92792be3492f"
    };
   firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
          room_name = document.getElementById("room_name").ariaValueMax;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End cod
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html";
}

