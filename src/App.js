import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Node from "./components/Node";
import About from "./components/About";
import TermsAndCond from "./components/TermsAndCond";
import ProductForm from "./components/ProductForm";
function App() {

  return (
    <>
      {/* Page 1*/}
      <div className="w-210 h-297 p-3">
        <div className="flex flex-col items-center space-y-4">
          <Header/>
          <Node/>
          <About />
          <TermsAndCond />
          <ProductForm/>

        </div>
      </div>
      <br />

    </>
  );
}

export default App;
