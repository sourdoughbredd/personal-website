import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Components/Pages
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails"; // Import the new ProjectDetails component

const pageVariants = {
  initial: {
    opacity: 0,
    x: "+100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div id="app-main-content-container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="projects"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="projects/:projectName"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <ProjectDetails />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
