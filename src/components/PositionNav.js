import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { changePos } from '../redux/actions';

class PositionNav extends Component {
  constructor(props) {
    super(props);

    this.modifyPos = this.modifyPos.bind(this);
  }

  modifyPos(inp) {
    this.props.changePos(inp);
  }

  render() {
    const posItems = [];
    const { year } = this.props;
    for (let i = 1; i <= 10; i++) {
      const path = `/${year}/${i}`;
      posItems.push(
        <Link to={path} key={i} onClick={() => this.modifyPos(i)}>
          {this.props.pos == i ? <li className="active">{i}</li> : <li>{i}</li>}
        </Link>
      );
    }
    return <ul className="position-nav">{posItems}</ul>;
  }
}

const mapStateToProps = state => ({ year: state.yearAndPos.year, pos: state.yearAndPos.pos });

export default connect(
  mapStateToProps,
  { changePos }
)(PositionNav);
