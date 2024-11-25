import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Transactions from "./pages/Transactions";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="Transactions" element={<Transactions />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;