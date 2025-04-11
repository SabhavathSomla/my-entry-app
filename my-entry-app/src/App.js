
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', age: '', company: '' });
  const [entries, setEntries] = useState([]);

  const handleSubmit = () => {
    if (formData.name && formData.age && formData.company) {
      setEntries([...entries, formData]);
      setFormData({ name: '', age: '', company: '' });
      setShowModal(false);
    }
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="title">Employee Entries Details</div>
        <button className="add-btn" onClick={() => setShowModal(true)}>Create Post</button>
      </div>

      {showModal && (
        <div className="modal-bg" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Add Entry</h2>
            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label>Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
            <label>Company Name</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}

      <div className="card-container">
        {entries.map((entry, index) => (
          <div className="card" key={index}>
            <p><strong>Name:</strong> {entry.name}</p>
            <p><strong>Age:</strong> {entry.age}</p>
            <p><strong>Company:</strong> {entry.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


