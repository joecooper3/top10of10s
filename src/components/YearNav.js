import React from 'react';
import { withRouter } from 'react-router-dom';

import { useStore } from '../store/AppStore';

const YearNav = props => {
  const yearItems = [];
  const { state, dispatch } = useStore();

  const redirect = year => {
    const path = `/${year}/1`;
    dispatch({ type: 'changeYear', payload: year });
    props.history.push(path);
  };

  for (let i = 2019; i >= 2010; i--) {
    yearItems.push(
      <a
        key={i}
        onClick={() => redirect(i)}
        onKeyPress={() => redirect(i)}
        role="button"
        tabIndex={0}
        className={state.currentYear === i ? 'active' : ''}
      >
        <li>{i}</li>
      </a>
    );
  }

  return <ul className="year-nav">{yearItems}</ul>;
};

export default withRouter(YearNav);
