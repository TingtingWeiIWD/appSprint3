import Task from "./Task";
import "./index.scss";
import { AiOutlineClear } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { clearTasks } from "../../redux/taskSlice";
import { useNavigate } from "react-router-dom";
import * as database from "../../database";

export default function Tasks() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Remove all tasks
  const onClearTasks = () => {
    dispatch(clearTasks());
    tasks.forEach((task) => {
      database.deleteTask(task.id);
    });
  };

  const addTasksHandler = () => {
    navigate("/add");
  };
  // Display all tasks
  return (
    <main className="task-list">
      <h2>Tasks</h2>
      <p>To Do</p>
      <div className="tasksContainer">
        {tasks.map((task, index) => (
          <Task
            key={index}
            id={task.id}
            description={task.description}
            status={task.status}
          />
        ))}
      </div>

      {/* Button to clear all tasks */}

      <div className="buttons-container">
        {tasks.length > 0 && (
          <button onClick={onClearTasks}>
            <AiOutlineClear />
            Clear Tasks
          </button>
        )}
        <button onClick={addTasksHandler}>
          <BiAddToQueue />
          Add Task
        </button>
      </div>
    </main>
  );
}
