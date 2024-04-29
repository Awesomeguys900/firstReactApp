import { useContext } from "react";
import { CvContext } from "../CvDisplayer/CvContext";

import "./PersonalInformation.css";

function PersonalInformation() {
  const { personalInfo, setPersonalInfo } = useContext(CvContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <h1> Personal Information </h1>
      <form>
        <input
          name="name"
          placeholder="Full Name"
          type="text"
          value={personalInfo.name}
          onChange={handleInputChange}
        />
        <input
          name="city"
          placeholder="City"
          type="text"
          value={personalInfo.city}
          onChange={handleInputChange}
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          type="number"
          value={personalInfo.phoneNumber}
          onChange={handleInputChange}
        />
        <input
          name="mail"
          placeholder="Mail"
          type="email"
          value={personalInfo.mail}
          onChange={handleInputChange}
        />
        <textarea
          name="summary"
          rows="4"
          placeholder="Summary"
          value={personalInfo.summary}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default PersonalInformation;
