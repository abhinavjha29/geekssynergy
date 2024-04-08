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
    <div class="card" style={{ width: "fit-content" }}>
      <div class="card-body">
        <div class="container text-center">
          <div class="row">
            <div class="col-1 ">
              <FaArrowUp /> {voting} <FaArrowDown />
            </div>
            <div class="col-3 p-0">
              <img src={poster} alt={title} className="movie-poster" />
            </div>
            <div class="col">
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
                <p>Starring :</p>
                {stars.join(", ")}
              </div>
              <div className="d-flex line-div">
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
{
  /* <Card style={{ width: "25rem" }}>
      <Card.Body>
        <Container className="d-flex">
          <Row className="gx-0 ">
            <Col xs="auto">
              
            </Col>
            <Col xs="auto">
              <Card.Img
                variant="top"
                src={poster}
                alt={title}
                className="movie-poster"
              />
            </Col>
            <Col>
              <Card.Title>{title}</Card.Title>
            </Col>
          </Row>
          <Row className="gx-0 ">
            <Col xs="auto">
              <Card.Text>Genre: {genre}</Card.Text>
            </Col>
            <Col xs="auto">
              <Card.Text>Director: {director.join(", ")}</Card.Text>
            </Col>
            <Col xs="auto">
              <Card.Text>Starring: {stars.join(", ")}</Card.Text>
            </Col>
          </Row>
          <Row className="gx-0 ">
            <Col>
              <Card.Text>
                Time: {runTime} mins | Language: {language} | Release Date:{" "}
                {new Date(releasedDate * 1000).toLocaleDateString()}
              </Card.Text>
            </Col>
          </Row>
          <Row className="gx-0">
            <Col>
              <Card.Text>
                Views: {pageViews} | Voting: {voting} people
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card> */
}
