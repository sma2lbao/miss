import * as React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { RouteWithLayout as Route, Main as MainLayout } from "../layouts";
import Home from "@/pages/Home";

const MovieHome = React.lazy(() => import("@/pages/MovieHome"));
const TVHome = React.lazy(() => import("@/pages/TVHome"));
const Movie = React.lazy(() => import("@/pages/Movie"));
const MovieUpload = React.lazy(() => import("@/pages/MovieUpload"));
const TV = React.lazy(() => import("@/pages/TV"));
const Player = React.lazy(() => import("@/pages/Player"));
const Profile = React.lazy(() => import("@/pages/Profile"));
const Personal = React.lazy(() => import("@/pages/Personal"));
const Resume = React.lazy(() => import("@/pages/Resume"));
const Login = React.lazy(() => import("@/pages/Login"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));
const Forbidden = React.lazy(() => import("@/pages/Forbidden"));
const InternalServerError = React.lazy(() =>
  import("@/pages/InternalServerError")
);
const H5NotSupported = React.lazy(() => import("@/pages/H5NotSupported"));

function AppRoute() {
  const isH5 = /Android|webOS|iPhone|iPod|BlackBerry/i.test(
    navigator.userAgent
  );
  if (isH5) {
    return (
      <Router>
        <Switch>
          <Route component={H5NotSupported} />
        </Switch>
      </Router>
    );
  }
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} layout={MainLayout} />
        <Route lazy path="/home" component={Home} layout={MainLayout} />
        <Route
          path="/movie-home"
          lazy
          component={MovieHome}
          layout={MainLayout}
        />
        <Route lazy path="/tv-home" component={TVHome} layout={MainLayout} />
        <Route lazy path="/movie" component={Movie} layout={MainLayout} />
        <Route
          lazy
          path="/movie-upload"
          component={MovieUpload}
          layout={MainLayout}
        />
        <Route lazy path="/tv" component={TV} layout={MainLayout} />
        <Route lazy path="/play" component={Player} layout={MainLayout} />
        <Route lazy path="/profile" component={Profile} layout={MainLayout} />
        <Route lazy path="/personal" component={Personal} layout={MainLayout} />
        <Route lazy path="/resume" component={Resume} />
        <Route lazy path="/login" component={Login} />
        <Route lazy path="/400" exact component={NotFound} />
        <Route lazy path="/403" exact component={Forbidden} />
        <Route lazy path="/500" exact component={InternalServerError} />
        <Route lazy component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRoute;
