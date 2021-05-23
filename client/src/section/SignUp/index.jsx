import React from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import backgroundimg from "../../assets/img/register_bg_2.png";
import { useFetch } from "../../lib/hooks";

export default function SignUp(props) {
  const [formData, setformData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    phoneNumber: "",
    birthdate: "",
  });

  const history = useHistory();
  const [signUp, _] = useFetch({
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
      props.setViewer && props.setViewer(data.user);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({
      url: "/signup",
      method: "post",
      data: formData,
    });
  };
  return (
    <div className="overflow-hidden">
      <section className="w-full bg-gray-900">
        <div
          className="container mx-auto px-3 my-12 py-12"
          style={{
            backgroundImage: `url(${backgroundimg})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex content-center mt-3 justify-center">
            <div className="w-full lg:w-6/12 px-4 ">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0 ">
                <div className="flex-auto px-4 lg:px-10 p-3 py-11">
                  <div className=" text-center">
                    <h1 className="text-3xl font-bold text-gray-800 tracking-tight mb-8">
                      Sign Up
                    </h1>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div
                      className="flex justify-center "
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="relative w-2/5 mb-3 ">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="firstName"
                        >
                          First Name
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            setformData((prev) => ({
                              ...prev,
                              firstName: e.target.value,
                            }))
                          }
                          type="text"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400"
                          placeholder="First Name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="relative w-2/5 mb-3 ">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="lastName"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            setformData((prev) => ({
                              ...prev,
                              lastName: e.target.value,
                            }))
                          }
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400"
                          placeholder="Last Name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email-Id
                        </label>
                        <input
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            setformData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          type="email"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400"
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
                          id="password"
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={(e) =>
                            setformData((prev) => ({
                              ...prev,
                              password: e.target.value,
                            }))
                          }
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                    </div>
                    <div
                      className="flex justify-center "
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="relative w-2/5 mb-3 ">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="phoneNumber"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setformData((prev) => ({
                              ...prev,
                              phoneNumber: e.target.value,
                            }))
                          }
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400"
                          placeholder="1234567890"
                          style={{ transition: "all .15s ease" }}
                          pattern="[0-9]{10}"
                          required
                        />
                      </div>
                      <div className="relative w-2/5 mb-3 ">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="location"
                        >
                          Location
                        </label>
                        <input
                          name="location"
                          id="location"
                          type="text"
                          value={formData.location}
                          onChange={(e) =>
                            setformData((prev) => ({
                              ...prev,
                              location: e.target.value,
                            }))
                          }
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400"
                          placeholder="Location"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative w-full mb-3 ">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="birthdate"
                        >
                          Date Of Birth
                        </label>
                        <input
                          type="date"
                          id="birthdate"
                          name="birthdate"
                          value={formData.birthdate}
                          onChange={(e) =>
                            setformData((prev) => ({
                              ...prev,
                              birthdate: e.target.value,
                            }))
                          }
                          className="px-3 py-3 placeholder-gray-200 text-gray-400 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400 focus:text-gray-700"
                          placeholder="DOB"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow transform  motion-reduce:transform-none outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
