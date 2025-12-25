// import { useState } from "react";

// function StudentPCRegistration() {
//   const [registrations, setRegistrations] = useState([
//     { name: "John Doe", id: "STU001", mac: "00:1A:2B:3C:4D:5E" },
//     { name: "Sarah Smith", id: "STU002", mac: "A1:B2:C3:D4:E5:F6" }
//   ]);

//   const [newName, setNewName] = useState("");
//   const [newId, setNewId] = useState("");
//   const [newMac, setNewMac] = useState("");

//   function handleNameChange(e) { setNewName(e.target.value); }
//   function handleIdChange(e) { setNewId(e.target.value); }
//   function handleMacChange(e) { setNewMac(e.target.value); }

//   function addRegistration() {
//     if (newName.trim() && newId.trim() && newMac.trim()) {
//       setRegistrations([...registrations, { name: newName, id: newId, mac: newMac }]);
//       setNewName("");
//       setNewId("");
//       setNewMac("");
//     }
//   }

//   function deleteRegistration(index) {
//     const updated = registrations.filter((_, i) => i !== index);
//     setRegistrations(updated);
//   }

//   return (
//     <div className="registration-form">
//       <h1>Student PC Registration</h1>
//       <p>Register your personal computer for university network access</p>

//       <div className="input-group">
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={newName}
//           onChange={handleNameChange}
//         />
//         <input
//           type="text"
//           placeholder="Student ID (e.g. STU123)"
//           value={newId}
//           onChange={handleIdChange}
//         />
//         <input
//           type="text"
//           placeholder="PC Mac Address (e.g. AA:BB:CC:11:22:33)"
//           value={newMac}
//           onChange={handleMacChange}
//         />
//         <button className="register-button" onClick={addRegistration}>
//           🔍 Register
//         </button>
//       </div>

//       <h2>Registered PCs ({registrations.length})</h2>
//       <ol>
//         {registrations.map((reg, index) => (
//           <li key={index}>
//             <span className="text">
//               <strong>{reg.name}</strong> | ID: {reg.id} | MAC: {reg.mac}
//             </span>
//             <button className="delete-button" onClick={() => deleteRegistration(index)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default StudentPCRegistration;






















// import { useState } from "react";

// function TodoComponent() {
//   const [tasks, setTasks] = useState(["eat breakfast", "take ashower", "walk a dog"]);
//   const [newTask, setNewTask] = useState("");

//   function handleInputChange(event) {
//     setNewTask(event.target.value);
//   }

//   function addTask() {if (newTask.trim() !== "") {
//     setTasks(t=>[...tasks, newTask]);
//     setNewTask("");
//   }
//     // 
//     //   setTasks([...tasks, newTask]);
//     //   setNewTask("");
//     // }
//   }

//   // function deleteTask(index) {

//   //   const updatedTasks = tasks.filter((_, i) => i !== index);
//   //   setTasks(updatedTasks);
//   // }

//   // function moveTaskUp(index) {
//   //   if (index > 0) {
//   //     const updatedTasks = [...tasks];
//   //     [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
//   //     setTasks(updatedTasks);
//   //   }
//   // }

//   // function moveTaskDown(index) {
//   //   if (index < tasks.length - 1) {
//   //     const updatedTasks = [...tasks];
//   //     [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
//   //     setTasks(updatedTasks);
//   //   }
//   // }

//   return (
//     <div className="to-do-list">
//       <h1>To-Do-List</h1>
//       <div >
//         <input
//           type="text"
//           placeholder="Search..."
//           value={newTask}
//           onChange={handleInputChange}
//         />
//         <button className="search-icon" onClick={addTask}>
//           🔍
//         </button>
//       </div>
//       <ol>
//         {
//             tasks.map((task, index) => (
//           <li key={index} >
//             <span className="text">{task}</span>
//             <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
//             <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
//             <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
//           </li>))
//         }
//         {/* {tasks.map((task, index) => (
//           <li key={index}>
//             <span>{task}</span>
//             <button onClick={() => deleteTask(index)}>Delete</button>
//             <button onClick={() => moveTaskUp(index)}>Up</button>
//             <button onClick={() => moveTaskDown(index)}>Down</button>
//           </li>
//         ))} */}
//       </ol>
//     </div>
//   );
// }

// export default TodoComponent;