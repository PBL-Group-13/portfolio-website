import React from "react";
import * as axios from "axios";

const useFetch = ({ onSuccess, onError }) => {
  const [response, setResponse] = React.useState({
    data: null,
    errors: null,
    loading: null,
  });

  const query = ({ url, method, data }) => {
    setResponse((prev) => ({ data: null, errors: null, loading: true }));

    axios
      .request({
        method,
        url,
        data,
      })
      .then((e) => {
        setResponse((prev) => ({
          error: null,
          loading: false,
          data: e.data.data,
        }));
        onSuccess && onSuccess(e.data.data);
      })
      .catch((error) => {
        const errors = error.response.data.errors || [
          { message: "Something went wrong!" },
        ];
        setResponse((prev) => ({
          data: null,
          loading: false,
          errors,
        }));
        onError && onError(errors);
      });
  };
  return [query, response];
};

export { useFetch };
