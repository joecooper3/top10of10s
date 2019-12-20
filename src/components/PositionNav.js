import React from 'react';
import { Link } from 'react-router-dom';

import { useStore } from '../store/AppStore';

const PositionNav = () => {
  const posItems = [];
  // const currentYear = 2019;
  const { state, dispatch } = useStore();

  for (let i = 1; i <= 10; i++) {
    const path = `/${state.currentYear}/${i}`;
    posItems.push(
      <Link to={path} key={i}>
        <li>{i}</li>
      </Link>
    );
  }
  return (
    <ul className="position-nav">
      {posItems}
      <button onClick={() => dispatch({ type: 'changeYear', payload: 2014 })}>yyyyyy</button>
    </ul>
  );
};

export default PositionNav;
