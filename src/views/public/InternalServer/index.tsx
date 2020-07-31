import * as React from "react";
import { FullScreen } from "@/layouts/PageLayout";
import { State50x } from "@/components/public/State50x";

export const InternalServer: React.FC = () => {
  return (
    <FullScreen>
      <State50x />
    </FullScreen>
  );
};

export default InternalServer;
