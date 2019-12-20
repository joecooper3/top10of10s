import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const YearNav = () => {
  const yearItems = [];
  const currentPos = 1;

  for (let i = 2019; i >= 2010; i--) {
    const path = `/${i}/${currentPos}`;
    yearItems.push(
      <Link to={path} key={i}>
        <li>{i}</li>
      </Link>
    );
  }

  return <ul className="year-nav">{yearItems}</ul>;
};

export default YearNav;
