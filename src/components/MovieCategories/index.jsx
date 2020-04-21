import React, { useState } from "react";
import styled from "styled-components";
import { Heading } from "evergreen-ui";
import { Link } from "react-router-dom";
import background from "./../../assets/images/category-image.jpg";

const MovieCategory = styled(Link)`
  text-decoration: none;
  position: relative;
  width: 100%;
  margin: 1rem 3rem;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 576px) {
    width: 15.625rem;
    margin: 0.5rem 0.65rem;
  }
`;

const CategoryName = styled(Heading)`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
`;

const ImageResponsive = styled.img`
  width: 100%;
  border-radius: 0.3rem;
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
          <ImageResponsive src={background} alt="Category Movie" />
          <CategoryName>{section.title}</CategoryName>
        </MovieCategory>
      ))}
    </>
  );
}

export default MovieCategories;
