import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import auth from "../../utils/helpers/auth";

const ProtectedRoute = ({ render, component, ...rest }) => {
  const Component = component || render;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  render: PropTypes.func,
  rest: PropTypes.any,
};

export default ProtectedRoute;
