import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "./Loader";
import TopNav from "./template/TopNav";
import RatingCircle from "./template/RatingCircle";
import HorizontalCards from "./template/HorizontalCards";

const Moviedetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };
 
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  // box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  return info ? (
    <div className="w-screen relative overflow-x-hidden min-h-screen">
      {/* nav */}
      <nav className="w-full h-[10vh] px-[5%] bg-blur bg-[#032541] flex items-center justify-between  text-zinc-300">
        <div className="flex items-center justify-between gap-5">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] text-xl font-extrabold  mr-4 ri-arrow-left-line"
          ></i>
          <a
            className="h-[3vw] w-[3vw]  hover:shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]  flex items-center justify-center rounded-full "
            href={info.detail.homepage}
            target="_blank"
          >
            <img className="w-[2vw] h" src="/globe.png" alt="" />
          </a>
          <a
            className="h-[3vw] w-[3vw] hover:shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]
  flex items-center justify-center rounded-full  "
            href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            target="_blank"
          >
            <img className="w-[2vw]" src="/Wikipedia.png" alt="" />
          </a>
          <a
            className="h-[3vw] w-[3vw] hover:shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]
 flex items-center justify-center rounded-full "
            href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}
            target="_blank"
          >
            <img className="w-[2vw]" src="/imdb.png" alt="" />
          </a>
        </div>
        <TopNav />
        <a
          className="h-[3vw] w-[3vw] hover:shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]
 flex items-center justify-center rounded-full "
          href="/"
        >
          <img className="w-[2.5vw]" src="/HomeIcon.png" alt="" />
        </a>
      </nav>
      {/* body */}
      <div
        style={{
          backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
      url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})
    `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" w-full h-[90vh]"
      >
        {/* inner section */}
        <div className="flex  w-full h-full">
          {/* left */}
          <div className="w-[30%] flex flex-col justify-center items-center h-full ">
            <div className="p-10 h-fit w-[75%] ">
              <img
                className="w-full rounded-t-xl  object-contain"
                src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path}`}
                alt=""
              />

              <div className="bg-[#032541] rounded-b-xl gap-5 w-full  flex items-center justify-center px-[3%]">
                {info?.watchProviders?.flatrate?.[0] ? (
                  <>
                    <img
                      className="w-[5vh] object-fit"
                      src={`https://image.tmdb.org/t/p/original/${info.watchProviders.flatrate[0].logo_path}`}
                      alt=""
                    />
                    <div className="text-white py-2 w-[50%]">
                      <h1 className="text-[1vw] leading-none">Now Streaming</h1>
                      <h1 className="text-[1.3vw] leading-none font-semibold">
                        Watch Now
                      </h1>
                    </div>
                  </>
                ) : (
                  <div className="text-white py-2 w-[50%]">
                    <h1 className="text-[1.2vw] text-center font-semibold">
                      Not Available to Stream
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-[70%]  h-full">
            {/* heading */}
            <div className="text-zinc-100 leading-none pt-[10vh]">
              <h1 className="text-5xl font-bold">
                {info.detail.title ||
                  info.detail.original_title ||
                  info.detail.name ||
                  info.detail.original_name}
                <small className="ml-1 font-medium">
                  ({info.detail.release_date.split("-")[0]})
                </small>
              </h1>

              <div className="flex text-lg font-semibold items-center gap-3">
                <p className="flex items-center">
                  {" "}
                  <span className="mr-2 text-xs flex items-center justify-center border-zinc-100 border-1 text-white ">
                    UA
                  </span>
                  {info.detail.release_date}
                </p>
                <p className="flex items-center">
                  <span className=" mr-2 h-[10px] inline-block w-[10px] rounded-full bg-white"></span>
                  {info.detail.genres.map((dets, i) => (
                    <span key={i} className="p-1 font-semibold inline-block">
                      {dets.name}
                      {i !== info.detail.genres.length - 1 && ", "}
                    </span>
                  ))}
                </p>
                <p className="flex items-center">
                  <span className=" mr-2 h-[10px] inline-block w-[10px] rounded-full bg-white"></span>
                  {formatRuntime(info.detail.runtime)}
                </p>
              </div>
            </div>
            {/* voting */}
            <div className="flex items-center justify-between w-[50%] mt-5">
              <div className="flex items-center gap-2">
                <div className="h-[7vh] w-[7vh] bg-green-950  rounded-full flex items-center justify-center">
                  {info.detail.vote_average && (
                    <RatingCircle rating={info.detail.vote_average.toFixed()} />
                  )}
                </div>
                <div className="text-white text-xl font-bold flex flex-col w-fit">
                  <h1>User</h1>
                  <h1>Score</h1>
                </div>
              </div>

              {/* Trailer */}
              <Link
                className="text-zinc-100 bg-[#032541] text-xl font-semibold h-15 w-[60%] flex items-center justify-center rounded-2xl hover:bg-[#6556CD]"
                to={`${pathname}/trailer`}
              >
                <i className="mr-2 ri-play-large-fill"></i>Play Trailer
              </Link>
            </div>
            {/* heeading and text */}
            <div className="mt-10">
              <h1 className="text-xl font-semibold italic text-zinc-200">
                {info.detail.tagline}
              </h1>
            </div>
            {/* overview */}
            <div className="mt-3  w-[90%]">
              <h1 className="text-xl font-semibold  text-zinc-100">Overview</h1>
              <p className="text-lg text-zinc-100">{info.detail.overview}</p>
            </div>
            {/* trnaltation */}
            <div className="mt-3 w-[90%]">
              <h1 className="text-xl font-semibold  text-zinc-100">
                Movie Translated
              </h1>
              <p className="text-lg w-full wrap-break-word text-zinc-200">
                {info.translations.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* recommendations */}
      <div className=" px-2  mb-10  w-full ">
        <h1 className="text-2xl p-5 mb-3 font-semibold  text-zinc-200">
          {info.recommendations.length > 0 ? "Recommendations" : "Similar"}
        </h1>
        <HorizontalCards
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
      </div>
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default Moviedetails;
