import React from "react";
import "./styles.scss";

const handleSubmit = (event) => {
  event.preventDefault();
  const URL = "http://www.omdbapi.com/?apikey=5c24385e";
  const title = event.target[0].value;
  fetch(URL + `&t=${title}`)
    .then((response) => response.json())
    .then((movie) => console.log("Movie:", movie));
};

function SearchButton() {
  return (
    <>
      <div>
        <form id="search-movie" onSubmit={handleSubmit}>
          <input type="search" placeholder="Search movie" />
        </form>
      </div>
    </>
  );
}

export default SearchButton;
