import { useContext, useState } from "react";
import { CvContext } from "../CvDisplayer/CvContext";
import styles from "./Skills.module.css";

function Skills() {
  const { skills, setSkills } = useContext(CvContext);
  const [newSkill, setNewSkill] = useState("");

  const addingSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills((currentSkills) => [...currentSkills, newSkill]);
      setNewSkill("");
    }
  };

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <div key={index} className={styles.skill}>
        {skill}
        <button onClick={() => deleteSkill(index)}>x</button>
      </div>
    ));
  };

  const deleteSkill = (index) => {
    setSkills((currentSkills) => currentSkills.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <input
              id="skillsAdd"
              placeholder="Add Skills"
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button type="button" onClick={addingSkill}>
              Add
            </button>
          </div>
        </form>
      </div>
      <div className={styles.skillsContainer}>{renderSkills()}</div>
    </div>
  );
}

export default Skills;
