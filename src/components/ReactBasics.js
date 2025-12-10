import React, { useState } from "react";
import PropFile from "./PropFile";
const ReactBasics = () => {
  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [input, setInput] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();

  const userData = {
    age,
    city,
  };

  return (
    <div>
      {/* create 2 buttons and show each buttons on condition on inputbox */}
      <input
        placeholder={"Enter name"}
        style={{ padding: "10px", border: "1px solid black", margin: "10px" }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      {input == "Go" ? (
        <button
          style={{
            padding: "10px",
            border: "1px solid black",
            margin: "10px",
            backgroundColor: "green",
          }}
        >
          Button One
        </button>
      ) : (
        <button
          style={{
            padding: "10px",
            border: "1px solid black",
            margin: "10px",
            backgroundColor: "red",
          }}
        >
          Button Two
          <br></br>
        </button>
      )}
      <br></br>
      <input
        type="text"
        style={{ padding: "10px", border: "1px solid black", margin: "10px" }}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        type="text"
        style={{ padding: "10px", border: "1px solid black", margin: "10px" }}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <PropFile Propdata={userData} fullName = {input} />
    </div>
  );
};

export default ReactBasics;
