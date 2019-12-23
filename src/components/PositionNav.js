import React from 'react';
import { withRouter } from 'react-router-dom';

import { useStore } from '../store/AppStore';

const PositionNav = props => {
  const posItems = [];
  const { state, dispatch } = useStore();

  const redirect = pos => {
    const year = state.currentYear !== 0 ? state.currentYear : 2019;
    const path = `/${year}/${pos}`;
    dispatch({ type: 'changePos', payload: pos });
    props.history.push(path);
  };

  for (let i = 1; i <= 10; i++) {
    posItems.push(
      <a
        key={i}
        onClick={() => redirect(i)}
        onKeyPress={() => redirect(i)}
        role="button"
        tabIndex={0}
        className={state.currentPos === i ? 'active' : ''}
      >
        <li>{i}</li>
      </a>
    );
  }
  return <ul className="position-nav">{posItems}</ul>;
};

export default withRouter(PositionNav);
