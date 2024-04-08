import React, { useContext, useEffect, useState } from "react";
import SingleMovieCard from "./SingleMovieCard";
import { DataContext } from "../store/DataContext";

const ShowMovieList = () => {
  const { fetchMovieList } = useContext(DataContext);
  const [movieList, setMovieList] = useState([]);
  const getMovieList = async () => {
    const response = await fetchMovieList();
    console.log(response);
    setMovieList(response);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div>
      {movieList.map((movie) => (
        <SingleMovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default ShowMovieList;
