// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create an Express app
const app = express();

// async function getDB(){
//     const db = await mongoose.connect('mongodb://127.0.0.1:27017/login', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       })

//       return db
// }

// Connect to MongoDB database
// const mdb = getDB()

// Define a schema for user data
// const userSchema = new Schema({
//   username: String,
//   password: String
// });

// Create a model for the user schema
// const User = mongoose.model('User', userSchema);

// Define an HTTP route to handle login requests
app.get('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Find the user in the database
//   const a = await User.findOne()
//     { username: username, password: password }, (err, user) => {
//     if (err) {
//       console.error('Error finding user:', err);
//       res.status(500).send('Internal server error');
//     } else if (!user) {
//       console.error('User not found!');
//       res.status(404).send('User not found');
//     } else {
//       console.log('Logged in successfully!');
//       res.status(200).send('Logged in successfully');
//     }
//   });
res.send({"message": "a"})
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});


// Import required modules


// Connect to MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB database!');
}).catch((err) => {
  console.error('Error connecting to MongoDB database:', err);
});

