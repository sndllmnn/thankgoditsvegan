import React from 'react';


const CommentForm = () => {
    return <>
        <form>
            <div>
                <label>Deine Meinung?</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Wo hast du das Produkt gekauft?</label>
                <input type="text"></input>

            </div>
            <div>
                <label>Wie teuer war das Produkt?</label>
                <input type="number" min="0.01" step="0.01"></input>

            </div>

            <div>
                <label>Datum</label>
                <input type="date" min="2022-01-01" max="2022-12-31"></input>

                <div>
                    <button>Abschicken!</button>
                </div>
            </div>

        </form>


    </>
};

export default CommentForm;