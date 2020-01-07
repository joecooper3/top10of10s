import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { blue, white } from '../styles/Variables';
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
      <ListItem>
        <PosButton
          key={i}
          onClick={() => redirect(i)}
          onKeyPress={() => redirect(i)}
          role="button"
          tabIndex={0}
          className={state.currentPos === i ? 'active' : ''}
        >
          {i}
        </PosButton>
      </ListItem>
    );
  }
  return (
    <NavContainer>
      {posItems}
      <ShowAllButton type="button">Show All</ShowAllButton>
    </NavContainer>
  );
};

export default withRouter(PositionNav);

const NavContainer = styled.ul`
  grid-column-start: 1;
  grid-row-start: 2;
`;

const ListItem = styled.li`
  padding-left: 20px;
`;

const PosButton = styled.button`
  background: ${blue};
  font-weight: 700;
  color: ${white};
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 80px;
  transform: translateX(-20px);
  cursor: pointer;
`;

const ShowAllButton = styled.button`
  background: ${white};
  color: ${blue};
  font-weight: 700;
`;
