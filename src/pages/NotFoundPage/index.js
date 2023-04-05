import "./index.scss";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h2>Sorry,</h2>
      <p className="p-title">We can't find your page</p>
      <img
        src="https://cdn.dribbble.com/users/670441/screenshots/3057209/media/3b97f50c572ab3aa054eb4398ec19a0f.gif"
        alt="page not found"
      />
      <div>
        You may want to try:
        <ul>
          <li>
            <Link to="/">View your tasks</Link>
          </li>
          <li>
            <Link to="/add">Add a new task</Link>
          </li>
          <li>
            <Link to="/help">Get more help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
