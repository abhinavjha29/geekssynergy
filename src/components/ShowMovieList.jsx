import React, { useContext, useEffect, useState } from "react";
import SingleMovieCard from "./SingleMovieCard";
import { DataContext } from "../store/DataContext";

const ShowMovieList = () => {
  const [isloading, setIsloading] = useState(false);
  const { fetchMovieList } = useContext(DataContext);
  const [movieList, setMovieList] = useState([]);
  const getMovieList = async () => {
    setIsloading(true);
    try {
      const response = await fetchMovieList();
      console.log(response);
      setMovieList(response);
      setIsloading(false);
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return isloading ? (
    <h1>...loading</h1>
  ) : (
    <div className="showMovie">
      {movieList.map((movie) => (
        <SingleMovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default ShowMovieList;
