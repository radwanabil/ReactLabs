import React from 'react'
import {useEffect,useState} from 'react';
import { NavLink } from "react-router-dom";
import './style.css';
const API_URL = "http://localhost:3500/artists";
export default function Artists() {
  const [artists, setArtists] = useState([]);
  const getArtists = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setArtists(data);
    // }

  console.log(data);
  }
      useEffect(() => {
            getArtists()
     
  }, []);
  return (
    <div className='content'>
      <div className='back'>
        <NavLink className="header" to={"/"}>Music DB</NavLink>
        <hr></hr>
      </div>
      <div className='artists-all w-25 d-flex justify-content-center'>
        {/* <div className='container d-flex justify-content-center'> */}
                        {artists.map((artist) => (
                                <div key={artist.id}>
                                <img
                                  src={process.env.PUBLIC_URL + `/${artist.id}.jpg`}
                              alt={artist.name}
                              className='artist-image w-100'
                            />
                            <br></br>
                              <NavLink to={`/artists/${artist.id}`} className="artist-name"> {artist.name}</NavLink>
                              </div>
                        ))}
                    {/* </div> */}
        </div>
    </div>
    
  )
}
