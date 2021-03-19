import React from "react";
import { Link, Route, Switch, useLocation, useParams } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";

const ViewPortfolio = (props) => {
  const params = useParams();
  const { pathname: loc } = useLocation();
  const pathname = `/${props.baseUrl}/${params.id}`;

  return (
    <>
      <div className="max-w-screen-xl mx-auto shadow-lg bg-gray-800 mt-8">
        <div className="flex justify-end">
          <div className="bg-gray-900 w-full"></div>
          <div className="py-4 px-4 ">
            <Link
              to={pathname}
              className={`mx-1 px-6 ${
                loc === `/${props.baseUrl}/${params.id}`
                  ? "text-gray-100 bg-gray-900"
                  : "text-gray-300"
              } text-lg  py-2 rounded-md`}
            >
              About
            </Link>
            <Link
              to={`${pathname}/resume`}
              className={`
              ${
                loc === `/${props.baseUrl}/${params.id}/resume`
                  ? "text-gray-100 bg-gray-900"
                  : "text-gray-300"
              }
              mx-1 px-6 text-gray-300 text-lg py-2 rounded-md`}
            >
              Resume
            </Link>
            <Link
              to={`${pathname}/projects`}
              className={`
              ${
                loc === `/${props.baseUrl}/${params.id}/projects`
                  ? "text-gray-100 bg-gray-900"
                  : "text-gray-300"
              }
              mx-1 px-6 text-gray-300 text-lg py-2 rounded-md`}
            >
              Portfolio
            </Link>
            <Link
              to={`${pathname}/contact`}
              className={`
              ${
                loc === `/${props.baseUrl}/${params.id}/contact`
                  ? "text-gray-100 bg-gray-900"
                  : "text-gray-300"
              }
              mx-1 px-6 text-gray-300 text-lg py-2 rounded-md`}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="sm:flex rounded-3xl">
          <div className="bg-gray-700 max-w-sm mx-auto relative">
            <div className="p-6 sticky top-0">
              <div className="p-8 pb-4 text-center flex items-center justify-center">
                <div className="w-full rounded-3xl overflow-hidden max-h-80 max-w-xs">
                  <img
                    src="https://i.pravatar.cc/400?img=5"
                    alt="avatar"
                    className="w-full obje object-center h-full"
                  />
                </div>
              </div>
              <div className="my-6 text-center">
                <h1 className="text-4xl font-serif text-gray-300">
                  Felecia <span className="font-semibold">Brown</span>
                </h1>
                <h2 className="my-3 py-1 bg-gray-600 rounded-full inline-block px-6 text-gray-300">
                  Creative Director
                </h2>
              </div>

              <div className="text-gray-400 text-lg text-center">
                <h1 className="my-1">March 25,1995</h1>
                <h1 className="my-1">San-Francisco, USA</h1>
                <h1 className="my-1">
                  {" "}
                  <a href="mailto:email@email.com">email@email.com</a>{" "}
                </h1>
                <h1 className="my-1"> +91-1234567890</h1>
              </div>
              <button className="bg-gray-800 w-full rounded-xl py-4 text-white text-xl mt-7 hover:bg-gray-900 hover:shadow-xl transition-all">
                Download CV
              </button>
            </div>
          </div>
          <div className="sm:w-full sm:max-w-full max-w-sm mx-auto sm:m-0">
            <Switch>
              <Route path={`${pathname}/`} exact>
                <About />
              </Route>
              <Route path={`${pathname}/resume`} exact>
                <Resume />
              </Route>
              <Route path={`${pathname}/projects`} exact>
                <Projects />
              </Route>
              <Route path={`${pathname}/contact`} exact>
                <Contact />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export { ViewPortfolio };
