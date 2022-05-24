const BasicButton = (props) => {
    return <>

        <button type="button" className="text-white mt-5 mx-auto text-2xl tracking-widest bg-brown rounded-lg px-12 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">


            {props.buttonText}


        </button>

    </>

}

export default BasicButton;