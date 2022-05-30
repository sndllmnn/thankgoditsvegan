// external imports
import React, { useState, Link } from "react";


function ProductBox({ children, ...props }) {
    return <>


        <div {...props}
            className="bg-beige text-dBrown h-1/3 mt-5">
    {children}

        </div>
    

    </>
}


export default ProductBox;