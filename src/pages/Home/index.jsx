import React, { useEffect } from "react";
import { Pane } from "evergreen-ui";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { TrendingAction } from "./../../redux/actions/movies.actions";
import Navbar from "./../../components/Navbar";
import MovieCategories from "./../../components/MovieCategories";
import StyledHeading from "./../../components/StyledHeading";
import background from "./../../assets/images/wonder-woman-portrait.jpg";
import StyledButton from "./../../components/Button";

const MainContainer = styled(Pane)`
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.3) 50%
    ),
    url(${background});
  background-repeat: no-repeat;
  background-size: 100vh;
`;

const BodyContainer = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
`;

const TrendingMovie = styled(Pane)`
  width: 100%;
  padding-left: 3rem;
  @media (min-width: 992px) {
    width: 40%;
  }
`;

const CategoriesContainer = styled(Pane)`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  @media (min-width: 992px) {
    width: 60%;
  }
`;

function Home({ TRENDING_RESPONSE, TrendingAction }) {
  useEffect(() => {
    TrendingAction();
  }, [TrendingAction]);

  return (
    <MainContainer>
      <Navbar />
      <BodyContainer>
        <TrendingMovie>
          <StyledHeading headingType="subtitle" fontSize="1rem">
            Trending
          </StyledHeading>
          <StyledHeading headingType="title" fontSize="3rem">
            {TRENDING_RESPONSE.res && TRENDING_RESPONSE.res.title}
          </StyledHeading>
          <StyledHeading headingType="info" fontSize="0.8rem">
            {TRENDING_RESPONSE.res && TRENDING_RESPONSE.res.genres.join(", ")} *{" "}
            {TRENDING_RESPONSE.res && TRENDING_RESPONSE.res.duration}
          </StyledHeading>
          <StyledButton
            btnType="primary"
            appearance="primary"
            is={Link}
            to="/details"
          >
            Watch now
          </StyledButton>
          <StyledButton
            btnType="secondary"
            appearance="primary"
            is={Link}
            to="/details"
          >
            More info
          </StyledButton>
        </TrendingMovie>
        <CategoriesContainer>
          <MovieCategories />
        </CategoriesContainer>
      </BodyContainer>
    </MainContainer>
  );
}

const mapStateToProps = (state, props) => ({
  TRENDING_RESPONSE: state.moviesReducers.TrendingResponse,
});

export default connect(mapStateToProps, { TrendingAction })(Home);
