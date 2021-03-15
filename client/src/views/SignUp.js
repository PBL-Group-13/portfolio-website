import React from "react";

import NavbarSignUp from "../components/NavbarSignUp";
import FooterSmall from "../components/FooterSmall.js";

import backgroundimg from "../assets/img/register_bg_2.png"

export default function SignUp() {
    return (
        <div className="overflow-hidden">
            <NavbarSignUp transparent />
            <main>
                <section className="absolute w-full h-full overflow-hidden ">
                    <div
                        className="absolute top-0 w-full h-full bg-gray-900 "
                        style={{
                            backgroundImage:
                                `url(${backgroundimg})`,
                            backgroundSize: "100%",
                            backgroundRepeat: "no-repeat",
                            
                        }}
                    ></div>
                    <div className="container mx-auto px-3 h-full ">
                        <div className="flex content-center mt-3 justify-center h-full ">
                            <div className="w-full lg:w-6/12 px-4 ">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0 ">
                                    <div className="flex-auto px-4 lg:px-10 py-3 pt-0">
                                        <div className=" text-left ">
                                            <h1 className="text-3xl font-bold text-gray-800 tracking-tight mt-1">Sign Up</h1>
                                            <h2 className="text-lg font-medium text-gray-800 tracking-tight">Quick and easy.</h2>
                                            <hr className=" mt-2 mb-3 border-b-1 border-gray-500" />
                                        </div>
                                        
                                        <form>
                                            <div className="flex justify-center " style={{ justifyContent: "space-between" }}>
                                                <div className="relative w-2/5 mb-3 ">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400  "
                                                        placeholder="First Name"
                                                        style={{ transition: "all .15s ease" }}
                                                    />
                                                </div>
                                                <div className="relative w-2/5 mb-3 ">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
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
                                                        htmlFor="grid-password"
                                                    >
                                                        Email-Id
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400"
                                                        placeholder="Email"
                                                        style={{ transition: "all .15s ease" }}
                                                    />
                                                </div>

                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400"
                                                        placeholder="Password"
                                                        style={{ transition: "all .15s ease" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex justify-center " style={{ justifyContent: "space-between" }}>
                                                <div className="relative w-2/5 mb-3 ">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400"
                                                        placeholder="Phone No."
                                                        style={{ transition: "all .15s ease" }}
                                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
                                                    />
                                                </div>
                                                <div className="relative w-2/5 mb-3 ">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Location
                                                    </label>
                                                    <input
                                                        type="text"
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
                                                        htmlFor="grid-password"
                                                    >
                                                        Date Of Birth
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="px-3 py-3 placeholder-gray-200 text-gray-400 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400 focus:text-gray-700"
                                                        placeholder="DOB"
                                                        style={{ transition: "all .15s ease" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow transform hover:scale-110 motion-reduce:transform-none outline-none focus:outline-none mr-1 mb-1 w-full"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                    onClick
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
                    <FooterSmall absolute />
            </main>
        </div>
            );
}