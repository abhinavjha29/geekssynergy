import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../store/DataContext";
import ShowMovieList from "../components/ShowMovieList";

const HomePage = () => {
  const { fetchMovieList } = useContext(DataContext);
  const [movieData, setMovieData] = useState();
  // const response = fetchMovieList();
  // console.log(response);

  return <ShowMovieList />;
  // return <h1>hello</h1>;
};

export default HomePage;
