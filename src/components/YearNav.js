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
    this.props.changeYear(inp); // eslint-disable-line
  }

  render() {
    const yearItems = [];
    const { pos, year, view } = this.props;
    for (let i = 2018; i >= 2010; i--) {
      let path;
      if (view === 'single') {
        path = `/${i}/${pos}`;
      } else {
        path = `/${i}/all`;
      }
      yearItems.push(
        <Link to={path} key={i} onClick={() => this.modifyYear(i)}>
          {year === i ? <li className="active">{i}</li> : <li>{i}</li>}
        </Link>
      );
    }
    return <ul className="year-nav">{yearItems}</ul>;
  }
}

const mapStateToProps = state => ({
  year: state.yearAndPos.year,
  pos: state.yearAndPos.pos,
  view: state.viewMode.view
});

export default connect(
  mapStateToProps,
  { changeYear }
)(YearNav);
