import { Task } from "../types"

interface Props {
  task: Task,
  deleteTask: (id: number) => void
}

export const TaskCard = ({ task, deleteTask } : Props) => {
  return (
    <div key="1">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  )
}
