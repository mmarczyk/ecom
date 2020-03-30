import React from "react";
import Header from "./view/header/Header.js";
import Content from "./view/content/Content.js";
import Footer from "./view/footer/Footer.js";
import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
