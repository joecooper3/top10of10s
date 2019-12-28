import React, { Component } from 'react';
import styled from 'styled-components';

import { CSSTransition } from 'react-transition-group';

export default class BigYear extends Component {
  render() {
    const { year } = this.props;
    return <TheYear>{year}</TheYear>;
  }
}

const TheYear = styled.h1`
  font-family: 'Playfair Display';
  font-size: 200px;
  z-index: -1;
  margin-top: -100px;
  position: absolute;
  color: #fdfdfd;
  display: block;
  width: 800px;
  text-align: right;
`;
