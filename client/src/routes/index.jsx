import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Error from "../components/Error/Error";
import ErrorBoundary from "../components/ErrorBoundary";
import ProtectedRoute from "../components/ProtectedRoute";
import SEORoute from "../components/SEORoute";
import Home from "../pages/Home";

const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

const Routes = () => (
  <ErrorBoundary fallback={<Error />}>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <ProtectedRoute
          exact
          path={["/", "/home", "/index"]}
          render={() => <SEORoute component={Home} title={"Home"} />}
        />
        <Route
          path="/login"
          exact
          render={() => <SEORoute component={Login} title={"Login"} />}
        />
        <Route
          path="/register"
          exact
          render={() => <SEORoute component={Register} title={"Register"} />}
        />
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default Routes;
