import React from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../context';

const Movies = ({Title, Year, Poster, Type }) => {

   const { specificSearch } = useGlobalContext()

   return (
      <div className="card-body">
        <div className='card-img-container'>
           <img className="card-img" src={Poster} alt="Movie Poster" />
        </div>
        <div className='card-title-container'>
           <h4 className="card-title">{Title}</h4>
        </div>
  

         <div className="overlay">
            <div className="contents">
               <h4 className="card-title">{Title}</h4>
               <p className="card-text year">{Year}</p>
               <p className="card-text">{Type}</p>
               <Link to={'singleMovie/' + Title } >
                  <button /*onClick={() => specificSearch(Title)}*/ >See More</button>
               </Link>
            </div>
         </div>

      </div>
   )
}

export default Movies
