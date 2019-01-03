import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class YearNav extends Component {
  render() {
    const yearItems = [];
    for (let i = 2018; i >= 2010; i--) {
      const path = `/${i}`;
      yearItems.push(
        <Link to={path} key={i}>
          <li>{i}</li>
        </Link>
      );
    }
    return <ul className="year-nav">{yearItems}</ul>;
  }
}

export default YearNav;
