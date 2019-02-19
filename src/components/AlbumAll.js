import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { changePos, changeYear, changeView } from '../redux/actions';
import data from '../data/data';

import AlbumAllSingle from './AlbumAllSingle';
import BigYear from './BigYear';

class AlbumAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumArr: []
    };
    this._keyboardNav = this._keyboardNav.bind(this);
    this._updateData = this._updateData.bind(this);
  }

  componentDidMount() {
    const { match, year, view } = this.props;
    const newYear = parseInt(match.params.year);
    if (year !== newYear) {
      this.props.changeYear(year);
    }
    if (view !== 'all') {
      this.props.changeView('all');
    }
    this._updateData(newYear);
    document.addEventListener('keydown', this._keyboardNav, false);
  }

  componentDidUpdate(prevProps) {
    const { match, year } = this.props;
    const { url } = match;
    if (prevProps.match.url !== url) {
      this._updateData(year);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._keyboardNav);
  }

  _keyboardNav(inp) {
    const { history, year } = this.props;
    switch (inp.code) {
      case 'ArrowLeft':
        inp.preventDefault();
        if (year < 2018) {
          history.push(`/${year + 1}/all`);
          this._updateData(year + 1);
          this.props.changePos(1);
          this.props.changeYear(year + 1);
        }
        break;
      case 'ArrowRight':
        inp.preventDefault();
        if (year > 2010) {
          history.push(`/${year - 1}/all`);
          this._updateData(year - 1);
          this.props.changePos(1);
          this.props.changeYear(year - 1);
        }
        break;
      default:
    }
  }

  _updateData(year) {
    const entries = data.filter(item => item.year == year); // eslint-disable-line
    function sortLogic(a, b) {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    }
    const sortedEntries = entries.sort(sortLogic);
    this.setState({ albumArr: sortedEntries });
  }

  render() {
    const { year } = this.props;
    const { albumArr } = this.state;
    const albumJsx = albumArr.map(inp => (
      <AlbumAllSingle artist={inp.artist} album={inp.album} pos={inp.rank} albumArt={inp.image} />
    ));
    return (
      <React.Fragment>
        <BigYear year={year} />
        <GridContainer>{albumJsx}</GridContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ year: state.yearAndPos.year, pos: state.yearAndPos.pos });

export default connect(
  mapStateToProps,
  { changePos, changeYear, changeView }
)(AlbumAll);

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-gap: 25px;
  margin: 150px 0 50px 0;
`;
