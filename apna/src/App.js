import React, { useState } from "react";
import "./App.css";

/* Reusable Component */
function ItemCard(props) {
  return (
    <div className="item">
      {props.name}
    </div>
  );
}

function App() {

  /* Array of items */
  const items = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"];

  /* JavaScript Object */
  const student = {
    name: "saksham",
    course: "Computer Engineering",
    city: "Nagpur"
  };

  /* useState for form */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div className="container">

      <h1>ReactJS Assignment</h1>

      {/* Display Object */}
      <div className="card">
        <h2>Student Information</h2>
        <p>Name: {student.name}</p>
        <p>Course: {student.course}</p>
        <p>City: {student.city}</p>
      </div>

      {/* Display Array using map() */}
      <div className="card">
        <h2>Technologies</h2>

        <div className="list">
          {items.map((item, index) => (
            <ItemCard key={index} name={item} />
          ))}
        </div>

      </div>

      {/* Contact Form */}
      <div className="card">
        <h2>Contact Form</h2>

        <form>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

        </form>

      </div>

    </div>
  );
}

export default App;