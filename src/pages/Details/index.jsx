import React, { useEffect } from "react";
import styled from "styled-components";
import { Pane } from "evergreen-ui";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { MovieDetailsAction } from "./../../redux/actions/movies.actions";
import background from "./../../assets/images/wonder-woman-landscape.jpg";
import imageStar from "./../../assets/svg/star-solid.svg";
import {
  Navbar,
  Directed,
  Recommended,
  RelatedMovies,
  Starring,
  StyledHeading,
  StyledButton,
  Synopsis,
} from "./../../components";

const MainContainer = styled(Pane)`
  color: #fff;
  background-color: #000;
  background-image: ${(props) =>
    props.backgroundImage
      ? `linear-gradient(
      to left,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 1)
    ),
    url(${props.backgroundImage})`
      : `linear-gradient(
      to left,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 1)
    ),
    url(${background})`};
  background-size: cover;
`;

const BodyContainer = styled(Pane)`
  display: flex;
  flex-flow: column wrap;
  padding: 2rem;
`;

const TitleMovie = styled(StyledHeading)`
  display: inline-block;
`;

const ScoreContainer = styled(Pane)`
  margin-left: 0.5rem;
  font-weight: bold;
  display: inline-block;
  position: relative;
  bottom: 10px;
  line-height: 3rem;
`;

const CategoryContainer = styled.span`
  background-color: rgba(255, 255, 255, 0.28);
  padding: 0.2rem 0.3rem;
  border-radius: 0.2rem;
`;

const WraperSynopsisContainer = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
`;

function Details({ MOVIE_DETAILS_RESPONSE, MovieDetailsAction }) {
  let { id } = useParams();

  useEffect(() => {
    MovieDetailsAction(id);
  }, [MovieDetailsAction, id]);

  return (
    <>
      {MOVIE_DETAILS_RESPONSE.res && (
        <MainContainer
          backgroundImage={MOVIE_DETAILS_RESPONSE.res.backgroundImage}
        >
          <Navbar />
          <BodyContainer>
            <Pane>
              <TitleMovie
                headingtype="title"
                fontSize="3rem"
                fontWeight="bold"
                lineHeight="3rem"
                paddingvalue="0.6rem 0"
              >
                {MOVIE_DETAILS_RESPONSE.res.title}
              </TitleMovie>
              <ScoreContainer>
                <img src={imageStar} alt="Star icon" width="15px" />{" "}
                <span>{MOVIE_DETAILS_RESPONSE.res.score}</span>
              </ScoreContainer>
              <StyledHeading
                headingtype="info"
                fontSize="0.8rem"
                wordSpacing="0.3125rem"
                lineHeight="1.5rem"
              >
                {MOVIE_DETAILS_RESPONSE.res.genres.join(", ")} •{" "}
                {MOVIE_DETAILS_RESPONSE.res.duration} •{" "}
                {MOVIE_DETAILS_RESPONSE.res.year} •{" "}
                <CategoryContainer>
                  {MOVIE_DETAILS_RESPONSE.res.category}
                </CategoryContainer>
              </StyledHeading>
              <StyledButton btntype="primary" appearance="primary">
                Watch now
              </StyledButton>
              <StyledButton btntype="secondary" appearance="primary">
                More info
              </StyledButton>
            </Pane>
            <WraperSynopsisContainer>
              <Synopsis synopsis={MOVIE_DETAILS_RESPONSE.res.synopsis} />
              <Pane>
                <Directed directors={MOVIE_DETAILS_RESPONSE.res.directors} />
                <Recommended
                  recommended={MOVIE_DETAILS_RESPONSE.res.recommended}
                />
              </Pane>
            </WraperSynopsisContainer>
            <Starring starring={MOVIE_DETAILS_RESPONSE.res.starring} />
            <RelatedMovies
              relatedMovies={MOVIE_DETAILS_RESPONSE.res.relatedMovies}
            />
          </BodyContainer>
        </MainContainer>
      )}
    </>
  );
}

const mapStateToProps = (state, props) => ({
  MOVIE_DETAILS_RESPONSE: state.movieDetailsReducers.MovieDetailsResponse,
});

export default connect(mapStateToProps, { MovieDetailsAction })(Details);
