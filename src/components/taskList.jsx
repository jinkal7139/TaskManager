import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, updateTaskStatus, selectFilteredTasks } from '../redux/taskSliece';
import { Button, Card, CardContent, Typography, Select, MenuItem } from '@mui/material';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectFilteredTasks);

  const handleStatusChange = (id, status) => {
    dispatch(updateTaskStatus({ id, status }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="space-y-4 mb-3">
      {tasks.map((task) => (
        <Card key={task.id} className="p-4 shadow-lg rounded-md" style={{marginBottom:"20px"}}>
          <CardContent>
            
            <div className="flex justify-between items-center mt-4">
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {task.description}
            </Typography>
              <Select
                value={task.status}
                onChange={(e) => handleStatusChange(task.id, e.target.value)}
                
              >
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
              <Button onClick={() => handleDelete(task.id)} color="secondary" >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
