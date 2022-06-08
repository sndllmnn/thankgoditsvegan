import React from 'react'

//internal imports
import BasicButton from '../../components/buttons/BasicButton';
import BottomNav from '../../components/bottomTabs/BottomNav';
import ConstantHeader from '../../layout/header/Header';


function Userprofile() {

  return (
    <>
      <ConstantHeader
        pageTitle="PROFIL"
      />
      <div className="mx-auto mt-5
      relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg className="absolute w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
      </div>

<div className="mx-2 mb-10 w-80"
>
<label for="file_input">Foto hochladen</label>

<input class="block w-full   text-dBrown bg-beige rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
<p class="mt-1   text-gray-500 dark:text-gray-300">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>




      <form
      className="mx-2"
      >
      <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full   text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_first_name" class="peer-focus:font-medium absolute   text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NAME</label>
          </div>
        <div class="relative z-0 w-full mb-6 group">
          <input type="email" name="floating_email" class="block py-2.5 px-0 w-full   text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
          <label for="floating_email" class="peer-focus:font-medium absolute   text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-MAIL</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full   text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
          <label for="floating_password" class="peer-focus:font-medium absolute   text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PASSWORT</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full   text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
          <label for="floating_repeat_password" class="peer-focus:font-medium absolute   text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PASSWORT WIEDERHOLEN</label>
        </div>
        <div class="grid xl:grid-cols-2 xl:gap-6">
          

        </div>
        <div class="grid xl:grid-cols-2 xl:gap-6">


        </div>
      
      </form>
      <div className="flex mx-auto"
      >
        <BasicButton
        buttonText="SPEICHERN" />

        </div>
        <BottomNav />




      <BottomNav />

    </>
  );
}

export default Userprofile;