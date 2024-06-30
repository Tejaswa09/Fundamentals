import React, { useState } from 'react';
import './teachers.css'; // Assuming you have a CSS file for styling

const TeacherComp = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [score, setScore] = useState(0);

  const students = [
    { id: 1, name: 'Student A' , score: 3},
    { id: 2, name: 'Student B' , score: 7 },
    { id: 3, name: 'Student C', score: 9 },
  ];

  const units = [
    { id: 1, name: 'Unit 1' },
    { id: 2, name: 'Unit 2' },
    { id: 3, name: 'Unit 3' },
  ];

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setSelectedUnit(null); // Reset selected unit when a new student is clicked
  };

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
    // You can initialize or fetch any existing score for the selected unit here if needed
  };

  const handleScoreChange = (event) => {
    setScore(event.target.value);
  };

  const handleSubmitScore = () => {
    // Logic for submitting score (to be implemented)
    console.log(`Score submitted for ${selectedStudent.name}, Unit ${selectedUnit.name}: ${score}`);
    // Reset states or perform other actions after submitting score
  };

  return (
    <div className='teach-main'>
        <h1 className='teach-head'>hello!!! Teacher</h1>
    <div className="teach-container">
      <div className="teach-students">
        <h2>Students</h2>
        <ul>
          {students.map((student) => (
            <li
              key={student.id}
              className={`teach-student ${selectedStudent === student ? 'selected' : ''}`}
              onClick={() => handleStudentClick(student)}
            >
              {student.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedStudent && (
        <div className="teach-units">
          <h2>Units for {selectedStudent.name}</h2>
          <select
            className="teach-unit-dropdown"
            value={selectedUnit ? selectedUnit.id : ''}
            onChange={(e) => handleUnitSelect(units.find(unit => unit.id === parseInt(e.target.value)))}
          >
            <option value="">Select a unit</option>
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>{unit.name}</option>
            ))}
          </select>
          {selectedUnit && (
            <div className="teach-score">
              <label htmlFor="score">Score:</label>
              <input
                type="number"
                id="score"
                className="teach-score-input"
                value={score}
                onChange={handleScoreChange}
                min="0"
                max="10"
              />
              <button className="teach-submit-btn" onClick={handleSubmitScore}>Submit Score</button>
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default TeacherComp;
