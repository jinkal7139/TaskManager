import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../redux/taskSliece';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const TaskFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div style={{margin:" 20px 0px"}}>

    <FormControl fullWidth>
      <InputLabel>Status</InputLabel>
      <Select
        value={filter}
        onChange={handleFilterChange}
        label="Status"
        
        >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="To Do">To Do</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Done">Done</MenuItem>
      </Select>
    </FormControl>
          </div>
  );
};

export default TaskFilter;
