import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PositionNav extends Component {
  render() {
    console.log(this.props);
    const posItems = [];
    for (let i = 1; i <= 10; i++) {
      const path = `/${i}`;
      posItems.push(
        <Link to={path} key={i}>
          <li>{i}</li>
        </Link>
      );
    }
    return <ul className="position-nav">{posItems}</ul>;
  }
}

export default PositionNav;
