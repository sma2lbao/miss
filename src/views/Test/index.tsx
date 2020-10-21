import * as React from "react";
import { EditCast } from "../movies/MovieUpload/modules";
import { AiderScreen } from "@/layouts/PageLayout";

const Test: React.FC = () => {
  return (
    <div>
      <AiderScreen>
        <EditCast />
      </AiderScreen>
    </div>
  );
};

export default Test;
