import "./App.css";
import PersonalInformation from "./components/PersonalInfo/PersonalInformation.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experiences from "./components/Experiences/Experiences.jsx";
import CvDisplay from "./components/CvDisplayer/CvDisplay.jsx";

// Import CvProvider from the file where it is defined
import { CvProvider } from "./components/CvDisplayer/CvContext";
function App() {
  return (
    <>
      <CvProvider>
        {" "}
        <div className="appContainer">
          <div className="leftPanel">
            <PersonalInformation />
            <Skills />
            <Experiences />
          </div>
          <div className="rightPanel">
            <CvDisplay />
          </div>
        </div>
      </CvProvider>
    </>
  );
}

export default App;
