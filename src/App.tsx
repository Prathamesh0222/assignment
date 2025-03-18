import { Toaster } from "react-hot-toast";
import { Compare } from "./components/Compare";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
