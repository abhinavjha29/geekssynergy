import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const SingleMovieCard = ({ movie }) => {
  const {
    title,
    genre,
    director,
    stars,
    runTime,
    language,
    releasedDate,
    pageViews,
    voting,
    poster,
  } = movie;

  return (
    <div class="card mb-5" style={{ width: "25rem" }}>
      <div class="card-body">
        <div class="container text-center">
          <div class="row">
            <div class="col-1 ">
              <FaArrowUp /> {voting} <FaArrowDown />
            </div>
            <div class="col-3 p-0">
              <img src={poster} alt={title} className="movie-poster" />
            </div>
            <div class="col text-start">
              <div class="fw-bold">{title}</div>
              <div className="d-flex line-div">
                <p>genere :</p>
                {genre}
              </div>
              <div className="d-flex line-div">
                <p>Director :</p>
                {director.join(", ")}
              </div>
              <div className="d-flex line-div">
                Starring :{stars.join(", ")}
              </div>
              <div className="d-flex time">
                {runTime} mins | {language} |{" "}
                {new Date(releasedDate * 1000).toLocaleDateString()}
              </div>
              <div className="d-flex mt-15">
                {pageViews} |{" "}
                <p className="text-primary"> voted by {voting} people</p>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="btn btn-primary" style={{ width: "18rem" }}>
          Watch Trailer
        </a>
      </div>
    </div>
  );
};

export default SingleMovieCard;
