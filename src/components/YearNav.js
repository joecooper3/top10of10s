import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeYear } from '../redux/actions';

class YearNav extends Component {
  constructor(props) {
    super(props);

    this.modifyYear = this.modifyYear.bind(this);
  }

  modifyYear(inp) {
    this.props.changeYear(inp);
  }

  render() {
    const yearItems = [];
    const { pos } = this.props;
    for (let i = 2018; i >= 2010; i--) {
      const path = `/${i}/${pos}`;
      yearItems.push(
        <Link to={path} key={i} onClick={() => this.modifyYear(i)}>
          <li>{i}</li>
        </Link>
      );
    }
    return <ul className="year-nav">{yearItems}</ul>;
  }
}

const mapStateToProps = state => ({ year: state.yearAndPos.year, pos: state.yearAndPos.pos });

export default connect(
  mapStateToProps,
  { changeYear }
)(YearNav);
