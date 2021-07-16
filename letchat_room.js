
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAMkrMuhTLV2891I02-bKd7Qt0QCeWtYLQ",
    authDomain: "kwitter-79cc7.firebaseapp.com",
    databaseURL: "https://kwitter-79cc7-default-rtdb.firebaseio.com",
    projectId: "kwitter-79cc7",
    storageBucket: "kwitter-79cc7.appspot.com",
    messagingSenderId: "921954104926",
    appId: "1:921954104926:web:20e8f5fc650c54728d66cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user_name = localStorage.getItem ('user_name')

  document.getElementById("user_name").innerHTML = "Welcome " + user_name

  function logout()
  {

    localStorage.removeItem ("user_name")

    window.location = "index.html"

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function addRoom()
{
  Room_names = document.getElementById("room_name").value
   
  firebase.database().ref("/").child(Room_names).update({
    purpouse : "adding room name" 
  });

  localStorage.setItem("room_name", Room_names);

  window.location = "letchat_page.html"
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " +Room_names);
row = "<div class='room_name' id="+Room_names+" onclick=' redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row
//End code
});});}
getData();


function redirectToRoomName(name)
{

  console.log(name);
  localStorage.setItem("room_name", name)
  window.location = "letchat_page.html"

}


