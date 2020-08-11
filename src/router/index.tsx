import * as React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import {
  RouteWithLayout as Route,
  Main as MainLayout
  // MainWithoutSidebar as SecondaryLayout,
} from "../layouts";
import Home from "@/views/Home";

const MovieHome = React.lazy(() => import("@/views/movies/MovieHome"));
const TVHome = React.lazy(() => import("@/views/tvs/TVHome"));
const Movie = React.lazy(() => import("@/views/movies/Movie"));
const MoviePlay = React.lazy(() => import("@/views/movies/MoviePlay"));
const MovieUpload = React.lazy(() => import("@/views/movies/MovieUpload"));
const TV = React.lazy(() => import("@/views/tvs/TV"));
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
const H5NotSupported = React.lazy(() =>
  import("@/views/public/H5NotSupported")
);
const Test = React.lazy(() => import("@/views/Test"));

function AppRoute() {
  const isH5 = /Android|webOS|iPhone|iPod|BlackBerry/i.test(
    navigator.userAgent
  );
  if (isH5) {
    return (
      <Router>
        <Switch>
          <Route lazy component={H5NotSupported} />
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
        <Route lazy path="/movie/:id" component={Movie} layout={MainLayout} />
        <Route
          lazy
          path="/movie-play/:id"
          component={MoviePlay}
          layout={MainLayout}
        />
        <Route
          lazy
          path="/movie-upload/*"
          component={MovieUpload}
          layout={MainLayout}
        />
        <Route lazy path="/tv-home" component={TVHome} layout={MainLayout} />
        <Route lazy path="/tv" component={TV} layout={MainLayout} />
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
        <Route lazy path="/test" exact component={Test} />
        <Route lazy component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRoute;
