import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import aquietplace from "../assets/pictures/aquietplace.png";
import creedII from "../assets/pictures/creedII.png";
import gonegirl from "../assets/pictures/gonegirl.png";
import inception from "../assets/pictures/inception.png";
import midnightsun from "../assets/pictures/midnightsun.png";
import oceanheight from "../assets/pictures/oceanheight.png";
import pulpfiction from "../assets/pictures/pulpfiction.png";
import seven from "../assets/pictures/seven.png";
import undestructibleII from "../assets/pictures/undestructibleII.png";

const Card = ({ setItemShowed, ItemShowed, id, title, category, likes, dislikes }) => {
  const [LikeNbrs, setLikeNbrs] = useState(likes);
  const [DislikeNbrs, setDislikeNbrs] = useState(dislikes);

  const HandleClickHide = () => {
    const filtredData = ItemShowed.filter((movie) => movie.id !== id);
    setItemShowed(filtredData);
  };

  const HandleClickLike = () => {
    setLikeNbrs(likes + 1);
    if (DislikeNbrs !== dislikes) {
      setDislikeNbrs(dislikes);
    }
    if (LikeNbrs !== likes) {
      setLikeNbrs(likes);
    }
  };
  const HandleClickDislike = () => {
    setDislikeNbrs(dislikes + 1);
    if (LikeNbrs !== likes) {
      setLikeNbrs(likes);
    }
    if (DislikeNbrs !== dislikes) {
      setDislikeNbrs(dislikes);
    }
  };
  let totalLikesAndDislikes = LikeNbrs + DislikeNbrs;
  let likepercentage = LikeNbrs / totalLikesAndDislikes;
  let dislikepercentage = DislikeNbrs / totalLikesAndDislikes;

  const likebar = {
    background: "#f4f6f0",
    width: likepercentage * 290 + "px",
    height: 5 + "px",
  };
  const dislikebar = {
    background: "#FBBC05",
    width: dislikepercentage * 290 + "px",
    height: 5 + "px",
  };

  return (
    <div className="card">
      <button
        className="hide-button"
        onClick={() => {
          HandleClickHide();
        }}>
        <FontAwesomeIcon className="icon" icon={faXmark} />
      </button>

      <div className="main-container">
        <div className="image-container">
          <img
            src={
              id === "1"
                ? oceanheight
                : id === "2"
                ? midnightsun
                : id === "3"
                ? undestructibleII
                : id === "4"
                ? aquietplace
                : id === "5"
                ? creedII
                : id === "6"
                ? pulpfiction
                : id === "7"
                ? pulpfiction
                : id === "8"
                ? seven
                : id === "9"
                ? inception
                : id === "10"
                ? gonegirl
                : ""
            }
            alt="movie"
          />
        </div>
        <h2>{title}</h2>
        <p>{category}</p>
        <div className="like-container">
          <div className="like-text">
            <div className="likes">
              <button
                className="likebutton"
                onClick={() => {
                  HandleClickLike();
                }}>
                <FontAwesomeIcon className="thumb-icon" icon={faThumbsUp} />
              </button>
              <span> {LikeNbrs}</span>
            </div>
            <div className="dislikes">
              <button
                className="likebutton"
                onClick={() => {
                  HandleClickDislike();
                }}>
                <FontAwesomeIcon className="thumb-icon-down" icon={faThumbsDown} />
              </button>
              <span className="dislike-number">{DislikeNbrs}</span>
            </div>
          </div>
          <div className="bar">
            <div style={likebar}></div>
            <div style={dislikebar}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
