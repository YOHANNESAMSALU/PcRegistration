// App.jsx
import { useState, useEffect } from "react";
import SearchInput from "./searchInput.jsx";
import PlusButton from "./plusButton.jsx";
import AddNewInput from "./AddNewInput.jsx";
import SearchResult from "./SearchResult.jsx";
import Login from "./Login.jsx";

function App() {
  // Persistent student data
  const [studentData, setStudentData] = useState(() => {
    const savedData = localStorage.getItem("studentData");
    return savedData ? JSON.parse(savedData)
      : [
          { name: "john", id: "12345", serialNo: "67890", status: "IN" },
          { name: "Abebe", id: "54321", serialNo: "09876", status: "OUT" },
          { name: "Kebede", id: "11223", serialNo: "33445", status: "IN" },
        ];
  });
const [lightMode, setLightMode] = useState(() => {
    const savedMode = localStorage.getItem('thememode');
    return savedMode? JSON.parse(savedMode) : true;
  });
  useEffect(() => {
    localStorage.setItem("studentData", JSON.stringify(studentData));
    localStorage.setItem('thememode',JSON.stringify(lightMode));
  }, [studentData, lightMode]);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [showNewPage, setShowNewPage] = useState(false);


  // Persistent logged in user
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Stats
  const inCount = studentData.filter((s) => s.status === "IN").length;
  const outCount = studentData.filter((s) => s.status === "OUT").length;

  // Functions
  const updateStudent = (index, updatedStudent) => {
    const updatedData = [...studentData];
    updatedData[index] = updatedStudent;
    setStudentData(updatedData);
    setEditIndex(null);
  };

  const handleAddStudent = () => {
    if (!name || !id || !serialNo) {
      alert("Please fill in all fields");
      return;
    }
    const newStudent = { name, id, serialNo, status: "IN" };
    setStudentData([...studentData, newStudent]);
    setName("");
    setId("");
    setSerialNo("");
    setShowNewPage(false);
  };

  const deleteStudent = (index) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    const updatedData = studentData.filter((_, i) => i !== index);
    setStudentData(updatedData);
  };
  const handleSearch = (e) => {setSearchTerm(e.target.value)
    setSearchTerm(e.target.value);
  };

  const toggleStatus = (index) => {
    const updatedData = [...studentData];
    updatedData[index].status =
      updatedData[index].status === "IN" ? "OUT" : "IN";
    setStudentData(updatedData);
  };
auto
  // Render login if not logged in
  if (!user) return <Login onLogin={setUser} />;

 

const lightIcon = "https://thumbs.dreamstime.com/b/light-mode-icon-symbol-357207566.jpg";
const darkIcon = "https://www.svgrepo.com/show/432507/light-mode.svg";

const modeIcon = lightMode ? darkIcon : lightIcon;

function handleModeChange() {
  setLightMode(prev => !prev);
}


  return (
   <div className={lightMode ? "App light" : "App dark"}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <img className="light-mode" 
      src={modeIcon} alt="toggle background" 
      onClick={handleModeChange}
      />
        <h1>Student PC Registration</h1>
        <button
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            setUser(null);
          }}
          className="Logout-button"
        >
          Logout
        </button>
      </div>
 
      {/* Search & Add */}
      <div className="search-container">
        <SearchInput value={searchTerm} onChange={handleSearch} />
        {user.role === "Admin" && <PlusButton onClick={() => setShowNewPage(true)} />}
      </div>

      {/* Add New Student Overlay */}
      {showNewPage && (
        <div className="overlay" onClick={() => setShowNewPage(false)}>
          <div className="new-page-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowNewPage(false)}>
              ✕
            </button>
            <h1>Add New Student</h1>
            <div className="white-container">
              <AddNewInput lable="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
              <AddNewInput lable="S ID" value={id} onChange={(e) => setId(e.target.value)} /><br />
              <AddNewInput lable="S No" value={serialNo} onChange={(e) => setSerialNo(e.target.value)} /><br />
              <button className="Add-button" onClick={handleAddStudent}>Add</button>
            </div>
          </div>
        </div>
      )}

      {/* Statistics */}
      <div className="stats">
        <span>🟢 IN: {inCount}</span>
        <span>🔴 OUT: {outCount}</span>
      </div>

      {/* Student Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Student Name</th>
              <th>Student Id</th>
              <th>PC Serial No</th>
              <th>IN/OUT</th>
              <th>Action</th>
            </tr>
          </thead>
          <SearchResult
            students={studentData}
            searchTerm={searchTerm}
            toggleStatus={toggleStatus}
            deleteStudent={deleteStudent}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
            updateStudent={updateStudent}
            user={user}
          />
        </table>
      </div>
    </div>
  );
}

export default App;
// | Username | Password | Role  |
// | -------- | -------- | ----- |
// | admin    | admin123 | Admin |
// | user     | user123  | User  |
