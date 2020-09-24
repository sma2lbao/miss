import * as React from "react";
// import { FileUpload } from "@/components/app/FileUpload";
import NormalEditor from "@/components/base/Editor";
// import { withTool, MediaNormal } from "@/components/app/Media";
// import Confirm from "@/components/base/Confirm";

// const ToolMediaNormal = withTool(MediaNormal);

const Test: React.FC = () => {
  // const handleConfirm = async () => {
  //   const isConfirm = await Confirm.dialog({
  //     title: "标题",
  //     content: "内容",
  //   });
  //   console.log(isConfirm);
  // };

  return (
    <div>
      <div>
        {/* <div onClick={handleConfirm}>confirm</div> */}
        {/* <FileUpload /> */}
        <NormalEditor />
      </div>
    </div>
  );
};

export default Test;
