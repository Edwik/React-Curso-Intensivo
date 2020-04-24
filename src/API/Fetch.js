// const DEFAULT_URL = 'https://'
import Routes from "./Routes";
import responses from "./responses/_export";

const defaultHeaders = new Headers();

export const Fetch = async (method, URL, data, extraHeaders) => {
  if (!defaultHeaders.has("content-type")) {
    defaultHeaders.append("content-type", "application/json");
  }

  defaultHeaders.append("access-control-allow-origin", "*");
  defaultHeaders.append("Access-Control-Allow-Methods", "*");

  if (extraHeaders) {
    extraHeaders.forEach((item) => {
      defaultHeaders.append(item.key, item.value);
    });
  }

  const requestInit = {
    method: method,
    headers: new Headers(defaultHeaders),
  };

  if (data) {
    requestInit.body = JSON.stringify(data);
  }
  switch (URL) {
    case Routes.login:
      return responses.loginResponse;
    case Routes.trendingMovie:
      return responses.trendingResponse;
    case Routes.categoriesMovie:
      return responses.categoriesResponse;
    case Routes.detailsMovie:
      return getMovieDetails(URL, data);
    default:
      return { status: 404, msg: "Route not found" };
  }

  function getMovieDetails(URL, data) {
    let endpoint = `${URL}/${data}`;
    switch (endpoint) {
      case Routes.movieAntMan:
        return responses.movieAntManResponse;
      case Routes.movieAvengers:
        return responses.movieAvengersResponse;
      case Routes.movieDeadpool:
        return responses.movieDeadpoolResponse;
      case Routes.movieIronMan:
        return responses.movieIronManResponse;
      case Routes.movieThor:
        return responses.movieThorResponse;
      case Routes.movieWonderWoman:
        return responses.movieWonderWomanResponse;
      default:
        return { status: 404, msg: `${data} route not found` };
    }
  }

  // return await fetch(
  //   DEFAULT_URL + URL,
  //   requestInit
  // ).then(res => res ? res.json() : {})
};
