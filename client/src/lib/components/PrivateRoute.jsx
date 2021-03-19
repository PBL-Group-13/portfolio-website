import React from "react";
import { Route, useHistory } from "react-router";
import { toast } from "react-toastify";
import { LoadingSpinner } from "./LoadingSpinner";

const PrivateRoute = ({ viewer, component: Component, ...other }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const histroy = React.useRef(useHistory());
  React.useEffect(() => {
    if (viewer.id) {
      setIsLoading(false);
    } else if (viewer.didRequest) {
      toast.info("Please signin/login to continue");
      histroy.current.push("/signin");
    }
  }, [viewer.id, viewer.didRequest]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Route
      {...other}
      component={(props) => <Component {...props} viewer={viewer} />}
    />
  );
};

export { PrivateRoute };
