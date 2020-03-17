import React, { Component } from "react";
import { render } from "react-dom";

import "./Post.css";

export function Post(props) {
  return (
    <div className="post">
      <img src="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false" />
      <span>{props.message}</span>
    </div>
  );
}
