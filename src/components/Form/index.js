import "./index.scss";
import { useState } from "react";
import { RiToggleLine, RiToggleFill } from "react-icons/ri";
import { BiCommentAdd } from "react-icons/bi";
import { CiCircleAlert } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import { useNavigate } from "react-router-dom";
import { statuses } from "../../variables";
import * as database from "../../database";

export default function Form() {
  const [description, setDescription] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [status, setStatus] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate user input
    const validate = [];
    if (description === "") {
      validate.push("Please enter the task name.");
    } else {
      // Add task to database
      const addedId = await database.addTask({
        description,
        status,
        createdAt: new Date(), // adding createdAt with a default value
      });
      // Add task to Redux
      dispatch(addTask({ id: addedId, description, status, createdAt: new Date() }));

      // clear input fields
      setDescription("");
      setStatus(1);
      navigate("/");
    }
    setErrorMessages(validate);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Create</h2>
      <p>New Task</p>
      <div className="newTask">
        {/* conditional render error messages */}
        {errorMessages.length > 0 && (
          <div className="error">
            {errorMessages.map((item, index) => (
              <p key={index}>
                <CiCircleAlert />
                {item}
              </p>
            ))}
          </div>
        )}
        <div>
          <label>
            <h3>Task Name</h3>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <h3>Status</h3>
            <select
              value={status}
              onChange={(e) => setStatus(parseInt(e.target.value))}
              className="form-style"
            >
              {statuses.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.text}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button>
          <BiCommentAdd />
          Add
        </button>
      </div>
    </form>
  );
}
