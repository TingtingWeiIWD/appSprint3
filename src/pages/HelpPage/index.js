import { Outlet, NavLink } from "react-router-dom";
import "./index.scss";

export default function HelpPage() {
  return (
    <div className="help">
      <div>
        <h2>Got</h2>
        <p className="p-title">Issues?</p>
        <div className="help-body">
          <div className="help-content">
            <h3>This APP will help you keep track of your tasks.</h3>
            <p>
              Minim laborum voluptate velit nisi sunt ad. Culpa reprehenderit ut
              sit ex sint est dolor ut sit nulla esse anim elit.
            </p>
            <Outlet />
          </div>
          <ul>
            <li>
              <NavLink to="/help" end>
                Introduction
              </NavLink>
            </li>
            <li>
              <NavLink to="/help/add">Adding Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/help/remove">Removing Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/help/status">Changing Status</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
