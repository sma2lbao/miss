import * as React from "react";
// import { FileUpload } from "@/components/app/FileUpload";
import { withTool, MediaNormal } from "@/components/app/Media";

const ToolMediaNormal = withTool(MediaNormal);

const Test: React.FC = () => {
  return (
    <div>
      <div>
        {/* <FileUpload>upload</FileUpload> */}
        <ToolMediaNormal
          title={"title"}
          cover={"cover"}
          onDelete={() => {
            console.log("delete");
          }}
        />
      </div>
    </div>
  );
};

export default Test;
