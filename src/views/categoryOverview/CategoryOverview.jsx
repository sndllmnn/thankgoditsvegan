import React, { useState, Link } from "react";
import { Routes, Route } from "react-router-dom";

//internal imports
import BottomNav from '../../components/bottomTabs/BottomNav';
import CategoryBox from '../../components/buttons/CategoryBox';
import ConstantHeader from '../../layout/header/Header';



function CategoryOverview() {

    return (
        <>
            <ConstantHeader
                pageTitle="KATEGORIEN"
            />

            <div
                className="flex-wrap justify-between text-center"
            >
                <CategoryBox> Käse </CategoryBox>
                <CategoryBox> Fleisch </CategoryBox>
                <CategoryBox> Milch </CategoryBox>
                <CategoryBox> Grundzutaten </CategoryBox>
                <CategoryBox> Fertiggerichte </CategoryBox>
                <CategoryBox> Eis </CategoryBox>
                <CategoryBox> Kekse </CategoryBox>

            </div>






            <BottomNav />
        </>
    );
}

export default CategoryOverview;