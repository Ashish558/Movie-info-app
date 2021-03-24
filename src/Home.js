
import React from 'react'
import SearchBar from './components/SearchBar'
import Status from './components/Status'

function Home(){
 console.log("home")
 return(
 <div className="home-page">
    <SearchBar />
    <Status />
</div>
 )
  
}

export default Home