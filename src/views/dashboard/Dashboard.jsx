import React, { useState, Link } from "react";
import { Routes, Route } from "react-router-dom";

//internal imports
import BasicButton from "../../components/buttons/BasicButton";
import BottomNav from '../../components/bottomTabs/BottomNav';
import CategoryBox from '../../components/buttons/CategoryBox';
import ConstantHeader from '../../layout/header/Header';
import SearchBar from "../../components/forms/Search";



function CategoryOverview() {

    return (
        <>
      
            <ConstantHeader
                pageTitle="THANK GOD IT'S VEGAN"
            />
              <SearchBar />
            <div
            className="flex flex-col"
            >
            
                <BasicButton
                    buttonText="NEUE PRODUKTE"
                />
                <BasicButton
                    buttonText="KATEGORIEN"
                />
                <BasicButton
                    buttonText="DEIN PROFIL"
                />
            </div>






            <BottomNav />
        </>
    );
}

export default CategoryOverview;