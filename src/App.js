import React from "react";
import "./Styles/App.css";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
const App = () => {
  let Balance = 100;
  return (
    <>
      <Header value={Balance} />
      <Counter />
    </>
  );
};

export default App;
