import React, { useEffect } from "react";
import { Pane } from "evergreen-ui";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { TrendingAction } from "./../../redux/actions/movies.actions";
import background from "./../../assets/images/wonder-woman-portrait.jpg";
import {
  Navbar,
  MovieCategories,
  StyledButton,
  StyledHeading,
} from "./../../components";

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
    <>
      {TRENDING_RESPONSE.res && (
        <MainContainer>
          <Navbar />
          <BodyContainer>
            <TrendingMovie>
              <StyledHeading
                headingtype="subtitle"
                fontSize="1rem"
                letterSpacing="0.125rem"
              >
                Trending
              </StyledHeading>
              <StyledHeading
                headingtype="title"
                fontSize="3rem"
                fontWeight="bold"
                lineHeight="3rem"
                paddingvalue="0.6rem 0"
                textShadow="rgb(0,0,0) 0px 0px 40px"
              >
                {TRENDING_RESPONSE.res.title}
              </StyledHeading>
              <StyledHeading
                headingtype="info"
                fontSize="0.8rem"
                wordSpacing="0.3125rem"
                lineHeight="1.5rem"
              >
                {TRENDING_RESPONSE.res.genres.join(", ")} •{" "}
                {TRENDING_RESPONSE.res.duration}
              </StyledHeading>
              <StyledButton
                btntype="primary"
                appearance="primary"
                is={Link}
                to="#"
              >
                Watch now
              </StyledButton>
              <StyledButton
                btntype="secondary"
                appearance="primary"
                is={Link}
                to={`/movie/${TRENDING_RESPONSE.res.id}`}
              >
                More info
              </StyledButton>
            </TrendingMovie>
            <CategoriesContainer>
              <MovieCategories />
            </CategoriesContainer>
          </BodyContainer>
        </MainContainer>
      )}
    </>
  );
}

const mapStateToProps = (state, props) => ({
  TRENDING_RESPONSE: state.moviesReducers.TrendingResponse,
});

export default connect(mapStateToProps, { TrendingAction })(Home);
