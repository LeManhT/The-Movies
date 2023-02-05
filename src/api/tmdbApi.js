import axiosClient from "./axiosClient";
import apiConfig from "./apiConfig";
import queryString from "query-string";

const tmdbApi = {
  getTrending: (params) => {
    const url = `trending/all/${params.time_window}?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },

  getPopular: (params) => {
    const url = `${params.category}/popular?api_key=${apiConfig.apiKey}&page=${params.page}`;
    return axiosClient.get(url);
  },

  getMovieDetail: (params) => {
    const url = `movie/${params.movie_id}?api_key=${apiConfig.apiKey}&append_to_response=videos`;
    return axiosClient.get(url);
  },

  getPersonDetail: (params) => {
    const url = `person/${params.person_id}?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },

  getMoviesSearch: (params) => {
    const url = `search/movie?api_key=${
      apiConfig.apiKey
    }&${queryString.stringify(params)}`;
    return axiosClient.get(url);
  },

  getPeopleSearch: (params) => {
    const url = `search/person?api_key=${
      apiConfig.apiKey
    }&${queryString.stringify(params)}`;
    return axiosClient.get(url);
  },

  getMovieCredits: (params) => {
    const url = `movie/${params.movie_id}/credits?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },
};

export default tmdbApi;
