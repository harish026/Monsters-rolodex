import React from 'react';
import './searchbox.css';

export const Searchbox= ({placeholder,handlechange}) => (
    <input 
        className='search' 
        type='search' 
        placeholder={placeholder} 
        onChange={handlechange} />
    
);