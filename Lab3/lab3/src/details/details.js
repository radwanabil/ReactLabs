import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './style.css';
const API_URL = 'http://localhost:3500/artists';

export default function Details() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        setArtist(data);
      } catch (error) {
        console.log('Error fetching artist details:', error);
      }
    };

    fetchArtistDetails();
  }, [id]);

  if (!artist) {
    return <div>Loading...</div>;
  }

    return (
      <div className='all d-flex justify-content-center'>
      <div className='details-content text-center mb-5'>
                <div className='back'>
        <NavLink className="header" to={"/"}>Music DB</NavLink>
        <hr></hr>
      </div>
      
                <img src={process.env.PUBLIC_URL + `/${artist.id}.jpg`} alt={artist.name} className='artist-content w-50 mx-auto' />
                <h2>{artist.name}</h2>
      <p>Genre: {artist.genre}</p>
      <p>Bio: {artist.bio}</p>
      <div className="album-list">
          <h3>Albums:</h3>
          <div>
            {artist.albums.map((album) => (
              <li key={album.albumId}>
                <img
                  src={process.env.PUBLIC_URL + `/${album.cover}.jpg`}
                  alt={album.title}
                  className="album-cover"
                />
              </li>
            ))}
          </div>
        </div>
            </div>
            </div>
  );
}
