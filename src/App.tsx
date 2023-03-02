import { useState } from "react"
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Task, TaskEntry } from "./types";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: TaskEntry) => {
    const newTask: Task = {
      ...task,
      id: tasks.length == 0 ? 1 : Math.max(...tasks.map((task) => task.id)) + 1,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id != id))
  };

  return (
    <>
      <h1>To-Do List</h1>
      <div style={{display: 'flex'}}>
        <TaskForm onSubmit={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  );
};

