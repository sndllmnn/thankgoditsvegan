// external imports
import React, { useState, Link } from "react";



// internal imports
import "./assets/styles/App.css";
import ConstantHeader from "./layout/header/Header";
import BackgroundLeaf from './assets/images/logo_background_leaf_thankGodItsVegan.png';
import BottomNav from './components/bottomTabs/BottomNav';
// import SearchBar from "./components/forms/Search";



function App() {
  return (
    <>

      {/* <Routes>
       <Route path="/" element={ <home/> } /> 

        <Route path="categories" element={<CategoryOverview />} />
      </Routes> */

  /* <SearchBar /> */}


      <div
        style={{
          backgroundImage: "url(" + BackgroundLeaf + ")"
        }}

      >
        <header>
          <ConstantHeader
            pageTitle="THANK GOD IT'S VEGAN"
          />
        </header>
        <div
          className="h-screen flex flex-col items-center bg-white"
        >

          <h1 className="text-brown text-center text-3xl mt-52"> ENTDECKE & BEWERTE<br></br>VEGANE PRODUKTE</h1>


          <p>

            <button type="button" className="text-white text-2xl tracking-widest mt-10 bg-brown rounded-lg px-12 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><p>START</p></button>

          </p>
          <BottomNav />
        </div>


      </div>

    </>
  );
}

export default App;
