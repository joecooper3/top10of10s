import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import data from '../data/data';

const AlbumSingle = () => {
  const [albumData, setAlbumData] = useState({
    pos: 0,
    year: 2018,
    artist: '',
    album: '',
    image: '',
    genres: ''
  });
  const { pos, artist, album, image, genres } = albumData;
  const { routePos, routeYear } = useParams();

  useEffect(() => {
    const entry = data.filter(item => item.rank == routePos && item.year == routeYear)[0]; // eslint-disable-line
    setAlbumData({
      pos: routePos,
      artist: entry.artist,
      album: entry.album,
      year: entry.year,
      image: entry.image,
      genres: entry.genres
    });
  }, [routePos, routeYear]);

  const artUrl = `../images/${image}.jpeg`;
  return (
    <div>
      <h3>#{pos}</h3>
      <h1>
        {artist} - {album}
      </h1>
      <div className="image-container">
        <img src={artUrl} alt={`${artist} - ${album}`} />
      </div>
      <Genres>{genres}</Genres>
    </div>
  );
};

export default AlbumSingle;

const Genres = styled.h2`
  color: #0c3cb5;
  font-size: 30px;
  margin: 30px 0;
  font-weight: bold;
`;
