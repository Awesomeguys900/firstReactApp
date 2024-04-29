// CvContext.js
import { createContext, useState } from "react";

export const CvContext = createContext();

export const CvProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    city: "New York",
    phoneNumber: "5551234567",
    mail: "john.doe@example.com",
    summary:
      "Passionate and dedicated professional with over 5 years of experience in software development...",
  });

  const [experiences, setExperiences] = useState([
    {
      companyName: "Tech Solutions Inc.",
      positionTitle: "Senior Software Engineer",
      startDate: "2020-03-01",
      endDate: "Present",
      location: "New York",
      description:
        "Lead a team of developers in creating software solutions that increased company revenue by 20%.",
    },
  ]);

  const [skills, setSkills] = useState([
    "React",
    "Node.js",
    "Database Management",
    "Project Leadership",
  ]);

  return (
    <CvContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        experiences,
        setExperiences,
        skills,
        setSkills,
      }}
    >
      {children}
    </CvContext.Provider>
  );
};
