import "./index.scss";
import { TbChecklist } from "react-icons/tb";
import MainMenu from "../MainMenu";

export default function Header() {
  return (
    <header className="header-component">
      <div className="header-title">
        <h1>
          <TbChecklist />
          To Do App
        </h1>
        <span>By Group 12</span>
      </div>
      <MainMenu />
    </header>
  );
}
