
Develop a simple counter application with increment and decrement buttons using React

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div style={styles.container}>
//       <h2>Simple Counter App</h2>
//       <h1>{count}</h1>

//       <div>
//         <button style={styles.btn} onClick={() => setCount(count + 1)}>
//           Increment
//         </button>

//         <button style={styles.btn} onClick={() => setCount(count - 1)}>
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "50px",
//   },
//   btn: {
//     padding: "10px 20px",
//     margin: "10px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
// };

// export default App;


ALLIANCE UNIVERSITY FORM


// import React, { useState } from 'react';

// export default function App() {
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
//   const [course, setCourse] = useState("");
//   const [phone, setPhone] = useState("");
//   const [show, setShow] = useState("");

//   function clr() {
//     setName("");
//     setGender("");
//     setCourse("");
//     setPhone("");
//     setShow("");
//   }

//   function Btn() {
//     setShow(`Name: ${name}, Gender: ${gender}, Course: ${course}, Phone: ${phone}`);
//     alert("successfully submitted");
//   }

   

//   return (
//     <div>
//       <h1>Alliance University</h1>

//       <label>Student Name: </label>
//       <input
//         type="text"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//       />

//       <br /><br />

//       <label>Gender: </label>
//       <input
//         type="text"
//         value={gender}
//         onChange={(event) => setGender(event.target.value)}
//       />

//       <br /><br />

//       <label>Student Course: </label>
//       <input
//         type="text"
//         value={course}
//         onChange={(event) => setCourse(event.target.value)}
//       />

//       <br /><br />

//       <label>Phone: </label>
//       <input
//         type="text"
//         value={phone}
//         onChange={(event) => setPhone(event.target.value)}
//       />

//       <br /><br />

//       <button onClick={Btn}>Submit</button>
//       <button onClick={clr}>Clear</button>

//       <p>{show}</p>
//     </div>
//   );
// }


Create a React component that displays a list of quotes from an array.


// function QuotesList() {
//   const quotes = [
//     "The future belongs to those who believe in the beauty of their dreams.",
//     "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//     "Believe you can and you're halfway there.",
//     "Do something today that your future self will thank you for."
//   ];

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h2>Inspirational Quotes</h2>

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {quotes.map((quote, index) => (
//           <li key={index} style={{ margin: "10px 0", fontSize: "18px" }}>
//             ⭐ {quote}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default QuotesList;



Build a React form that displays the entered user name dynamically as the user types

// import { useState } from "react";

// function UserNameForm() {
//   const [username, setUsername] = useState("");

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>Dynamic Username Form</h2>

//       {/* Input field */}
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         style={{ padding: "10px", width: "250px", marginTop: "20px" }}
//       />

//       {/* Dynamic text display */}
//       <h3 style={{ marginTop: "20px" }}>
//         {username ? `Hello, ${username}!` : "Start typing your name..."}
//       </h3>
//     </div>
//   );
// }

// export default UserNameForm;


Develop a To-Do List application in React that allows users to add and view task

// import { useState } from "react";

// function App() {
//   const [task, setTask] = useState("");        // current input
//   const [tasks, setTasks] = useState([]);      // list of tasks

//   const handleAddTask = () => {
//     if (task.trim() === "") return;            // ignore empty input

//     setTasks([...tasks, task]);                // add new task
//     setTask("");                               // clear input
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "50px auto",
//         textAlign: "center",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h2>React To-Do List</h2>

//       {/* Input + Button */}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           style={{ padding: "8px", width: "70%", marginRight: "5px" }}
//         />
//         <button onClick={handleAddTask} style={{ padding: "8px 12px" }}>
//           Add Task
//         </button>
//       </div>

//       {/* Tasks List */}
//       <ul style={{ textAlign: "left", marginTop: "20px" }}>
//         {tasks.length === 0 && <li>No tasks yet. Add one!</li>}

//         {tasks.map((t, index) => (
//           <li key={index}>{t}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

