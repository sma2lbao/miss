import * as React from "react";
import { FileUpload } from "@/components/app/FileUpload";

const Test: React.FC = () => {
  return (
    <div>
      <FileUpload maxSize={2} />
    </div>
  );
};

export default Test;
