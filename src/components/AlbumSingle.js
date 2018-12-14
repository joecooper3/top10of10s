import React, { Component } from 'react';
import data from '../data/data';

class AlbumSingle extends Component {
  state = {
    pos: 0,
    year: 2018,
    artist: '',
    album: ''
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
    const entry = data.filter(item => item.rank == pos && item.year === this.state.year)[0];
    const { artist, album, year } = entry;
    this.setState({ pos, artist, album, year });
  }

  render() {
    const { pos, artist, album } = this.state;
    return (
      <div>
        <h3>#{pos}</h3>
        <h1>
          {artist} - {album}
        </h1>
      </div>
    );
  }
}

export default AlbumSingle;
