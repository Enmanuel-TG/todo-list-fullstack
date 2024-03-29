import { useEffect } from "react";
import { useTasks } from "../contexts/TasksContext";
import TaskCard from "../components/TaskCard";
export default function TasksPage() {
  const { getTasks, tasks } = useTasks();
  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) {
    return (
      <h1>
        No hoy tareas 
      </h1>
    )
   }

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id}/>
      ))}
    </div>
  );
}
