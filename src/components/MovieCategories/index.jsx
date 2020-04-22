import React, { useEffect } from "react";
import styled from "styled-components";
import { Heading } from "evergreen-ui";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CategoriesAction } from "./../../redux/actions/movies.actions";
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
  @media (min-width: 992px) {
    width: 30%;
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

function MovieCategories({ CATEGORIES_RESPONSE, CategoriesAction }) {
  useEffect(() => {
    CategoriesAction();
  }, [CategoriesAction]);

  return (
    <>
      {CATEGORIES_RESPONSE.res &&
        CATEGORIES_RESPONSE.res.map((category) => (
          <MovieCategory key={category.id} to="/details">
            <ImageResponsive src={background} alt="Category Movie" />
            <CategoryName>{category.title}</CategoryName>
          </MovieCategory>
        ))}
    </>
  );
}

const mapStateToProps = (state, props) => ({
  CATEGORIES_RESPONSE: state.categoriesReducers.CategoriesResponse,
});

export default connect(mapStateToProps, { CategoriesAction })(MovieCategories);
