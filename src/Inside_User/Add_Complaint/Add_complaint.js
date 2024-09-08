import React, { useEffect, useState } from "react";
import "./Add_Complaint.css";
import logo from "../../assets/Logo.png";
import axios from "axios";

const Add_complaint = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [complaint, setComplaint] = useState("");
  const [reference, setReference] = useState("");

  useEffect(() => {
    setReference(parseInt(Math.random() * (1000 - 1) + 1));
  }, []);

  let todays_date = new Date();
  let day = todays_date.getDay();
  let year = todays_date.getFullYear();
  let months = todays_date.toLocaleString("en-us", { month: "long" });

  let handleComplaintSubmit = () => {
    if (
      phone.length === 0 ||
      email.length == 0 ||
      subject.length == 0 ||
      complaint.length == 0
    ) {
      alert("Please fill all the necessary data");
      return false;
    }
    axios
      .post("https://66d581f5f5859a704266544c.mockapi.io/complainSys/data", {
        reference: reference,
        email: email,
        subject: subject,
        complaint: complaint,
        contact: phone,
      })
      .then((res) => {
        alert("Your Complaint Has been registered");
      });
  };

  return (
    <React.Fragment>
      <div className="add-whole">
        <div className="add-headers">
          <div className="add-header">
            <img src={logo} alt="logo here" />
            <h1>Record your complaint here</h1>
          </div>
          <div className="add-header2">
            <span>{`${year + " " + months + " " + day} `}</span>
          </div>
        </div>
        <div className="add-form">
          <div className="reference">
            <label htmlFor="reference">Your Reference Number : </label>
            <br />
            <input
              type="text"
              placeholder="Reference Number"
              disabled
              value={reference}
            />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone Number : </label>
            <br />
            <input
              type="text"
              placeholder="Your phone number here"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email Id : </label>
            <br />
            <input
              type="email"
              value={email}
              placeholder="Your email id here"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="subject">
            <label htmlFor="subject">Subject: </label>
            <br />
            <input
              type="text"
              value={subject}
              placeholder="Your subject to complain"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="complaint">
            <label htmlFor="complaint">Your Complaint: </label>
            <br />
            <input
              type="text"
              value={complaint}
              placeholder="Your complaint here"
              onChange={(e) => setComplaint(e.target.value)}
            />
          </div>
          <div className="add-btn-btn">
            <button type="button" onClick={handleComplaintSubmit}>
              Submit Complaint
            </button>
          </div>
        </div>
        <footer className="footer"></footer>
      </div>
    </React.Fragment>
  );
};

export default Add_complaint;
