import React, { useState } from "react";
import { DataContext } from "./DataContext";
import axios from "axios";

const DataProvider = ({ children }) => {
  const userSignup = (userSignupData) => {
    const stringifiedData = JSON.stringify(userSignupData);
    localStorage.setItem(userSignupData.email, stringifiedData);
  };

  const userLogin = (userLoginData) => {
    console.log(userLoginData.email);
    const savedData = localStorage.getItem(userLoginData.email);
    if (savedData) {
      const parsedSavedData = JSON.parse(savedData);
      if (parsedSavedData.password === userLoginData.password) {
        return true;
      } else return false;
    } else return false;
  };

  const fetchMovieList = async () => {
    try {
      const response = await axios.post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      });

      console.log(response.data);
      return response.data.result;
    } catch (error) {
      console.error(error);
    }
  };
  const dataContext = {
    userSignup: userSignup,
    userLogin: userLogin,
    fetchMovieList: fetchMovieList,
  };

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
