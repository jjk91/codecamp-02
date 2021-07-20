import styled from "@emotion/styled";
import { Rate, Alert, DatePicker } from "antd";
import React, { useState, createElement } from "react";
import ReactPlayer from "react-player";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

const desc = ["1점", "2점", "3점", "4점", "5점"];

const YouTube = styled(ReactPlayer)``;

export default function Week3Page() {
  const [score, setScore] = useState("");
  const [date, setDate] = useState("");

  function onHandleChange(value) {
    console.log(value);
    // desc[value - 1]
    // alert(value)
    setScore(value);
    setScore(desc[value - 1]);
  }

  function onDateChange(date: moment.Moment | null) {
    // console.log(dateString)
    console.log(date?.month());
    // setDate(dateString)
  }

  const [likes, setLikes] = useState(0);
  const [dislikes, setDisklikes] = useState(0);
  const [action, setAction] = useState(null);

  function like(action) {
    console.log(action);
    // setLikes(1);
    // setDisklikes(0);
    // setAction("liked");
  }

  function disLike() {
    // setLikes(0);
    // setDisklikes(1);
    // setAction("disliked");
  }

  return (
    <>
      <DatePicker
        onChange={(date, dateString) => {
          onDateChange(date, dateString);
        }}
      />
      <Rate tooltips={desc} onChange={onHandleChange} />
      <div>{date.slice(5, 7)}</div>
      <div>{score}</div>
      {/* (<Alert message={score}/>) */}
      {score !== "" && <Alert message={score} type="error" closable={true} />}
      <YouTube
        url="https://www.youtube.com/watch?v=McHtMb6a0aI"
        width="100px"
        height="100px"
        playing={true}
        // muted
        volume={0}
      />

      <LikeOutlined onClick={like}>{likes}</LikeOutlined>
      {/* {React.createElement(action === "liked" ? LikeFilled : LikeOutlined)} */}
      {/* <DislikeOutlined onClick={disLike}> {dislikes} </DislikeOutlined> */}
      {/* {React.createElement(
        action === "disliked" ? DislikeFilled : DislikeOutlined
      )} */}
    </>
  );
}
