import { Route, Routes } from "react-router-dom";
import Bills from "./pages/Bills/Bills";
import Home from "./pages/Home/Home";
import Task from "./pages/Task/Task";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
        <Route path="/bills" element={<Bills/>} />
      </Routes>
    </>
  );
}

export default App;
