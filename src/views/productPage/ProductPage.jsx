import React, { useState, Link } from "react";
import Card from "react-bootstrap/Card";
import { Routes, Route } from "react-router-dom";

//internal imports
import BottomNav from '../../components/bottomTabs/BottomNav';
import CategoryBox from '../../components/buttons/CategoryBox';
import ConstantHeader from '../../layout/header/Header';
import ProductBox from "../../components/buttons/ProductBox";
import products from "../../products.json";



function ProductDetails() {

    return (
        <>
            <ConstantHeader
                pageTitle={products[0].title}
            />

            <Card className="mx-1.5">
                <Card.Body>
                  <Card.Img variant="top" src={products[0].img} />
                    <Card.Title
                    className="capitalize"
                    >{products[0].title}</Card.Title>
                    <Card.Text>
                        {products[0].description}
                    </Card.Text>
                    <Card.Link href="#">Mehr Infos</Card.Link>
                </Card.Body>
            </Card>
            <BottomNav />





        </>
    );
}

export default ProductDetails;