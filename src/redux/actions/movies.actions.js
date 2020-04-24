import Constans from "../../utils/Constans";

export const TrendingAction = (payload) => {
  return {
    type: Constans.TrendingAction,
    payload,
  };
};

export const SuccessFetchTrending = (payload) => {
  return {
    type: Constans.SuccessFetchTrending,
    payload,
  };
};

export const FailFetchTrending = (payload) => {
  return {
    type: Constans.FailFetchTrending,
    payload,
  };
};

export const CategoriesAction = (payload) => {
  return {
    type: Constans.CategoriesAction,
    payload,
  };
};

export const SuccessFetchCategories = (payload) => {
  return {
    type: Constans.SuccessFetchCategories,
    payload,
  };
};

export const FailFetchCategories = (payload) => {
  return {
    type: Constans.FailFetchCategories,
    payload,
  };
};

export const MovieDetailsAction = (payload) => {
  return {
    type: Constans.MovieDetailsAction,
    payload,
  };
};

export const SuccessFetchMovieDetails = (payload) => {
  return {
    type: Constans.SuccessFetchMovieDetails,
    payload,
  };
};

export const FailFetchMovieDetails = (payload) => {
  return {
    type: Constans.FailFetchMovieDetails,
    payload,
  };
};
