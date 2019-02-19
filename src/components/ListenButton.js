import React, { Component } from 'react';
import styled from 'styled-components';

export default class ListenButton extends Component {
  render() {
    const { uri } = this.props;
    return (
      <a href={uri}>
        <Listen type="button">Listen on Spotify</Listen>
      </a>
    );
  }
}

const Listen = styled.button`
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  font-family: 'TheinBold';
  border: none;
  color: #fdfdfd;
  background: #1db954;
  margin: 0 0 50px 0;
  padding: 10px 20px;
  border-radius: 20px;
  line-height: 1;
  transition: 0.3s background;

  &:hover {
    background: #179443;
  }
`;
