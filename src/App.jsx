import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import People from './components/People'
import Moviedetails from './components/Moviedetails'
import TvDetails from './components/TvDetails'
import PersonDetails from './components/PersonDetails'
import Trailer from './components/template/Trailer'
import About from './components/About'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className='w-[100%] flex  bg-[#1F1E24] min-h-screen'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/popular" element={<Popular/>}/>

        <Route path="/movies" element={<Movies/>}/>
        <Route path='/movie/details/:id' element={<Moviedetails/>}>

          <Route path='/movie/details/:id/trailer' element={<Trailer/>} />

        </Route> 
        
        <Route path="/TV" element={<TvShows/>}/>
        <Route path='/tv/details/:id' element={<TvDetails/>}>
        <Route path='/tv/details/:id/trailer' element={<Trailer/>}/>
        </Route> 
        
        <Route path="/people" element={<People/>}/>
        <Route path='/person/details/:id' element={<PersonDetails/>}/> 

        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      
      </Routes>
    </div>

  )
}

export default App