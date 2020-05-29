import * as React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { RouteWithLayout as Route, Main as MainLayout } from "../layouts";
import Home from "@/views/Home";

const MovieHome = React.lazy(() => import("@/views/Movies/MovieHome"));
const TVHome = React.lazy(() => import("@/views/TVs/TVHome"));
const Movie = React.lazy(() => import("@/views/Movies/Movie"));
const MovieUpload = React.lazy(() => import("@/views/Movies/MovieUpload"));
const TV = React.lazy(() => import("@/views/TVs/TV"));
const Player = React.lazy(() => import("@/views/Player"));
const Profile = React.lazy(() => import("@/views/Users/Profile"));
const Personal = React.lazy(() => import("@/views/Users/Personal"));
const Resume = React.lazy(() => import("@/views/Users/Resume"));
const Login = React.lazy(() => import("@/views/Auth/Login"));
const NotFound = React.lazy(() => import("@/views/Public/NotFound"));
const Forbidden = React.lazy(() => import("@/views/Public/Forbidden"));
const InternalServerError = React.lazy(() =>
  import("@/views/Public/InternalServerError")
);
const H5NotSupported = React.lazy(() =>
  import("@/views/Public/H5NotSupported")
);

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
