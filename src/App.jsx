// external imports
import React, { useState, Link } from "react";
import { Routes, Route } from "react-router-dom";




// internal imports
import "./assets/styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundLeaf from './assets/images/logo_background_leaf_thankGodItsVegan.png';
import BasicButton from "./components/buttons/BasicButton";
import BottomNav from './components/bottomTabs/BottomNav';
import Category from "./views/category/Category";
import CategoryBox from "./components/buttons/CategoryBox";
import CategoryOverview from './views/categoryOverview/CategoryOverview';
import ConstantHeader from "./layout/header/Header";
import Dashboard from "./views/dashboard/Dashboard";
import ProductPage from "./views/productPage/ProductPage";
import Userprofile from "./views/userProfile/UserProfile";

// import SearchBar from "./components/forms/Search";


function App() {
  return (
    <>
      <body>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="categories" element={<CategoryOverview />} />
          <Route path="categories/profile" element={<Userprofile />} />
          <Route path="profile" element={<Userprofile />} />
          <Route path="profile/categories" element={<CategoryOverview />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/profile" element={<Userprofile />} />
          <Route path="dashboard/categories" element={<CategoryOverview />} />
          <Route path="dashboard/categories/category" element={<Category />} />
          <Route path="dashboard/categories/category/productpage" element={<ProductPage />} />



        </Routes>
      </body>
    </>
  );
}

function StartScreen() {
  return (
    <>

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

          <BasicButton
            buttonText="START"
          />
        </div>

        <BottomNav />

      </div>
    </>
  );
}

export default App;
