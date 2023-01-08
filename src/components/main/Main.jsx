import React, { useState } from "react";
import axios from "axios";

import "./main.css";


import img1 from "../../images/work-steps.png";
import Card from "./Card";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  //   catch api from google book API
  const searchBook = (ev) => {
    if (ev.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +"&key=AIzaSyDOqvXQA-ltMbWd_A5AT6KH21yMEdcyt_0"+"&maxResults=40"
        )
        .then((result) => setBookData(result.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="row_one">
          <h1>
            Google Book API 
          </h1>
        </div>
        <div className="row_two">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your Book Name...."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
          
          </div>
          <img src={img1} alt="learn" />
        </div>
      </div>
      <div className="container">
        {

            <Card book={bookData} />
        }
      </div>
    </>
  );
};

export default Main;
