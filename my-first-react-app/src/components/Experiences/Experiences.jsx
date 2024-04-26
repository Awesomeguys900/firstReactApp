import { useState, useEffect } from "react";

import styles from "./Experiences.module.css";

function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const exampleExperience = {
    companyName: "Example Company",
    positionTitle: "Software Engineer",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    location: "New York",
    description:
      "Worked on developing web applications using React and Node.js",
  };

  const addExperience = (newExperience) => {
    setExperiences([...experiences, newExperience]);
  };

  useEffect(() => {
    //first render only
    addExperience(exampleExperience);
  }, []);

  const handleNewClick = () => {
    document.getElementById("companyName").value = "";
    document.getElementById("positionTitle").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("location").value = "";
    document.getElementById("description").value = "";
    setShowForm(true);
  };

  const LeaveExperience = () => {
    setShowForm(false);
    document.getElementById("companyName").value = "";
    document.getElementById("positionTitle").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("location").value = "";
    document.getElementById("description").value = "";
  };

  function editExperience() {
    if (!showForm) {
      return null;
    }
    const saveExperience = () => {
      const companyName = document.getElementById("companyName").value;
      const positionTitle = document.getElementById("positionTitle").value;
      const startDate = document.getElementById("startDate").value;
      const endDate = document.getElementById("endDate").value;
      const location = document.getElementById("location").value;
      const description = document.getElementById("description").value;

      if (
        !companyName ||
        !positionTitle ||
        !startDate ||
        !endDate ||
        !location ||
        !description
      ) {
        alert("All fields must be filled out");
        return;
      }

      const experience = {
        companyName,
        positionTitle,
        startDate,
        endDate,
        location,
        description,
      };

      setShowForm(false);
      addExperience(experience);
      console.log(experiences);

      document.getElementById("companyName").value = "";
      document.getElementById("positionTitle").value = "";
      document.getElementById("startDate").value = "";
      document.getElementById("endDate").value = "";
      document.getElementById("location").value = "";
      document.getElementById("description").value = "";
    };

    return (
      <>
        <form>
          <div className={styles.inputStyle}>
            <input id="companyName" placeholder="Company Name" type="text" />
            <input
              id="positionTitle"
              placeholder="Position Title"
              type="text"
            />
            {/* <label htmlFor="startDate"> Start Date</label> */}
            <input id="startDate" type="date" />
            {/* <label htmlFor="endDate"> End Date</label> */}
            <input id="endDate" type="date" />
            <input id="location" placeholder="Location" type="text" />
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="description..."
            />
          </div>
        </form>
        <button onClick={LeaveExperience}> Cancel </button>
        <button onClick={saveExperience}> Save </button>
      </>
    );
  }

  const experienceDelete = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const experienceEdit = (index) => {
    setShowForm(true);
    setSelectedExperience(experiences[index]);
    experienceDelete(index);
    console.log(selectedExperience);
  };

  useEffect(() => {
    if (showForm && selectedExperience) {
      document.getElementById("companyName").value =
        selectedExperience.companyName;
      document.getElementById("positionTitle").value =
        selectedExperience.positionTitle;
      document.getElementById("startDate").value = selectedExperience.startDate;
      document.getElementById("endDate").value = selectedExperience.endDate;
      document.getElementById("location").value = selectedExperience.location;
      document.getElementById("description").value =
        selectedExperience.description;
    }
  }, [showForm, selectedExperience]);

  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          {editExperience()}
          {!showForm ? (
            <button onClick={handleNewClick}> Add Experiences </button>
          ) : null}
        </div>

        {!showForm ? (
          <div className={styles.experiencesContainer}>
            {experiences.map((experience, index) => (
              <div className={styles.experiences} key={index}>
                {experience.companyName}
                <button onClick={() => experienceEdit(index)}>✐</button>
                <button onClick={() => experienceDelete(index)}>x</button>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Experiences;
