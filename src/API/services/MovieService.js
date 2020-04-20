import { Fetch } from "./../Fetch";
import Routes from "./../Routes";
import { jsonResponse } from "./../../tools/JsonResponse";

class MovieService {
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
}

export default new MovieService();
