import './App.css';
import React from 'react';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import TaskFilter from './components/taskFilter';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" className="mt-8">
      <Box className="mb-8">
        <Typography variant="h4" gutterBottom style={{display:"flex",justifyContent:"center"}}>
          Task Manager
        </Typography>
      </Box>
      <TaskForm />
      <Box className="my-8">
        <TaskFilter />
      </Box>
      <TaskList />
    </Container>
  );
}

export default App;


