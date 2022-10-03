import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

// const code = new URLSearchParams(window.location.search).get("code");
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  console.log("In App");
  // console.log(code);
  return code ? <Dashboard code={code} /> : <Login />;
  // return <Dashboard code={code} />;
  // return <Login />;
}

export default App;
