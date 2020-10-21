import * as React from "react";
import { EditMain } from "../movies/MovieUpload/modules";
import { ContentScreen } from "@/layouts/PageLayout";

const Test: React.FC = () => {
  return (
    <div>
      <ContentScreen>
        <EditMain />
      </ContentScreen>
    </div>
  );
};

export default Test;
