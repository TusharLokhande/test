import React from "react";
import Header from "./Component/Header/Header";
import Component1 from "./Pages/Component1";
import Component2 from "./Pages/Component2";
import Component3 from "./Pages/Component3";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Component1 />} />
        <Route path="/1" element={<Component1 />} />
        <Route path="/2" element={<Component2 />} />
        <Route path="/3" element={<Component3 />} />
      </Routes>
    </div>
  );
};

export default App;
