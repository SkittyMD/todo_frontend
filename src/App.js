import { Route, Routes } from "react-router-dom";
import Layout from './components/UI/Layout/Layout'
import AddTaskPage from "./pages/AddTaskPage/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage/EditTaskPage";
import MyTasksPage from "./pages/MyTasksPage/MyTasksPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MyTasksPage />} />
        <Route path="/tasks/:headings" element={<MyTasksPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/edit-task/:id" element={<EditTaskPage />} />
      </Route>
    </Routes>
  );
}

export default App;
