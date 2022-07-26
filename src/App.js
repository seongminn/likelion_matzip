import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Board from "./components/Board";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route path=":category" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
