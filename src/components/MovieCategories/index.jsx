import React, { useState } from "react";
import styled from "styled-components";
import { Card, Heading } from "evergreen-ui";
import { Link } from "react-router-dom";
import background from "./../../assets/images/category-image.jpg";

const MovieCategory = styled(Link)`
  margin: 0.65rem;
  width: 15.625rem;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.3rem;
  text-decoration: none;
`;
const CategoryName = styled(Heading)`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  padding: 6rem 0.5rem 0.5rem 0.5rem;
`;

function MovieCategories() {
  const [categories, setCategories] = useState([
    { id: 1, title: "Most popular" },
    { id: 2, title: "New releases" },
    { id: 3, title: "Friend recommendations" },
    { id: 4, title: "Bases on actor/actress" },
    { id: 5, title: "Charts & Trends" },
    { id: 6, title: "Browse movies" },
    { id: 7, title: "My favorities" },
    { id: 8, title: "History" },
  ]);
  return (
    <>
      {categories.map((section) => (
        <MovieCategory key={section.id} to="/details">
          <CategoryName>{section.title}</CategoryName>
        </MovieCategory>
      ))}
    </>
  );
}

export default MovieCategories;
