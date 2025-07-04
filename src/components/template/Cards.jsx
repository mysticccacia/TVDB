import React from 'react'
import { Link } from 'react-router-dom'
import RatingCircle from './RatingCircle'

const Cards = ({data,title}) => {
  return (
    <div className='flex p-[3%] gap-10 py-10 justify-center flex-wrap bg-[#1F1E24] w-full'>
        {
            data.map((item,index)=>(
                <Link to={`/${item.media_type || title}/details/${item.id}`} key={index} className='relative w-[30vh] rounded-xl shadow-[8px_17px_38px_rgba(0,0,0,.5)] p-5'> 
                 <img
                className="w-[25vh]  object-fit"
                src={`https://image.tmdb.org/t/p/original/${
                item.poster_path || item.backdrop_path || item.profile_path
              })`}
              alt=""
            />
            <h1 className='text-zinc-400 text-[1.2vw] font-semibold mt-3'> {item.name || item.original_name || item.title || item.original_title}</h1>
            
            {
              item.vote_average && <div className='font-bold absolute right-[-10%] bottom-[25%] rounded-full h-[5vh] w-[5vh]  flex items-center justify-center bg-yellow-400'>
                 <div className="h-[7vh] w-[7vh] bg-green-950  rounded-full flex items-center justify-center">
                  {item.vote_average && (
                    <RatingCircle
                      rating={(item.vote_average).toFixed()}
                    />
                  )}
                </div>
              </div>
            }

              

            </Link>
            ))
        }
    </div>
  )
}

export default Cards    