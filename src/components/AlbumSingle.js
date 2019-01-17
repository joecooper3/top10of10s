import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { changePos, changeYear } from '../redux/actions';
import data from '../data/data';

class AlbumSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      album: '',
      image: '',
      genres: ''
    };
    this._keyboardNav = this._keyboardNav.bind(this);
    this._updateData = this._updateData.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const pos = parseInt(match.params.pos);
    const year = parseInt(match.params.year);
    this.props.changePos(pos);
    this.props.changeYear(year);
    this._updateData(pos, year);
    document.addEventListener('keydown', this._keyboardNav, false);
  }

  componentDidUpdate(prevProps) {
    const { match, pos, year } = this.props;
    const { url } = match;
    if (prevProps.match.url !== url) {
      this._updateData(pos, year);
    }
  }

  _keyboardNav(inp) {
    const { history, pos, year } = this.props;
    switch (inp.code) {
      case 'ArrowUp':
        if (pos > 1) {
          inp.preventDefault();
          history.push(`/${year}/${pos - 1}`);
          this._updateData(pos - 1, year);
          this.props.changePos(pos - 1);
        }
        break;
      case 'ArrowDown':
        if (pos < 10) {
          inp.preventDefault();
          history.push(`/${year}/${pos + 1}`);
          this._updateData(pos + 1, year);
          this.props.changePos(pos + 1);
        }
        break;
      case 'ArrowLeft':
        inp.preventDefault();
        if (year < 2018) {
          history.push(`/${year + 1}/1`);
          this._updateData(1, year + 1);
          this.props.changePos(1);
          this.props.changeYear(year + 1);
        }
        break;
      case 'ArrowRight':
        inp.preventDefault();
        if (year > 2010) {
          history.push(`/${year - 1}/1`);
          this._updateData(1, year - 1);
          this.props.changePos(1);
          this.props.changeYear(year - 1);
        }
        break;
      default:
    }
  }

  _updateData(pos, year) {
    const entry = data.filter(item => item.rank == pos && item.year == year)[0]; // eslint-disable-line
    const { artist, album, image, genres } = entry;
    this.setState({ artist, album, image, genres });
  }

  render() {
    const { pos } = this.props;
    const { artist, album, image, genres } = this.state;
    const artUrl = `../images/${image}.jpeg`;
    return (
      <div>
        <TopContainer>
          <Position>#{pos}</Position>
          <h1>
            {artist} - {album}
          </h1>
        </TopContainer>
        <div className="image-container">
          <img src={artUrl} alt={`${artist} - ${album}`} />
        </div>
        <Genres>{genres}</Genres>
      </div>
    );
  }
}

const mapStateToProps = state => ({ year: state.yearAndPos.year, pos: state.yearAndPos.pos });

export default connect(
  mapStateToProps,
  { changePos, changeYear }
)(AlbumSingle);

const TopContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
`;
const Position = styled.h3`
  color: #fdfdfd;
  font-size: 28px;
  font-family: 'TheinBold';
  background-color: #0c3cb5;
  padding: 10px 10px;
  display: inline-block;
  transform: rotate(-10deg);
  margin: 40px 25px 0 -30px;
`;
const Genres = styled.h2`
  color: #0c3cb5;
  font-size: 30px;
  margin: 30px 0;
  font-weight: bold;
`;
