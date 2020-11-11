import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {
  RouteWithLayout as Route,
  MainWithoutSidebar as MainLayout
  // MainWithoutSidebar as SecondaryLayout,
} from "../layouts";
import Home from "@/views/Home";
import H5NotSupported from "@/views/public/H5NotSupported";
import { Authority } from "@/layouts/RouteWithLayout";

const ShadowHome = React.lazy(() => import("@/views/shadows/ShadowHome"));
const Shadow = React.lazy(() => import("@/views/shadows/Shadow"));
const ShadowPlay = React.lazy(() => import("@/views/shadows/ShadowPlay"));
const ShadowUpload = React.lazy(() => import("@/views/shadows/ShadowUpload"));
const Profile = React.lazy(() => import("@/views/users/Profile"));
const Personal = React.lazy(() => import("@/views/users/Personal"));
const Resume = React.lazy(() => import("@/views/users/Resume"));
const Login = React.lazy(() => import("@/views/auth/Login"));
const Completion = React.lazy(() => import("@/views/auth/Completion"));
const NotFound = React.lazy(() => import("@/views/public/NotFound"));
const Forbidden = React.lazy(() => import("@/views/public/Forbidden"));
const InternalServerError = React.lazy(() =>
  import("@/views/public/InternalServer")
);
const Test = React.lazy(() => import("@/views/Test"));

function AppRoute() {
  const isH5 = /Android|webOS|iPhone|iPod|BlackBerry/i.test(
    navigator.userAgent
  );

  // if (isH5) {
  //   return (
  //     <Router>
  //       <Switch>
  //         <Route component={H5NotSupported} />
  //       </Switch>
  //     </Router>
  //   );
  // }

  if (isH5 && !window.location.pathname.includes("/not-support")) {
    window.location.href = window.location.origin + "/not-support";
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} layout={MainLayout} />
        <Route lazy path="/home" component={Home} layout={MainLayout} />
        <Route
          path="/shadow-home"
          lazy
          component={ShadowHome}
          layout={MainLayout}
        />
        <Route lazy path="/shadow/:id" component={Shadow} layout={MainLayout} />
        <Route
          lazy
          path="/shadow-play/:id"
          component={ShadowPlay}
          layout={MainLayout}
        />
        <Route
          lazy
          path="/shadow-upload"
          component={ShadowUpload}
          layout={MainLayout}
          authority={Authority.MEMBER}
        />
        <Route
          lazy
          path="/profile/:username"
          component={Profile}
          layout={MainLayout}
        />
        <Route lazy path="/personal" component={Personal} layout={MainLayout} />
        <Route lazy path="/resume" component={Resume} />
        <Route lazy path="/login" component={Login} />
        <Route lazy path="/completion" component={Completion} />
        <Route lazy path="/403" exact component={Forbidden} />
        <Route lazy path="/404" exact component={NotFound} />
        <Route lazy path="/50x" exact component={InternalServerError} />
        <Route path="/not-support" component={H5NotSupported} />
        <Route lazy path="/test" exact component={Test} layout={MainLayout} />
        <Route lazy component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRoute;
