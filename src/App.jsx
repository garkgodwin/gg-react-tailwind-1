import { useState } from "react";
import { BrowserRouter } from "react-router";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
