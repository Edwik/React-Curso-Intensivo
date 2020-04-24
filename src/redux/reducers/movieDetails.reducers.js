import Constans from "../../utils/Constans";

const movieDetailsState = {
  MovieDetailsResponse: {},
};

export default (state = movieDetailsState, action) => {
  switch (action.type) {
    case Constans.SuccessFetchMovieDetails:
      return { ...state, MovieDetailsResponse: action.payload };
    case Constans.FailFetchMovieDetails:
      return { ...state, MovieDetailsResponse: action.payload };
    default:
      return state;
  }
};
