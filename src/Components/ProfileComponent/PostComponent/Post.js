import React  from "react";

import "./Post.css";

export function Post(props) {
  return (
    <div className="post">
      <img src="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false" alt=''/>
      <span>{props.message}</span>
    </div>
  );
}
