import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { RouteWithLayout as Route, Main as MainLayout } from "../layouts";
import {
  Home,
  MovieHome,
  TVHome,
  Movie,
  MovieUpload,
  TV,
  Player,
  Profile,
  Personal,
  Resume,
  Login,
  NotFound,
  Forbidden,
  InternalServerError,
  H5NotSupported
} from "@/pages/index";
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
        <Route path="/home" component={Home} layout={MainLayout} />
        <Route path="/movie-home" component={MovieHome} layout={MainLayout} />
        <Route path="/tv-home" component={TVHome} layout={MainLayout} />
        <Route path="/movie" component={Movie} layout={MainLayout} />
        <Route
          path="/movie-upload"
          component={MovieUpload}
          layout={MainLayout}
        />
        <Route path="/tv" component={TV} layout={MainLayout} />
        <Route path="/play" component={Player} layout={MainLayout} />
        <Route path="/profile" component={Profile} layout={MainLayout} />
        <Route path="/personal" component={Personal} layout={MainLayout} />
        <Route path="/resume" component={Resume} />
        <Route path="/login" component={Login} />
        <Route path="/400" exact component={NotFound} />
        <Route path="/403" exact component={Forbidden} />
        <Route path="/500" exact component={InternalServerError} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRoute;
