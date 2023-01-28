import { createUseStyles } from "react-jss";
import {useState, useEffect} from "react";

const Library = () => {
    const topics = [];

    for (let key in localStorage) {
        topics.push(localStorage.getItem(key));
    }

    useEffect(() => { 
        //Remove the page header from the library screen
        const pageHeader = document.getElementById('header');
        if (pageHeader) {
            pageHeader.remove();
        }
    }, []);


  return (
    <div>
        {topics}
    </div>
  );
};

export default Library;
