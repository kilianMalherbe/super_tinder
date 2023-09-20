import React from "react";
import "../style/SwipeButton.css";
import {
  ArrowPathIcon,
  BoltIcon,
  HeartIcon,
  StarIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

function SwipeButton() {
  return (
    <div className="swipeButtons">
      <ArrowPathIcon className="w-10 h-10 p-2 border rounded-full swipeButtons_repeat" />
      <XCircleIcon className="w-10 h-10 p-2 border rounded-full swipeButtons_left" />
      <StarIcon className="w-10 h-10 p-2 border rounded-full swipeButtons_star" />
      <HeartIcon className="w-10 h-10 p-2 border rounded-full swipeButtons_right" />
      <BoltIcon className="w-10 h-10 p-2 border rounded-full swipeButtons_lightning" />
    </div>
  );
}

export default SwipeButton;
