// const express = require('express')

// const app = express()

// app.get('/test', function(req, res) {
//   res.send({
//     message: 'Hello world!'
//   })
//   console.log('hello')
// })


// app.listen(process.env.PORT || 3000)




var admin = require("firebase-admin")
var serviceAccount = require("./umbrella-13a2d-firebase-adminsdk-1ajnm-e9d3c90707.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://umbrella-13a2d.firebaseio.com"
});

var db = admin.database()
var mode_control = db.ref("mode_control")
var umbrella = db.ref("umbrella")


mode_control.on("value", function(snapshot) {
    console.log(snapshot.val());
}, 
function(errorObject) {
    console.log("The read failed: " + errorObject.code);
})

umbrella.on("value", function(snapshot) {
    console.log(snapshot.val());
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
})

