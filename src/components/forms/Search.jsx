// external imports
import React, { useState, Link } from "react";
import { Routes, Route } from "react-router-dom";

// internal imports
import BasicButton from "../buttons/BasicButton";

function SearchBar() {
    return (
<form>
            <div className="relative">
              <div>
              </div>
              <input type="search" className="block p-2 mt-5 mb-5 pl-10 w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-dBrown focus:border-dBrown" placeholder="Suche nach Produkten..." required=""/>
              <button type ="submit" className="text-white absolute right-2.5 bottom-2.5 bg-brown hover:bg-dBrown focus:ring-4 focus:outline-none focus:ring-white rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Suchen</button>
            </div>
          </form>
    );
}

export default SearchBar;


