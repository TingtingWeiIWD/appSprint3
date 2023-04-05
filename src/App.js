import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

import { setTask } from "./redux/taskSlice";
import { useDispatch } from "react-redux";

import * as database from "./database";
import TasksPage from "./pages/TasksPage";
import FormPage from "./pages/FormPage";
import HelpPage from "./pages/HelpPage";
import HelpAddPage from "./pages/HelpPage/HelpAddPage";
import HelpRemovePage from "./pages/HelpPage/HelpRemovePage";
import HelpStatusPage from "./pages/HelpPage/HelpStatusPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();

  //Get the tasks from database onload
  useEffect(() => {
    (async () => {
      const tasks = await database.loadTasks();
      dispatch(setTask(tasks));
    })();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/add" element={<FormPage />} />
        <Route path="/help" element={<HelpPage />}>
          <Route path="add" element={<HelpAddPage />} />
          <Route path="remove" element={<HelpRemovePage />} />
          <Route path="status" element={<HelpStatusPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
