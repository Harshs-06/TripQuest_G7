let mongoose = require("mongoose");
let conn_string = "mongodb+srv://harshsoni23cse:qinA5YHoZJ2ZrKgc@studentcluster.a4odk.mongodb.net/TripQuest";
 
let dbconnect = () => {
    return mongoose.connect(conn_string, {})
        .then(() => {
            console.log("Connected Successfully to MongoDB!!");
        })
        .catch((err) => {
            console.error("⚠ Failed to connect with database:", err);
            throw err; 
        });
};

module.exports = dbconnect;

 