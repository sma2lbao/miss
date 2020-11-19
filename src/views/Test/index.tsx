import * as React from "react";
import { ShadowPlayer, withThird } from "@/components/app/Player";

const ThirdShadowPlayer = withThird(ShadowPlayer);

const Test: React.FC = () => {
  return (
    <div style={{ width: 600 }}>
      <ThirdShadowPlayer
        playing={false}
        youtubeUrl="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        url="https://www.w3school.com.cn/example/html5/mov_bbb.mp4"
      />
    </div>
  );
};

export default Test;
