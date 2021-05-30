import React, { useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { useFetch } from "../../lib/hooks/index.js";
import { LoadingSpinner } from "../../lib/components/LoadingSpinner";

const UserSearch = ({ user }) => {
  return (
    <div className="my-3 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3">
      <Link to={`/portfolios/${user.slug}`}>
        <div className="text-center flex items-center justify-center py-4 rounded-xl hover:bg-gray-800 transition-all">
          <figure className="text-center text-white flex items-center justify-center flex-col">
            <img
              src={user.avatar}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-40 h-40 object-cover rounded-full"
            />
            <figcaption>
              <h1 className="mt-4 text-2xl font-semibold">{`${user.firstName} ${user.lastName}`}</h1>
              <div className="mt-3 flex flex-wrap w-60 justify-center">
                {user?.skills?.slice(0, 4).map((skill, i) => {
                  return (
                    <span
                      key={i}
                      className="text-gray-300 bg-gray-700 mx-0.5 my-0.5 text-sm py-1 rounded-full px-3 inline-block"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </figcaption>
          </figure>
        </div>
      </Link>
    </div>
  );
};

const Home = () => {
  const history = useHistory();

  const [_searchUser, { data, loading, errors }] = useFetch({});
  const getUsers = useRef(_searchUser);
  const searchUser = useRef(debounce(_searchUser, 500));
  const searchQuery = new URLSearchParams(window.location.search).get("search");
  const handleChange = (event) => {
    const { value } = event.target;
    history.push({
      search: `?search=${value}`,
    });
  };

  useEffect(() => {
    if (searchQuery?.length) {
      searchUser.current({
        url: `api/search?q=${searchQuery || ""}&limit=21`,
        method: "get",
      });
    }
  }, [searchQuery]);
  useEffect(() => {
    getUsers.current({
      url: `api/users/latest`,
      method: "get",
    });
  }, []);

  return (
    <div className="border-b-2 border-gray-700">
      <div className="">
        <h1 className="text-center text-7xl text-white mt-16 mb-8">
          Make My Portfolio
        </h1>
        <h2 className="text-center text-3xl text-white opacity-80 mb-16">
          Create | Connect | Share
        </h2>
        <div className="flex justify-center items-center max-w-md mx-auto pb-16 mb-16">
          <input
            type="text"
            name="search"
            id="search"
            value={searchQuery}
            placeholder="Search By Skills Names ..."
            className="px-3 py-3 placeholder-gray-400 text-gray-700 text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400"
            onChange={handleChange}
          />
          <button className="py-3 px-8 bg-blue-400 hover:bg-blue-500 text-sm shadow focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-gray-400">
            <i className="fas fa-search text-lg text-blue-900"></i>
          </button>
        </div>
        <div className="">{loading && <LoadingSpinner />}</div>
        <div className="">
          {!data?.length && !loading && searchQuery?.length && (
            <h1 className="text-white text-center text-xl">No User Found</h1>
          )}
        </div>

        <div className="result bg-gray-900 max-w-5xl mx-auto">
          {data?.length && (
            <div className="flex flex-wrap -mx-2 overflow-hidden ">
              {data?.map((user, i) => {
                return <UserSearch user={user} key={i} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Home };
