import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FooterSmall from "./lib/components/FooterSmall";
import Navbar from "./lib/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Login from "./section/LogIn";
import SignUp from "./section/SignUp";
import { Home } from "./section/Home";
import { useFetch } from "./lib/hooks";
import { CreatePortfolio } from "./section/Portfolio/index";

const intialViewer = {
  firstname: null,
  lastname: null,
  email: null,
  slug: null,
  portfolio: null,
  id: null,
  didRequest: false,
};

const App = () => {
  const [viewer, setViewer] = React.useState(intialViewer);

  const [_who, _] = useFetch({
    onSuccess: (data) => {
      setViewer({ ...data, didRequest: true });
    },
    onError: () => {
      setViewer({ ...intialViewer, didRequest: true });
    },
  });
  const who = React.useRef(_who);

  React.useEffect(() => {
    who.current({ url: "/who", method: "get" });
  }, []);

  console.log({ viewer });

  return (
    <BrowserRouter>
      <Navbar
        transparent
        viewer={viewer}
        setViewer={() => setViewer({ ...intialViewer, didRequest: true })}
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
      <main className="bg-gray-900 pt-12 min-h-screen">
        <Switch>
          <Route path="/" exact component={Home} />
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
          <Route path="/createportfolio" exact>
            <CreatePortfolio
              setViewer={(viewer) => setViewer({ ...viewer, didRequest: true })}
            />
          </Route>
        </Switch>
      </main>
      <FooterSmall />
    </BrowserRouter>
  );
};

export default App;
