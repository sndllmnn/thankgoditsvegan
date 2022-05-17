import React, { useState, Link } from "react";
import { Routes, Route } from "react";


import "./App.css";
import CategoryOverview from "./categoriePage/CategoryOverview";

function App() {
  return (
    <>

        {/* <Routes>
       <Route path="/" element={ <home/> } /> 

        <Route path="categories" element={<CategoryOverview />} />
      </Routes> */}


      <div className="App">
        <header className="App-header">
          <p> THANK GOD IT'S VEGAN </p>
          <h1>ENTDECKE & BEWERTE VEGANE PRODUKTE</h1>
         
            <p>
              <button
                type="button">
                START
              </button>

            </p>
          

        </header>
      </div>
    </>
  );
}

export default App;
