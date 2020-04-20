import Constans from "./../../utils/Constans";

const trendingState = {
  TrendingResponse: {},
};

export default (state = trendingState, action) => {
  switch (action.type) {
    case Constans.SuccessFetchTrending:
      return { ...state, TrendingResponse: action.payload };
    case Constans.FailFetchTrending:
      return { ...state, TrendingResponse: action.payload };
    default:
      return state;
  }
};
