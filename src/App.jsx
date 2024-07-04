import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';

const App = () => {
    const [predictions, setPredictions] = useState([]);

    const fetchPredictions = async () => {
        const response = await axios.get('http://localhost:5000/predict');
        setPredictions(response.data);
    };

    useEffect(() => {
        fetchPredictions();
    }, []);

    return (
        <Container>
            <Typography variant="h3" gutterBottom>Lottery Predictor</Typography>
            <Button variant="contained" color="primary" onClick={fetchPredictions}>Get Predictions</Button>
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                {predictions.map((pred, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Paper style={{ padding: '20px', textAlign: 'center' }}>
                            <Typography variant="h6">Prediction {index + 1}</Typography>
                            <Typography variant="body1">Predicted Number: {pred}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default App;

