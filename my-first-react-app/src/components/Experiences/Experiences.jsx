import { useContext, useState } from "react";
import styles from "./Experiences.module.css";
import { CvContext } from "../CvDisplayer/CvContext";

function Experiences() {
  const { experiences, setExperiences } = useContext(CvContext);
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleNewClick = () => {
    setFormValues({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    setShowForm(true);
  };

  const saveExperience = () => {
    if (Object.values(formValues).some((value) => value === "")) {
      alert("All fields must be filled out");
      return;
    }
    setExperiences((prevExperiences) => [...prevExperiences, formValues]);
    setShowForm(false);
    setFormValues({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  const experienceEdit = (index) => {
    setShowForm(true);
    setFormValues(experiences[index]);
  };

  const experienceDelete = (index) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const renderForm = () => {
    if (!showForm) return null;
    return (
      <form>
        <div className={styles.inputStyle}>
          <input
            name="companyName"
            placeholder="Company Name"
            type="text"
            value={formValues.companyName}
            onChange={handleFormChange}
          />
          <input
            name="positionTitle"
            placeholder="Position Title"
            type="text"
            value={formValues.positionTitle}
            onChange={handleFormChange}
          />
          <input
            name="startDate"
            type="date"
            value={formValues.startDate}
            onChange={handleFormChange}
          />
          <input
            name="endDate"
            type="date"
            value={formValues.endDate}
            onChange={handleFormChange}
          />
          <input
            name="location"
            placeholder="Location"
            type="text"
            value={formValues.location}
            onChange={handleFormChange}
          />
          <textarea
            name="description"
            rows="4"
            placeholder="Description..."
            value={formValues.description}
            onChange={handleFormChange}
          />
        </div>
        <button type="button" onClick={() => setShowForm(false)}>
          Cancel
        </button>
        <button type="button" onClick={saveExperience}>
          Save
        </button>
      </form>
    );
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        {renderForm()}
        {!showForm && <button onClick={handleNewClick}>Add Experience</button>}
      </div>
      {!showForm && (
        <div className={styles.experiencesContainer}>
          {experiences.map((experience, index) => (
            <div className={styles.experiences} key={index}>
              {experience.companyName}
              <button onClick={() => experienceEdit(index)}>✐</button>
              <button onClick={() => experienceDelete(index)}>x</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Experiences;
