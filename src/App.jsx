import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
