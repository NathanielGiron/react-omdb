const React = require('react');

const ShowMovie = React.createClass({
  render: function() {
    return (
      <div>
        <h1>imdbID: {this.props.params.imdbID}</h1>
      </div>
    );
  }
});

module.exports = ShowMovie;