import React, { useEffect, useState } from "react";
import tmdbApi from "../../../api/tmdbApi";
import { MENU_SEARCH } from "../../../constants/constants";
import useFetch from "../../../hooks/useFetch";
import Menu from "../../ui/menu/Menu";
import SearchItemResult from "../../ui/searchItemResult/SearchItemResult";
import {
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import "./search.scss";
import queryString from "query-string";
import Pagination from "./pagination/Pagination";
import SearchInput from "./searchinput/SearchInput";
import Loading from "../../ui/loading/Loading";

const Search = () => {
  const { category } = useParams();
  console.log(category);
  const navigate = useNavigate();
  const { search } = useLocation();
  const [searchParam, setSearchParam] = useSearchParams(search);
  const [itemSearch, setItemSearch] = useState(category); // truyền tên của category để lấy ra list khi click
  const [pageCount, setpageCount] = useState(queryString.parse(search).page); //
  const [querySearch, setQuerySearch] = useState(
    queryString.parse(search).query
  );
  const [searchList, setSearchList] = useState({});
  const [totalPagesResult, setTotalPagesResult] = useState([]);
  // goi 1 api
  const {
    data: searchListApi, // du lieu api tra ve
    error: searchListError,
    isLoading,
    fetch: getListSearch, // goi api
  } = useFetch(tmdbApi.getSearch);
  useEffect(() => {
    itemSearch
      ? getListSearch({
        category: category,
        page: pageCount,
        query: querySearch,
      })
      : setSearchList({});
  }, [itemSearch, pageCount, searchParam, category]);

  useEffect(() => {
    setSearchList(searchListApi);
  }, [searchListApi]);
  const callApiItemCategory = (category) => {
    return tmdbApi.getSearch({
      category: category,
      page: pageCount,
      query: querySearch,
    });
  };
  useEffect(() => {
    // async xu ly bat dong bo => thuc hien lan luot theo cac await tu tren xuong duoi
    const getTotalPagesSearch = async () => {
      try {
        const data = await Promise.all([
          callApiItemCategory("movie"),
          callApiItemCategory("tv"),
          callApiItemCategory("person"),
          callApiItemCategory("multi"),
          callApiItemCategory("company"),
          callApiItemCategory("keyword"),
          callApiItemCategory("collection"),
        ]);
        const totalResults = await data.map((item) => item.total_results);
        await setTotalPagesResult(totalResults);
      } catch (error) {
        console.log(error);
      }
    };
    getTotalPagesSearch();
  }, [querySearch]);
  const handlePageClick = (data) => {
    setpageCount(data.selected + 1);
    setSearchParam({
      query: queryString.parse(search).query,
      page: data.selected + 1,
    });
  };
  const handleOnchangeSearch = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setQuerySearch(e.target.value);
      setpageCount(1);
      setSearchParam({ query: e.target.value, page: pageCount });
    }
  };
  // chuyển trang theo tên của item Menu
  const handleItemSearch = (item) => {
    let category = "movie";
    setItemSearch(item);
    for (let index = 0; index < MENU_SEARCH.length; index++) {
      if (item === MENU_SEARCH[index].content) {
        category = MENU_SEARCH[index].api;
      }
    }
    navigate(`/search/${category}?${searchParam}`);
  };
  const handleNavigatePage = (id) => {
    navigate(`/${category}/${id}`);
  };

  return (
    <div className="search">
      <SearchInput onClick={handleOnchangeSearch} />
      <div className="search__container">
        <div className="container_results">
          <div className="search-menu">
            <Menu
              menuContent={MENU_SEARCH}
              onClick={handleItemSearch}
              itemSearchActive={category}
              totalResults={totalPagesResult}
            />
          </div>
          <div className="search-tip">
            <p>
              <span className="icon">
                <i className="fa-solid fa-info"></i>
              </span>
              Tip: You can use the 'y:' filter to narrow your results by year.
              Example: 'star wars y:1977'.
            </p>
          </div>
        </div>
        <div className="container_list">
          {isLoading ? (
            <Loading heightBlock="100%" />
          ) : searchListError ? (
            <div>Lỗi</div>
          ) : searchList?.total_results ? (
            searchList.results?.map((item) => {
              return (
                <div
                  className="item"
                  key={item.id}
                  onClick={() => handleNavigatePage(item.id)}
                >
                  <SearchItemResult
                    imgSrc={
                      item.poster_path
                        ? `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.poster_path}`
                        : "data:image/png;base64,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"
                    }
                    title={item.title || item.name}
                    releaseDate={item.release_date || item.known_for_department}
                    overview={item.overview}
                  />
                </div>
              );
            })
          ) : (
            <p>There are no movies that matched your query</p>
          )}

          {searchList?.total_results ? (
            <Pagination
              totalPages={searchListApi?.total_pages}
              selectedPage={queryString.parse(search).page - 1}
              onClick={handlePageClick}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Search;
