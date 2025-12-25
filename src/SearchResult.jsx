// SearchResult.jsx

import React from "react";

function SearchResult({
  students,
  searchTerm,
  toggleStatus,
  deleteStudent,
  editIndex,
  setEditIndex,
  updateStudent,
  user,
}) {
  // Filter students based on search term (by name or ID)
  const filteredStudents = students.filter((student) => {
    const term = searchTerm.toLowerCase();
    return (
      student.name.toLowerCase().includes(term) ||
      student.id.includes(term)
    );
  });

  return (
    <tbody>
      {filteredStudents.map((student, displayIndex) => {
        // Find the ORIGINAL index in the full studentData array
        const originalIndex = students.indexOf(student);

        // For safety: if not found (shouldn't happen), skip or handle
        if (originalIndex === -1) return null;

        // Check if this row is being edited
        const isEditing = editIndex === originalIndex;

        return (
          <tr key={student.serialNo}> {/* Unique key using student ID */}
            <td>{displayIndex + 1}</td>

            {/* Name */}
            <td>
              {isEditing ? (
                <input
                  type="text"
                  defaultValue={student.name}
                  onChange={(e) =>
                    updateStudent(originalIndex, {
                      ...student,
                      name: e.target.value,
                    })
                  }
                  autoFocus
                />
              ) : (
                student.name
              )}
            </td>

            {/* Student ID */}
            <td>
              {isEditing ? (
                <input
                  type="text"
                  defaultValue={student.id}
                  onChange={(e) =>
                    updateStudent(originalIndex, {
                      ...student,
                      id: e.target.value,
                    })
                  }
                />
              ) : (
                student.id
              )}
            </td>

            {/* PC Serial No */}
            <td>
              {isEditing ? (
                <input
                  type="text"
                  defaultValue={student.serialNo}
                  onChange={(e) =>
                    updateStudent(originalIndex, {
                      ...student,
                      serialNo: e.target.value,
                    })
                  }
                />
              ) : (
                student.serialNo
              )}
            </td>

            {/* IN/OUT Status Button */}
            <td>
              <button
                className={`status-button ${student.status.toLowerCase()}`}
                onClick={() => toggleStatus(originalIndex)}
              >
                {student.status}
              </button>
            </td>

            {/* Action Buttons (Edit / Delete) - Only for Admin */}
            <td>
              {user.role === "Admin" && (
                <>
                  {isEditing ? (
                    <button
                      className="edit-button"
                      onClick={() => setEditIndex(null)}
                      style={{ backgroundColor: "green" }}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="edit-button"
                      onClick={() => setEditIndex(originalIndex)}
                    >
                      Edit
                    </button>
                  )}

                  <button
                    className="delete-button"
                    onClick={() => deleteStudent(originalIndex)}
                  >
                    Delete
                  </button>
                </>
              )}
            </td>
          </tr>
        );
      })}

      {/* Optional: Show message when no results */}
      {filteredStudents.length === 0 && (
        <tr>
          <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
            No students found matching "{searchTerm}"
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default SearchResult;