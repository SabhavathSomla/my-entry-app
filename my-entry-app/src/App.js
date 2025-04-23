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
            <Grid container spacing={3} sx={{ m: 3 }} >
            {entries.map((entry, index) => (
                    <Grid size={4} item key={index}>
                        <Paper
                            elevation={3}
                            sx={{

                                height: 200,
                                display: 'flex',
                                flexDirection: 'column',

                                padding: 2,
                                boxSizing: 'border-box',
                                overflow: 'hidden', // important!
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                <strong>Title:</strong> {entry.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
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
