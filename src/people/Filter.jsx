import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/people'


class Filter extends Component {

  render() {
    const { onInputChange, query } = this.props
    return (
      <div className='App-box'>
        <input
          placeholder="...search..."
          onChange={(e) => onInputChange(e.target.value)}
          value={query}
        ></input>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  query: state.browse.filterQuery
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onInputChange: (input) => dispatch(actions.searchQuery(input))
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
