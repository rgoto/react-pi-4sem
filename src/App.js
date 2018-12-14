import React from "react";
import "./App.css";
import ModalSearch from "./components/ModalSearch";
import "antd/dist/antd.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App" style={{ padding: 50}}>
        <ModalSearch/>
        <Card/>
    </div>
  );
}

export default App;
