import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useFetch } from "../hooks";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const history = useHistory();
  const [signout, {}] = useFetch({
    onSuccess: () => {
      history.push("/");
      toast.success("Sign out Successful");
      props.setViewer && props.setViewer();
    },
    onError: () => {
      toast.success("Something went wrong");
    },
  });
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center"></li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  to="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-facebook text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  to="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-twitter text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  to="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-github text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </Link>
              </li>
              {props.viewer?.id ? (
                <>
                  <li className="flex items-center">
                    <button
                      className={
                        (props.transparent
                          ? "bg-gray-600 text-white active:bg-gray-100"
                          : "bg-pink-500 text-white active:bg-pink-600") +
                        " text-xs  px-4 py-2 rounded shadow hover:bg-gray-500 hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                      }
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => history.push("/me")}
                    >
                      Hi, {props.viewer?.firstName || "User"}
                    </button>
                  </li>
                  <li className="flex items-center">
                    <button
                      className={
                        (props.transparent
                          ? "bg-gray-600 text-white active:bg-gray-100"
                          : "bg-pink-500 text-white active:bg-pink-600") +
                        " text-xs  px-4 py-2 rounded shadow hover:bg-gray-500 hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                      }
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => history.push("/")}
                    >
                      Home
                    </button>
                  </li>
                  <li className="flex items-center">
                    <button
                      className={
                        (props.transparent
                          ? "text-gray-300 bg-gray-800 active:bg-gray-100"
                          : "bg-pink-500 text-white active:bg-pink-600") +
                        " text-xs  px-4 py-2 rounded shadow hover:bg-gray-500 hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                      }
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() =>
                        signout({ method: "post", url: "/api/signout" })
                      }
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-center">
                    <button
                      className={
                        (props.transparent
                          ? "bg-gray-600 text-white active:bg-gray-100"
                          : "bg-pink-500 text-white active:bg-pink-600") +
                        " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-gray-500 hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                      }
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => history.push("/signup")}
                    >
                      <i className=""></i> Sign Up
                    </button>
                  </li>
                  <li className="flex items-center">
                    <button
                      className={
                        (props.transparent
                          ? "bg-gray-600 text-white active:bg-gray-100"
                          : "bg-pink-500 text-white active:bg-pink-600") +
                        " text-xs  px-4 py-2 rounded shadow hover:bg-gray-500 hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                      }
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => history.push("/")}
                    >
                      Home
                    </button>
                  </li>
                  <li className="flex items-center">
                    <button
                      className={
                        (props.transparent
                          ? "bg-white text-gray-800 active:bg-gray-100"
                          : "bg-pink-500 text-white active:bg-pink-600") +
                        " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-gray-500 hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                      }
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => history.push("/signin")}
                    >
                      <i className=""></i> Sign In
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
