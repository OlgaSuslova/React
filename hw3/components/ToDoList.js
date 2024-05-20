// Задание 2: Список дел с Material UI
// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
    setTask("");
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => setTask(e.target.value)}
          value={task}
          id="outlined-basic"
          label="Задача:"
          variant="outlined"
        />

        <Button onClick={addTask} variant="contained" size="large">
          Добавить
        </Button>
      </Box>
      {tasks.map((task, i) => (
        <Card key={i} variant="outlined" style={{ marginTop: "1rem" }}>
          <CardContent>
            <Typography>{task}</Typography>
            <IconButton onClick={() => deleteTask(i)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default TodoList;
