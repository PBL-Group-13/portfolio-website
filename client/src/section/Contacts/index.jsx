import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useFetch } from "../../lib/hooks";
import Card from "./Components/Card";

const MyContacts = () => {
  const [contactRequestsList, setContactRequestList] = useState([]);
  const [getContactRequests, { data, loading, error }] = useFetch({
    onError: (e) => {
      if (e instanceof Array) {
        e.forEach((e) => {
          toast.error(e.message || "Something Went Wrong", {});
        });
      }
    },
    onSuccess: (data) => {
      setContactRequestList(data);
      toast.success("Contacts Requests ");
    },
  });
  useEffect(() => {
    getContactRequests({
      url: "/api/portfolios/contact",
      method: "get",
    });
  }, []);
  if (loading) {
    return <>Loading</>;
  } else {
    return (
      <div className="max-w-7xl flex flex-col items-center h-auto lg:h-screen  mx-auto my-32  lg:my-4 bg-gray-800 ">
        <div className="my-5 items-center content-start block">
          <h1 className="text-4xl font-bold text-gray-300 tracking-tight mb-8 text-left flex-left ">
            My Contacts
          </h1>
        </div>

        <div className="grid grid-col-3 gap-12 grid-flow-row place-self-auto">
          {contactRequestsList.map((req, index) => {
            return <Card key={index} contactRequest={req} />;
          })}
        </div>
      </div>
    );
  }
};

export { MyContacts };
