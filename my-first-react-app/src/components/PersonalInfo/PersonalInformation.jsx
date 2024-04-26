import { useState } from "react";

import "./PersonalInformation.css";

function PersonalInformation() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mail, setMail] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div className="container">
      <h1> Personal Information </h1>
      <form>
        <input
          placeholder="Full Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          placeholder="Phone Number"
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          placeholder="Mail"
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <textarea
          id="summaryTextBox"
          name="summaryTextBox"
          rows="4"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </form>
    </div>
  );
}

export default PersonalInformation;
