// external imports
import React, { useState, Link } from "react";
import { Routes, Route } from "react";


// internal imports
import "./assets/styles/App.css";
import ConstantHeader from "./layout/header/Header";
// import SearchBar from "./components/forms/Search";


function App() {
  return (
    <>

      {/* <Routes>
       <Route path="/" element={ <home/> } /> 

        <Route path="categories" element={<CategoryOverview />} />
      </Routes> */

  /* <SearchBar /> */}



      <header>
        <ConstantHeader
          pageTitle="THANK GOD IT'S VEGAN"
        />
        <div
        className="h-screen flex flex-col items-center bg-yellow-50"
        >

        <h1 className="text-brown text-center text-3xl mt-52"> ENTDECKE & BEWERTE<br></br>VEGANE PRODUKTE</h1>
    

        <p>

          <button type="button" className="text-white text-2xl mt-5 bg-brown rounded-lg px-8 py-1 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><p>Start</p></button>

        </p>
        </div>
      </header>

    </>
  );
}

export default App;
