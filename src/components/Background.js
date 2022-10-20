import React, { useState } from "react";
import "./Background.css";
import background from "../assets/newer.jpg";
import ListPage from "../pages/ListPage";

// function Background() {


  // const [searchTerm, setSearchTerm] = useState('');

// const inputHandler = (event) => {
//   setSearchTerm(event.target.value)
  
  // data.filter((val) => {
  //   if (searchTerm == '') {
  //     console.log(val);
  //     return val;
  //   } else if (val.toolname.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     console.log(val);
  //     return val;
  //     }).map((item) => console.log(item))};
  //   // } else {
    //   console.log('no such value')
    // }
      
    

// 
function Background({toolsInfo}) {

const [searchTerm, setSearchTerm] = useState('');  

const handleSubmit = (e) => {
  e.preventDefault(e);
}

const searchInputHandler = (e) => {
  const searchTerm = e.target.value;
 setSearchTerm(searchTerm);
};

// const handleSearchChange = (e) => {
  // if(!e.target.value) {
  //   return setSearchResults([]);
  // }
  // else {
  //   const resultsArray = toolsInfo.filter(tool => tool.toolname.includes(e.target.value) || tool.details.includes(e.target.value));
  // setSearchResults(resultsArray);
  // }
  
// }
  
  return (
    <div className="hero">
      <img src={background} alt="backphoto" id="back-image" />
      <div className="content">
        <h1>Toolhub Records</h1>
        <p>
          This application makes it possible to edit toolhub records by way of a
          dedicated UI hence making editing faster and more enjoyable
        </p>

        <form className="search-area" onSubmit={handleSubmit}>
          <input type="text" placeholder="Search for a tool"  onChange={searchInputHandler}/>
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <ListPage toolsInfo={toolsInfo} searchTerm={searchTerm}/>
      </div>
    </div>
  );
}

export default Background;
