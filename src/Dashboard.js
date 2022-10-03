import React from "react";
import useAuth from "./useAuth";
import { Container, Form } from "react-bootstrap";

export default function Dashboard({ code }) {
  // console.log("In dashboard");
  // console.log("code " + code);
  const accessToken = useAuth(code);

  function sayHello() {
    alert("You clicked me!");
  }

  return (
    <Container
      className="d-flex flex-column py-2 my-2"
      style={{ height: "100vh" }}
    >
      <h3>Pick a category:</h3>
      <button onClick={sayHello}>All time</button>
      <button onClick={sayHello}>Last Year</button>
      <button onClick={sayHello}>6 months</button>
      <button onClick={sayHello}>1 month</button>
      <button onClick={sayHello}>7 days</button>
    </Container>
  );
}
