import * as React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Collapse, Link } from "@material-ui/core";
import { noticeFlagVar } from "@/graphql/variables";
import { useReactiveVar } from "@apollo/client";

const Test: React.FC = () => {
  // const [open, setOpen] = React.useState(true);
  const notice_flag = useReactiveVar(noticeFlagVar);

  return (
    <div>
      <Collapse in={notice_flag}>
        <Alert severity="warning" onClose={() => noticeFlagVar(false)}>
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert —
          <Link
            target="_blank"
            href="https://github.com/sma2lbao/miss/issues"
            color="inherit"
          >
            <strong>new issues!</strong>
          </Link>
        </Alert>
      </Collapse>
    </div>
  );
};

export default Test;
