import "./index.scss";
//import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { RiExchangeBoxLine } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { changeStatus, removeTask } from "../../../redux/taskSlice";
import * as database from "../../../database";
import { getStatus } from "../../../variables";

export default function Task({ id, description, status }) {
  const dispatch = useDispatch();
  const handleChangeStatus = () => {
    dispatch(changeStatus(id));
    const updated = database.updateTask({ id, status });

    if (!updated) {
      alert("Failed to update status");
    }
  };
  const handleRemoveTask = (event) => {
    dispatch(removeTask(id));
    const deleted = database.deleteTask(id);

    if (!deleted) {
      alert("Failed to delete status");
    }
  };
  return (
    <div className="task">
      {/* task contents */}

      <h3>{description}</h3>
      <p className="id"># {id}</p>

      <div className="statusContainer">
        <div>
          Status: <span className={getStatus(status)}>{getStatus(status)}</span>
        </div>
        <button onClick={handleChangeStatus}>
          <RiExchangeBoxLine />
          Change Status
        </button>
      </div>
      <button className="remove" onClick={handleRemoveTask}>
        <FiTrash2 />
        Remove Task
      </button>
    </div>
  );
}
