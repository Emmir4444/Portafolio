import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/aboutme" element={<AboutPage/>}/>
      </Routes>
      <Footer />

    </Router>
    
  );
}

export default App;