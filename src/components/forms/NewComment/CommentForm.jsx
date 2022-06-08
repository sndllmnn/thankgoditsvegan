//external imports
import React, { useState, Link } from "react";

//internal imports
import BasicButton from '../../buttons/BasicButton';


const CommentForm = () => {
    /* const [enteredComment, setEnteredComment] = useState('');
    const [enteredProductShopLocation, setEnteredProductShopLocation] = useState('');
    const [enteredProductPrice, setEnteredProductPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState(''); */

    const [userInput, setUserInput] = useState({
        enteredComment: '',
        enteredProductShopLocation: '',
        enteredProductPrice: '',
        enteredDate: ''
    });
    //functions shall be executed when opinion, product shop location, product price
    // or date get changed, that's why they're called 'handler'

    const CommentHandler = (event) => {
        // setEnteredComment(event.target.value)
        setUserInput({
            ...userInput,
            enteredComment: event.target.value
        })

    };
    const ProductShopLocationHandler = (event) => {
        // setEnteredProductShopLocation(event.target.value)
        setUserInput({
            ...userInput,
            enteredProductShopLocation: event.target.value
        })
    };

    const ProductPriceHandler = (event) => {
        //setEnteredProductPrice(event.target.value)
        setUserInput({
            ...userInput,
            enteredProductPrice: event.target.value
        })
    };

    const DateHandler = (event) => {
        //setEnteredDate(event.target.value)
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    };

    return <>
        <form
            className="ml-3 mt-3">
            <div>
                <label>Deine Meinung?</label>
                <br />
                <input type="text" onChange={CommentHandler} ></input>
            </div>
            <div>
                <label>Wo hast du das Produkt gekauft?</label>
                <input type="text" onChange={ProductShopLocationHandler}></input>

            </div>
            <div>
                <label>Wie teuer war das Produkt?</label>
                <input type="number" onChange={ProductPriceHandler} min="0.01" step="0.01"></input>

            </div>
            <div>
                <label>Datum</label>
                <br />
                <input type="date" onChange={DateHandler} min="2022-01-01" max="2022-12-31"></input>
            </div>
            <div>
                <BasicButton
                    buttonText="Abschicken!"
                />
            </div>

        </form>


    </>
};

export default CommentForm;