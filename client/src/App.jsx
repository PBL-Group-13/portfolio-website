import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FooterSmall from "./lib/components/FooterSmall";
import Navbar from "./lib/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Login from "./section/LogIn";
import SignUp from "./section/SignUp";
import {MyContacts}  from "./section/Contacts";
import { Home } from "./section/Home";
import { useFetch } from "./lib/hooks";
import { CreatePortfolio } from "./section/Portfolio/index";
import { PrivateRoute } from "./lib/components/PrivateRoute";
import { ViewPortfolio } from "./section/Portfolio/ViewPortfolio";
import { UpdatePortfolio } from "./section/Portfolio/UpdatePortfolio";
import { LoadingSpinner } from "./lib/components/LoadingSpinner";

const initialViewer = {
  firstName: null,
  lastName: null,
  email: null,
  slug: null,
  portfolio: null,
  id: null,
  didRequest: false,
};

const App = () => {
  const [viewer, setViewer] = React.useState(initialViewer);
  const [_who, { loading }] = useFetch({
    onSuccess: (data) => {
      setViewer({ ...data, didRequest: true });
    },
    onError: () => {
      setViewer({ ...initialViewer, didRequest: true });
    },
  });
  const who = React.useRef(_who);

  React.useEffect(() => {
    who.current({ url: "/who", method: "get" });
  }, []);
  if (!viewer.didRequest) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <Navbar
        transparent
        viewer={viewer}
        setViewer={() => setViewer({ ...initialViewer, didRequest: true })}
      />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="bg-gray-900 pt-12 min-h-screen max-h-screen ">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/404" exact>
            <h1 className="text-6xl text-white">Not found</h1>
          </Route>
          <Route path="/signin" exact>
            <Login
              setViewer={(viewer) => setViewer({ ...viewer, didRequest: true })}
            />
          </Route>
          <Route path="/signup" exact>
            <SignUp
              setViewer={(viewer) => setViewer({ ...viewer, didRequest: true })}
            />
          </Route>
          <Route path="/mycontacts" exact>
            <MyContacts
              setViewer={(viewer) => setViewer({ ...viewer, didRequest: true })}
            />
          </Route>

          <PrivateRoute
            path="/portfolio/create"
            exact
            viewer={viewer}
            component={CreatePortfolio}
          />
          <PrivateRoute
            path="/me"
            component={UpdatePortfolio}
            exact
            viewer={viewer}
          />
          <Route
            path="/portfolios/:id/:path?"
            component={(props) => (
              <ViewPortfolio
                {...props}
                baseUrl="portfolios"
                id={props.match.params.id}
              />
            )}
          />
        </Switch>
      </main>
      <FooterSmall />
    </BrowserRouter>
  );
};

export default App;
