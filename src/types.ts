export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean,
}

export type TaskEntry = Omit<Task, 'id' | 'completed'>;

