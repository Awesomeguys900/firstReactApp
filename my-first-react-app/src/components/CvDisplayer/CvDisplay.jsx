// CvDisplay.jsx
import { useContext } from "react";
import { CvContext } from "./CvContext";
import "./CvDisplayer.css";

function CvDisplay() {
  const { personalInfo, experiences, skills } = useContext(CvContext);

  return (
    <div className="cvContainer">
      <header className="cvHeader">
        <h1>{personalInfo.name}</h1>
        <p>{personalInfo.city}</p>
        <p>{personalInfo.phoneNumber}</p>
        <p>{personalInfo.mail}</p>
      </header>

      <section className="cvSummary">
        <h2>Professional Summary</h2>
        <p>{personalInfo.summary}</p>
      </section>

      <section className="cvExperiences">
        <h2>Experiences</h2>
        {experiences.map((exp, index) => (
          <article key={index} className="experienceItem">
            <h3>
              {exp.positionTitle} - {exp.companyName}
            </h3>
            <span>
              {exp.startDate} - {exp.endDate}
            </span>
            <p>{exp.description}</p>
          </article>
        ))}
      </section>

      <section className="cvSkills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CvDisplay;
