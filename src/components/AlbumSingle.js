import React, { Component } from 'react';
import styled from 'styled-components';

import data from '../data/data';

class AlbumSingle extends Component {
  state = {
    pos: 0,
    year: 2018,
    artist: '',
    album: '',
    image: '',
    genres: ''
  };

  componentDidMount() {
    this._updateData();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const { url } = match;
    if (prevProps.match.url !== url) {
      this._updateData();
    }
  }

  _updateData() {
    const { match } = this.props;
    const { pos } = match.params;
    const entry = data.filter(item => item.rank == pos && item.year === this.state.year)[0]; // eslint-disable-line
    const { artist, album, year, image, genres } = entry;
    this.setState({ pos, artist, album, year, image, genres });
  }

  render() {
    const { pos, artist, album, image, genres } = this.state;
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
  }
}

export default AlbumSingle;

const Genres = styled.h2`
  color: #0c3cb5;
  font-size: 30px;
  margin: 30px 0;
  font-weight: bold;
`;
