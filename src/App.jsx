
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Task from "./pages/Tack/Task";
import Work from "./pages/Work/Work";
import Tada from "react-reveal/Tada";
import ScrollToTop from "react-scroll-to-top"
import { useTheme } from "./Context/Theme";
import Mobilenav from "./components/Layout/Mobilenav/Mobilenav";
const App = () => {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Mobilenav/>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Task />
          <Projects />
          <Work />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>

          <h4 className="text-center">Made With 💕 Hasan &copy; 2024...!</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
};

export default App;
