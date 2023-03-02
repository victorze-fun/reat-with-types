import { Task } from "../types"
import { TaskCard } from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void
}

export const TaskList = ({ tasks, deleteTask }: Props) => {
  return (
    <div style={{marginLeft: '1rem'}}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  )
}
