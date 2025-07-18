import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Myprojects from "./Components/Myprojects/Myprojects";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />

    </Router>
    
  );
}

export default App;