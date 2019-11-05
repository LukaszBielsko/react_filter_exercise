import React, { Component } from 'react';
import { connect } from 'react-redux';

class People extends Component {

  renderPerson = (person) =>
    <div
      className="App-box"
      key={person.id}>
      {person.name}
    </div>

  displayPeopleList = (list) => {

    if (this.props.query) {
      const query = this.props.query.toUpperCase()
      const queriedList = list.filter(person => person.name.toUpperCase().includes(query))
      return queriedList.map(person => this.renderPerson(person))
    } else {
      return list.map(person => this.renderPerson(person))
    }
  };

  render() {
    const { people } = this.props
    return (
      <div>
        {this.displayPeopleList(people)}
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  people: state.browse.people,
  query: state.browse.filterQuery
});


export default connect(mapStateToProps, null)(People);
