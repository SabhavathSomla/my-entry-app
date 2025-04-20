
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [entries, setEntries] = useState([]);

  const handleSubmit = () => {
    if (formData.title && formData.content) {
      setEntries([...entries, formData]);
      setFormData({ title: '', content: '' });
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
            <h2>Add Entry </h2>
            <label>Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <label>Content</label>
            <input
              type="text"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}

      <div className="card-container">
        {entries.map((entry, index) => (
          <div className="card" key={index}>
            <p><strong>Title:</strong> {entry.title}</p>
            <p><strong>Content:</strong> {entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


