import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../actions/personActions";
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
import ReadMoreParagraph from "./template/ReadMoreParagraph";
import DropDown from "./template/DropDown";

const PersonDetails = () => {
   const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.person);
    const [category, setCategory] = useState("movie")

    function formatBirthdate(birthdate) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const [year, month, day] = birthdate.split("-").map(Number);
  const formattedDate = `${day}-${months[month - 1]}-${year}`;

  const birth = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const hasBirthdayPassedThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

  if (!hasBirthdayPassedThisYear) {
    age--;
  }

  return `${formattedDate} (Age: ${age})`;
}



  
    
  
    useEffect(() => {
      dispatch(asyncloadperson(id));
      return () => {
        dispatch(removeperson());
      };
    }, [id]);
    console.log(info);

  return info? (
    <div className="w-screen min-h-screen">

      {/* navbar */}
       <nav className="w-full h-[10vh] px-[5%] bg-blur bg-[#032541] flex items-center justify-between  text-zinc-300">
        <div className="flex items-center justify-between gap-5">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] text-xl font-extrabold  mr-4 ri-arrow-left-line"
          ></i>
          {/* {instagram_id} */}
          {
            info.externalId.instagram_id && (<a
            className="h-[3vw] w-[3vw] hover:shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]
 flex items-center justify-center rounded-full "
            href={`https://www.instagram.com/${info.externalId.instagram_id}/`}
            target="_blank"
          >
            <img className="w-[2vw]" src="/instagram.png" alt="" />
          </a>)
          }
         {/* facebool */}
          
          {info.externalId.facebook_id && (  <a
            className="h-[3vw] w-[3vw] hover:shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]
 flex items-center justify-center rounded-full "
            href={`https://www.facebook.com/${info.externalId.facebook_id}/`}
            target="_blank"
          >
            <img className="w-[2.3vw]" src="/facebook.png" alt="" />
          </a>)}
        
        {/* twitter */}

        {info.externalId.twitter_id && (  <a
            className="h-[3vw] w-[3vw] hover:shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]
 flex items-center justify-center rounded-full "
            href={`https://www.twitter.com/${info.externalId.twitter_id}/`}
            target="_blank"
          >
            <img className="w-[2.2vw]" src="/twitter.png" alt="" />
          </a>)}
        {/* wikidata */}

        {info.externalId.wikidata_id && ( <a
            className="h-[3vw] w-[3vw] hover:shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]
  flex items-center justify-center rounded-full  "
            href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            target="_blank"
          >
            <img className="w-[2vw]" src="/Wikipedia.png" alt="" />
          </a>)}
          {/* imdb_id */}
        
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
      <div className="flex w-full h-full">

        {/* left */}
        <div className="w-[30%] p-[5%] flex-col  bg-zinc-900 flex items-center h-full  text-zinc-300">
            <img
                className="h-[60vh] rounded-xl shadow-[8px_17px_38px_rgba(0,0,0,.9)] object-contain"
                src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
                alt=""
              />
              {/* details */}
              <div className="details w-full p-[5%]">
              <h1 className="text-2xl  font-semibold">Personal Info</h1>
              <div className="my-[5%]">
                <h2 className="text-xl font-medium">Known For</h2>
                <p className="text-medium font-regular">{info.detail.known_for_department}</p>
              </div>
              <div className="mb-[5%]">
                <h2 className="text-xl font-medium">Gender</h2>
                <p className="text-medium font-regular">{info.detail.gender== 2 ? "Male" : "Female" }</p>
              </div>
              <div className="mb-[5%]">
                <h2 className="text-xl font-medium">Birth Date</h2>
                <p className="text-medium font-regular">{formatBirthdate(info.detail.birthday)}</p>
              </div>
              <div className="mb-[5%]">
                <h2 className="text-xl font-medium">Place of Birth</h2>
                <p className="text-medium font-regular">{info.detail.place_of_birth}</p>
              </div>
              {
                info.detail.deathday && (<div className="mb-[5%]">
                <h2 className="text-xl font-medium">Death Date</h2>
                <p className="text-medium font-regular">{formatBirthdate(info.detail.deathday)}</p>
              </div>)
              }
              <div className="mb-[5%]">
                <h2 className="text-xl flex flex-col gap-10 font-medium">Also known As</h2>

                {info.detail.also_known_as.map((item,index)=><p key={index} className="text-medium font-regular mb-3">{item}</p>)}
                
              </div>



              </div>
        </div>

        {/* right */}
        <div className="w-[70%] h-full py-[5%] bg-zinc-900 text-zinc-300">
            <h1 className="text-5xl">{info.detail.name}</h1>
            <div className="pr-[5%] py-[5%] text-justify">
              <h1 className="text-2xl mb-4  font-semibold">Biography</h1>
             
              <ReadMoreParagraph text = {info.detail.biography}/>
            </div>
            <div className="pr-[5%] text-justify">
              <h1 className="text-2xl mb-4  font-semibold">Known For</h1>
             
              <HorizontalCards data = {info.combinedCredits.cast}/>
            </div>

            <div className="pr-[5%]">
              <div className="flex justify-between items-center w-full"> <h1 className="text-2xl my-4  font-semibold">Acting</h1>
              <DropDown title ="category" options ={["tv","movie"]} func ={(e)=>setCategory(e.target.value)}/>
              </div>

              <ul className="list-[circle] text-zinc-300">
                {info[category + "Credits"].cast.map((item,index)=>(
                  <>
                    <li key={index} className=" list-item gap-1"><Link to={`/${category}/details/${item.id}`} className="text-lg font-semibold ">{item.title}</Link><span className="text-lg"> {item.release_date && `(${item.release_date.slice(0,4)})`}</span>
                <h3 className="">{item.character && `As ${item.character}` }</h3>
                </li>
                <hr className="my-2"/>
                  </>
                ))}
              
              </ul>
              

            </div>

        </div>
      </div>
    </div>
  ): <Loader/>
}

export default PersonDetails