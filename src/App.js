import { Route, Routes } from "react-router-dom";
import Layout from './components/UI/Layout/Layout'
import MyTasksPage from "./pages/MyTasksPage/MyTasksPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MyTasksPage />} />
        {/* <Route path="/add-new-task" element={<AddNewContactPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
