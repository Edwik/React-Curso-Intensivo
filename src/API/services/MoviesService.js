import { Fetch } from "./../Fetch";
import Routes from "./../Routes";
import { jsonResponse } from "./../../tools/JsonResponse";

class MoviesService {
  async trending(payload) {
    return Fetch("get", Routes.trendingMovie, payload)
      .then((res) => {
        console.log(res);
        return jsonResponse(res.status, res.data);
      })
      .catch((err) => {
        return jsonResponse(500, err);
      });
  }

  async categories(payload) {
    return Fetch("get", Routes.categoriesMovie, payload)
      .then((res) => {
        console.log(res);
        return jsonResponse(res.status, res.data);
      })
      .catch((err) => {
        return jsonResponse(500, err);
      });
  }
}

export default new MoviesService();
