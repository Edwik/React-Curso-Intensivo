import Constans from "../../utils/Constans";

export const TrendingAction = (payload) => {
  return {
    type: Constans.trendingAction,
    payload,
  };
};
