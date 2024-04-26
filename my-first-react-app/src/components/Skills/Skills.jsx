import { useState } from "react";

import styles from "./Skills.module.css";

function Skills() {
  const [skills, setSkills] = useState([
    "Communication Skills",
    "Teamwork Skills",
  ]);
  const [newSkill, setNewSkill] = useState("");

  const addingSkill = () => {
    if (newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
      console.log("Adding skill:", newSkill, "to", skills);
      renderSkills();
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
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          <form>
            <div className={styles.inputGroup}>
              <input
                id="skillsAdd"
                placeholder="Add Skills"
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button type="button" onClick={addingSkill}>
                add
              </button>
            </div>
          </form>
        </div>
        <div className={styles.skillsContainer}>{renderSkills()}</div>
      </div>
    </>
  );
}

export default Skills;
