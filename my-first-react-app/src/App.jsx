import "./App.css";
import PersonalInformation from "./components/PersonalInfo/PersonalInformation.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experiences from "./components/Experiences/Experiences.jsx";

function App() {
  return (
    <>
      <PersonalInformation />
      <Skills />
      <Experiences />
      {/* {PersonalInformation()} */}
      {/* {Skills()}
      {Experiences()} */}
    </>
  );
}

export default App;
