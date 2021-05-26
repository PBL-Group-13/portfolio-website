import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import backgroundimg from "../../assets/img/register_bg_2.png";
import { useFetch } from "../../lib/hooks";

export default function Login(props) {
  const history = useHistory();
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const [signin, { data, loading, errors }] = useFetch({
    onError: (e) => {
      if (e instanceof Array) {
        e.forEach((e) => {
          toast.error(e.message || "Something Went Wrong", {});
        });
      }
    },
    onSuccess: (data) => {
      toast.success("Sign Up Successful");
      history.push("/");
      props.setViewer && props.setViewer(data);
    },
  });

  return (
    <section className="absolute w-full h-full">
      <div
        className="absolute top-0 w-full h-full bg-gray-900"
        style={{
          backgroundImage: `url(${backgroundimg})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-4"></div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="mb-8 text-center">
                  <h1 className="text-3xl font-bold text-gray-800 tracking-tight mt-1">
                    Sign In
                  </h1>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    signin({
                      data: formData,
                      method: "post",
                      url: "/api/signin",
                    });
                  }}
                >
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      type="email"
                      id="email"
                      name="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      value={formData.password}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      id="password"
                      name="password"
                      type="password"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="*******"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className={`${
                        loading
                          ? "opacity-50 cursor-not-allowed"
                          : "opacity-100"
                      } bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow transform hover:bg-gray-800 motion-reduce:transform-none outline-none focus:outline-none mr-1 mb-1 w-full`}
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                      disabled={loading}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <h2 className="text-base font-medium text-gray-800 tracking-tight text-center mt-4">
                  New here..?{" "}
                  <Link to="/signup" className="underline">
                    Create an account.
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
