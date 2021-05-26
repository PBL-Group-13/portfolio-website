import React, { useEffect, useRef } from "react";
import { Link, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { useFetch } from "../../../lib/hooks";
import { LoadingSpinner } from "../../../lib/components/LoadingSpinner";

const initData = {
  socialLinks: {
    github: "https://github.com/",
    facebook: "https://www.facebook.com/",
    linkedIn: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  skills: [
    "Effective Listening",
    "Git",
    "Scrum",
    "Search Engine Optimization",
    "NumPy",
    "Identifying External Influences",
  ],
  user: {
    firstName: "Anissa",
    lastName: "Heidenreich",
    email: "myles_bins56@hotmail.com",
    birthDate: "1996-04-28T17:36:25.651Z",
    location: "Imeldamouth",
    phoneNumber: "1-318-542-2424",
    description:
      "Dolorum voluptatem et accusantium autem deleniti. Earum tempore vero et consequatur harum. Voluptas minus sed dolorem optio qui accusantium ipsam sunt.\n \rRerum et impedit. Dolor in et maxime molestias. Et incidunt aut reprehenderit placeat. Delectus qui molestiae et dolor qui vel soluta.\n \rIpsum reprehenderit aut quae ullam incidunt ut. Voluptatem dolor rem qui enim numquam et alias aut qui. Tenetur quae magni atque omnis quidem earum.",
    slug: "anissa-heidenreich-9967",
    portfolio: "60aa223e6de3f246dc8329da",
    id: "60aa223e6de3f246dc8329d9",
  },
  slug: "anissa-heidenreich-9967",
  about:
    "Aut eos adipisci. Dolor quasi ipsam labore optio tempore harum. A quam eligendi et commodi. Odio numquam et et quam iusto. Et fugit explicabo voluptatem commodi doloribus minima quis. Et aut non unde earum.\n \rPerspiciatis voluptas quos fugit ducimus non laboriosam et ut eaque. Blanditiis animi qui id minus ut iste. Id perspiciatis dolorem autem officiis. Laborum ut autem. Delectus architecto consequatur quibusdam id rerum.",
  education: [
    {
      duration: {
        start: "2013-06-10T13:43:32.425Z",
        end: "2014-08-01T09:14:52.776Z",
      },
      name: "Indiana University, Bloomington, Indiana",
      description:
        "Officiis eligendi consequatur. Explicabo laudantium dolorem. Omnis qui sapiente quam vel maxime libero amet ut perferendis. Quis optio rerum.",
    },
    {
      duration: {
        start: "2010-04-09T06:28:58.299Z",
        end: "2013-06-10T13:43:32.425Z",
      },
      name: "Wesleyan University, Connecticut",
      description:
        "Eligendi voluptatum molestiae porro officiis dolorum consequatur quia labore quod. Consequatur dicta sit. Labore nostrum quia.",
    },
  ],
  experience: [
    {
      duration: {
        start: "2008-01-07T15:10:43.594Z",
        end: "2018-12-23T03:56:27.811Z",
      },
      name: "Carroll, Hammes and Prosacco",
      description:
        "Dolor soluta et qui neque occaecati quisquam et fuga pariatur. Quidem adipisci quod et quibusdam. Iste harum tenetur quod officiis distinctio qui dolorem.",
    },
    {
      duration: {
        start: "2006-08-26T08:55:54.061Z",
        end: "2014-07-07T07:39:42.831Z",
      },
      name: "Kemmer, Romaguera and McGlynn",
      description:
        "Aspernatur voluptatibus dolor sint. Quasi doloremque voluptas odio est excepturi. Et aliquid ut veniam. Officia laboriosam voluptate est ut aut voluptatem.",
    },
    {
      duration: {
        start: "2005-09-28T00:11:48.410Z",
        end: "2006-05-13T07:30:17.435Z",
      },
      name: "Lesch - Ondricka",
      description:
        "Iure labore ad consequuntur ut expedita eos. Beatae aut quae ipsum dolore tempore. Impedit perspiciatis ullam quos voluptas reprehenderit fugit. Inventore cumque dolores quo consequuntur soluta laborum ut voluptatibus. Aut odit sint cumque magnam suscipit saepe beatae eveniet. Voluptatem odit perferendis rerum perspiciatis saepe cumque.",
    },
  ],
  projects: [
    {
      name: "Total leading edge help-desk",
      description:
        "Et corporis est id et quisquam non. Ducimus omnis molestiae. Molestiae ullam possimus repellendus et inventore voluptas. Sunt minima provident facilis itaque ducimus hic ut et.\n \rAmet rerum ad aut saepe voluptates officia corrupti eveniet dolores. Officiis voluptatem quas est. Corrupti perferendis consequuntur. Odio quis ullam dolorum consequatur similique perspiciatis.\n \rQuam vitae voluptatem culpa vero. Velit soluta exercitationem maxime et. Eaque officiis ut praesentium natus.",
      coverImage: "http://placeimg.com/640/480/abstract",
      link: "https://google.com",
    },
    {
      name: "Re-contextualized responsive capacity",
      description:
        "Sint voluptate distinctio quis qui sapiente consequuntur earum. Eius nisi omnis ea. Minima mollitia molestias nihil quidem sapiente voluptatem at quo.",
      coverImage: "http://placeimg.com/640/480/abstract",
      link: "https://google.com",
    },
  ],
  id: "60aa223e6de3f246dc8329da",
};

const ViewPortfolio = (props) => {
  console.log(props);
  const { pathname: loc } = useLocation();
  const history = useHistory();
  const pathname = `/${props.baseUrl}/${props.id}`;
  const [data, setData] = React.useState(initData);
  const [_getPortfolio, { loading }] = useFetch({
    onError: (errors) => {
      console.log(errors);
    },
    onSuccess: (res) => {
      setData(res);
    },
  });
  const getPortfolio = useRef(_getPortfolio);

  useEffect(() => {
    getPortfolio.current({
      url: `/api/portfolios/${props.id}`,
      method: "get",
    });
  }, [props.id]);
  console.log(pathname);
  if (loading) return <LoadingSpinner />;
  console.log(data);
  return (
    <>
      <div className="max-w-screen-xl mx-auto shadow-lg bg-gray-800 mt-8">
        <div className="flex justify-end">
          <div className="bg-gray-900 w-full"></div>
          <div className="py-4 px-4 ">
            <Link
              to={pathname}
              className={`mx-1 px-6 ${
                loc === `/${props.baseUrl}/${props.id}`
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
                loc === `/${props.baseUrl}/${props.id}/resume`
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
                loc === `/${props.baseUrl}/${props.id}/projects`
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
                loc === `/${props.baseUrl}/${props.id}/contact`
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
                    src={data.user.avatar}
                    alt="avatar"
                    className="w-full obje object-center h-full"
                  />
                </div>
              </div>
              <div className="my-6 text-center">
                <h1 className="text-4xl font-serif text-gray-300">
                  {data.user.firstName}{" "}
                  <span className="font-semibold">{data.user.lastName}</span>
                </h1>
                <h2 className="my-3 py-1 bg-gray-600 rounded-full inline-block px-6 text-gray-300 w-full truncate">
                  {data.user.description}
                </h2>
              </div>

              <div className="text-gray-400 text-lg text-center">
                <h1 className="my-1">
                  {new Date(data.user.birthDate).toDateString()}
                </h1>
                <h1 className="my-1">{data.user.location}</h1>
                <h1 className="my-1">
                  {" "}
                  <a href={`mailto:${data.user.email}`}>
                    {data.user.email}
                  </a>{" "}
                </h1>
                <h1 className="my-1"> {data.user.phoneNumber}</h1>
              </div>
              <button className="bg-gray-800 w-full rounded-xl py-4 text-white text-xl mt-7 hover:bg-gray-900 hover:shadow-xl transition-all">
                Download CV
              </button>
            </div>
          </div>
          <div className="sm:w-full sm:max-w-full max-w-sm mx-auto sm:m-0">
            <Switch>
              <Route path={`${pathname}/`} exact>
                <About skills={data.skills} about={data.about} />
              </Route>
              <Route path={`${pathname}/resume`} exact>
                <Resume
                  education={data.education}
                  experience={data.experience}
                />
              </Route>
              <Route path={`${pathname}/projects`} exact>
                <Projects projects={data.projects} />
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
