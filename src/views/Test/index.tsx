import * as React from "react";
import Image from "@/components/base/Image";

const Test: React.FC = () => {
  return (
    <div style={{ width: 300 }}>
      <Image
        aspectRatio={16 / 9}
        src={
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599499118148&di=5c0774cf80d4e177da28a0e178fe05a9&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20191006%2F18%2F1570356488-vKNlgYMhGu.jpg"
        }
      />
    </div>
  );
};

export default Test;
