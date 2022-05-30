import React, { useState, Link } from "react";
import { Routes, Route } from "react-router-dom";

//internal imports
import BottomNav from '../../components/bottomTabs/BottomNav';
import CategoryBox from '../../components/buttons/CategoryBox';
import ConstantHeader from '../../layout/header/Header';
import ProductBox from "../../components/buttons/ProductBox";




function CategoryOverview() {

    return (
        <>
            <ConstantHeader
                pageTitle="KATEGORIE-NAME"
            />

            <div
                className="flex-wrap justify-between text-center">
            
                <ProductBox> Produkt 1</ProductBox>
                <ProductBox> Produkt 2</ProductBox>
                <ProductBox> Produkt 3 </ProductBox>


            </div>






            <BottomNav />
        </>
    );
}

export default CategoryOverview;