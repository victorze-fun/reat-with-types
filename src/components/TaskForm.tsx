import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { TaskEntry } from "../types"

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  onSubmit: (task: TaskEntry) => void;
}

const initialState = {
  title: '',
  description: '',
}

export const TaskForm = ({ onSubmit }: Props) => {
  const [task, setTask] = useState<TaskEntry>(initialState);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleChange = ({ target: { name, value } }: HandleInputChange): void => {
    setTask({
      ...task,
      [name]: value
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(task);
    setTask(initialState);
    inputTitle.current?.focus();
  }

  return (
    <div>
      <h1>Añadir tarea</h1>

      <form
        onSubmit={handleSubmit}
        style={{display: 'flex', flexDirection: 'column'}}
      >
        <input
          value={task.title}
          onChange={handleChange}
          type="text"
          placeholder="Escribe un título"
          name="title"
          autoFocus
          ref={inputTitle}
        />
        <textarea
          value={task.description}
          onChange={handleChange}
          name="description"
          placeholder="Escribe una descripción"
          cols={2}
        />
        <button>Guardar</button>
      </form>
    </div>
  )
}
