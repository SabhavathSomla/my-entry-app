import React, { useState } from 'react';
import {
    Grid,
    Button,
    TextField,
    Typography,
    Modal,
    Paper,
    Box
} from '@mui/material';
import './App.css';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 3,
};

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
            {/* Navbar */}
            <div className="navbar">
                <div className="title">Employee Entries Details</div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowModal(true)}
                >
                    Create Post
                </Button>
            </div>

            {/* Modal */}
            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" gutterBottom>
                        Add Entry
                    </Typography>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                        }
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Content"
                        variant="outlined"
                        fullWidth
                        multiline
                        maxRows={4}
                        value={formData.content}
                        onChange={(e) =>
                            setFormData({ ...formData, content: e.target.value })
                        }
                        sx={{ mb: 2 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        fullWidth
                    >
                        Submit
                    </Button>
                </Box>
            </Modal>

            {/* Entries Grid */}
            <Grid container spacing={3} sx={{ mt: 2 }}>
                {entries.map((entry, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={3} className="entry-card">
                            <Typography variant="subtitle1" className="card-title">
                                <strong>Title:</strong> {entry.title}
                            </Typography>
                            <Typography variant="body2" className="card-content">
                                <strong>Content:</strong> {entry.content}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default App;
