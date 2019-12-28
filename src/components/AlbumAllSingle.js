import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { changePos, changeYear, changeView } from '../redux/actions';

class AlbumAllSingle extends Component {
  render() {
    const { artist, album, albumArt, pos, year } = this.props;
    const artUrl = `../images/${albumArt}.jpeg`;
    const path = `/${year}/${pos}`;
    return (
      <div>
        <Link to={path} onClick={() => this.props.changeView('single')}>
          <Container>
            <Overlay>{pos}</Overlay>
            <AlbumArt src={artUrl} alt={`${artist} - ${album}`} />
          </Container>
        </Link>
        <Meta>
          {artist} - {album}
        </Meta>
      </div>
    );
  }
}

const mapStateToProps = state => ({ year: state.yearAndPos.year, view: state.viewMode.view });

export default connect(
  mapStateToProps,
  { changePos, changeYear, changeView }
)(AlbumAllSingle);

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 128px;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: #fdfdfd;
  color: #0c3cb5;
  z-index: 2;
  position: absolute;
  transition: 0.3s opacity;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 250px;

  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const AlbumArt = styled.img`
  width: 100%;
`;

const Meta = styled.div`
  color: #0c3cb5;
  margin: 20px 0;
  font-family: 'TheinBold';
  text-align: center;
  font-size: 20px;
`;
