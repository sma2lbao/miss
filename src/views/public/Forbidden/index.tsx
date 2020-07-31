import * as React from "react";
import { FullScreen } from "@/layouts/PageLayout";
import { State403 } from "@/components/public/State403";

export const Forbidden: React.FC = () => {
  return (
    <FullScreen>
      <State403 />
    </FullScreen>
  );
};

export default Forbidden;
