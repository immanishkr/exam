

Create a basic Express server in Node.js that runs on port 3000 and returns “Hello World” as a
response.


// const express = require("express");
// const app = express();

// // Home route
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// // Start server on port 3000
// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });



Write Node.js code to establish a connection to a MongoDB database using Mongoose.

// const express = require("express");
// const app = express();

// // Root route
// app.get("/", (req, res) => {
//   res.send("Welcome! API is running.");
// });

// // REST API endpoint
// app.get("/api/message", (req, res) => {
//   res.json({
//     status: "success",
//     message: "Hello, this is your REST API response!"
//   });
// });

// // Start server on port 3000
// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });



// const express = require("express");
// const app = express();
// const mongoose = require("./mong"); // Import the connection file

// app.get("/", (req, res) => {
//   res.send("MongoDB is connected!");
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });



Design a User schema using Mongoose and insert a new user record into the MongoDB
collection

// const mongoose = require("mongoose");

// // 1. Connect to MongoDB
// const MONGO_URI = "mongodb://127.0.0.1:27017/mydatabase"; // DB name = mydatabase

// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // 2. Design User schema
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,          // name must be provided
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,            // no duplicate emails
//   },
//   age: {
//     type: Number,
//     min: 0,                  // age cannot be negative
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,       // auto-set when document is created
//   },
// });

// // 3. Create User model (collection name will be 'users')
// const User = mongoose.model("User", userSchema);

// // 4. Insert a new user record
// async function insertUser() {
//   try {
//     const newUser = new User({
//       name: "Manish Kumar",
//       email: "manish@example.com",
//       age: 22,
//     });

//     const savedUser = await newUser.save();   // insert into MongoDB
//     console.log("✅ User saved:", savedUser);
//   } catch (err) {
//     console.error("❌ Error saving user:", err);
//   } finally {
//     // close DB connection after operation
//     mongoose.connection.close();
//   }
// }

// insertUser();




Create an API endpoint in Node.js to fetch and display all user data stored in a MongoDB
collection.
******


// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON (not strictly needed for GET, but good practice)
// app.use(express.json());

// // 1. Connect to MongoDB
// const MONGO_URI = "mongodb://127.0.0.1:27017/mydatabase"; // change DB name if you want

// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // 2. User schema & model
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

// const User = mongoose.model("User", userSchema);

// // 3. API endpoint to fetch all users
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await User.find();      // fetches all documents from "users" collection
//     res.json(users);                      // send as JSON response
//   } catch (err) {
//     res.status(500).json({
//       message: "Error fetching users",
//       error: err,
//     });
//   }
// });

// // 4. Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
