import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Typography } from "./components/Typography";

function App() {
  return (
    <div className="App">
      <Typography variant="h1">test ici</Typography>
      <Typography variant="h2">test ici</Typography>
      <Typography variant="h3">test ici</Typography>
      <Typography variant="h4">test ici</Typography>
      <Typography variant="h5">test ici</Typography>
      <Typography variant="h6">test ici</Typography>
      <Typography component="div" variant="h6">
        test ici et la
      </Typography>
    </div>
  );
}

export default App;
