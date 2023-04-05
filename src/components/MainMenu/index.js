import "./index.scss";
import { NavLink } from "react-router-dom";
export default function MainMenu() {
  return (
    <div className="main-menu">
      <ul>
        <li>
          <NavLink to="/">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add</NavLink>
        </li>
        <li>
          <NavLink to="/help">Help</NavLink>
        </li>
      </ul>
    </div>
  );
}
