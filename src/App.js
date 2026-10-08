import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = (event) => {
    event.preventDefault();

    if (!name.trim() || !age.trim() || !major.trim()) {
      return;
    }

    setStudents([
      ...students,
      {
        id: Date.now(),
        name: name.trim(),
        age: age.trim(),
        major: major.trim(),
      },
    ]);

    setName("");
    setAge("");
    setMajor("");
  };

  return (
    <main className="page">
      <section className="card">
        <h1>Student Information System</h1>
        <p className="subtitle">
          Developed By: 101527648 || Student Name: Rasul Dadashbayli || DevOps
        </p>

        <form onSubmit={addStudent} className="student-form">
          <label>
            Name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </label>

          <label>
            Age:
            <input
              type="number"
              min="1"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
            />
          </label>

          <label>
            Major:
            <input
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              placeholder="Enter major"
            />
          </label>

          <button type="submit">Add Student</button>
        </form>

        <h2>Student List</h2>

        {students.length === 0 ? (
          <p className="empty">No students added yet</p>
        ) : (
          <div className="student-list">
            {students.map((student) => (
              <article className="student" key={student.id}>
                <strong>{student.name}</strong>
                <span>Age: {student.age}</span>
                <span>Major: {student.major}</span>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
