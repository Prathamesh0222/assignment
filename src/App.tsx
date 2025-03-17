import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Navbar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/compare" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
