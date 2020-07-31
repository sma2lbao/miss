import * as React from "react";
import { FullScreen } from "@/layouts/PageLayout";

import { State404 } from "@/components/public/State404";

export const NotFound: React.FC = () => {
  return (
    <FullScreen>
      <State404 />
    </FullScreen>
  );
};

export default NotFound;
