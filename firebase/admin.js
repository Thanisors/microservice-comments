var admin = require("firebase-admin");

var serviceAccount = require("./microservice-firebase-comment-firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const DB =  admin.firestore();
module.exports = {admin , DB}; 

