import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import data from '../data/data';

class AlbumSingle extends Component {
  state = {
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
    const { pos, year } = match.params;
    const entry = data.filter(item => item.rank == pos && item.year == year)[0]; // eslint-disable-line
    const { artist, album, image, genres } = entry;
    this.setState({ pos, artist, album, image, genres });
  }

  render() {
    const { pos } = this.props;
    const { artist, album, image, genres } = this.state;
    const artUrl = `../images/${image}.jpeg`;
    return (
      <div>
        <Position>#{pos}</Position>
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

const mapStateToProps = state => ({ year: state.yearAndPos.year, pos: state.yearAndPos.pos });

export default connect(mapStateToProps)(AlbumSingle);

const Position = styled.h3`
  color: #fdfdfd;
  font-size: 28px;
  font-family: 'TheinBold';
  background-color: #0c3cb5;
  padding: 10px 30px;
  display: inline-block;
`;
const Genres = styled.h2`
  color: #0c3cb5;
  font-size: 30px;
  margin: 30px 0;
  font-weight: bold;
`;
