import React from "react";
import { useLocation } from "react-router-dom";
import PostPhoto from "../../components/shared/postShare/PostPhoto";
import Reel from "../../components/shared/postShare/Reel";
import Tweeter from "../../components/shared/postShare/Tweeter";

function Share() {
  const { state } = useLocation();
  const { platform } = state || {};

  return platform === "tweet" ? (
    <Tweeter></Tweeter>
  ) : platform === "photoPost" ? (
    <PostPhoto> </PostPhoto>
  ) : (
    <Reel></Reel>
  );
}

export default Share;
