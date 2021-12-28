import React from "react";
import "./search-box.style.css";

export const SearchBox = ({placeholder, handleChange}) =>{
    return (
        <input 
            type="text" 
            className="search-box" 
            placeholder={placeholder} 
            onChange={handleChange}
        />
    );
}