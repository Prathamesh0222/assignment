import { Toaster } from "react-hot-toast";
import { Compare } from "./components/Compare";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <div className="md:pt-0 pt-16 pb-16">
              <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/compare" element={<Compare />} />
              </Routes>
            </div>
          </div>
        </div>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
