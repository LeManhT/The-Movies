import axiosClient from "./axiosClient";
import apiConfig from "./apiConfig";
import queryString from "query-string";

const tmdbApi = {
  getTrending: (params) => {
    const url = `trending/all/${params.time_window}?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },

  getPopularTV: (params) => {
    const url = `tv/popular?api_key=${apiConfig.apiKey}&${queryString.stringify(params)}`;
    return axiosClient.get(url);
  },

  getPopularMovie: (params) => {
    const url = `movie/popular?api_key=${apiConfig.apiKey}&${queryString.stringify(params)}`;
    return axiosClient.get(url);
  },

  getMovieDetail: (params) => {
    const url = `movie/${params.movie_id}?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },

  getPersonDetail: (params) => {
    const url = `person/${params.person_id}?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },
};

export default tmdbApi;
