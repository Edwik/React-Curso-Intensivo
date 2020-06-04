import Constans from "./../../utils/Constans";

const categoriesState = {
  CategoriesResponse: {},
};

export default (state = categoriesState, action) => {
  switch (action.type) {
    case Constans.SuccessFetchCategories:
      return { ...state, CategoriesResponse: action.payload };
    case Constans.FailFetchCategories:
      return { ...state, CategoriesResponse: action.payload };
    default:
      return state;
  }
};
