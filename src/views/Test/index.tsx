import * as React from "react";
import { EditTop } from "../movies/MovieUpload/modules";
import { BodyScreen } from "@/layouts/PageLayout";

const Test: React.FC = () => {
  return (
    <div>
      <BodyScreen>
        <EditTop />
      </BodyScreen>
    </div>
  );
};

export default Test;
