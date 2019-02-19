import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { changePos, changeView } from '../redux/actions';

class PositionNav extends Component {
  constructor(props) {
    super(props);

    this.numberClick = this.numberClick.bind(this);
  }

  numberClick(inp) {
    const { view } = this.props;
    this.props.changePos(inp);
    if (view !== 'single') {
      this.props.changeView('single');
    }
  }

  render() {
    const posItems = [];
    const { pos, year, view } = this.props;
    for (let i = 1; i <= 10; i++) {
      const path = `/${year}/${i}`;
      posItems.push(
        <Link to={path} key={i} onClick={() => this.numberClick(i)}>
          {pos === i && view === 'single' ? <li className="active">{i}</li> : <li>{i}</li>}
        </Link>
      );
    }
    return (
      <ul className="position-nav">
        {posItems}
        {view === 'all' ? (
          <Link to={`/${year}/1`} onClick={() => this.numberClick(1)}>
            <li className="see-all active">See all</li>
          </Link>
        ) : (
          <Link to={`/${year}/all`}>
            <li className="see-all">See all</li>
          </Link>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  year: state.yearAndPos.year,
  pos: state.yearAndPos.pos,
  view: state.viewMode.view
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePos,
      changeView
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionNav);
