import React from 'react';
import AppActions from './../actions/app-actions';
import axios from 'axios';
import AppStores from './../stores/app-stores';

export class SearchForm extends React.Component {
  componentDidMount() {
    AppStores.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AppStores.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <div className="search-form">
        <h1 className="text-center">Search for a movie</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <input type="text" className="form-control" ref="title" placeholder="Enter a movie title..." />
          </div>
          <button className="btn btn-primary btn-block">Search</button>
        </form>
      </div>
    );
  }

  onChange() {}

  onSubmit($event) {
    $event.preventDefault();
    console.log(`search: ${this.refs.title.value.trim()}`);

    let movie = {
      title: this.refs.title.value.trim()
    };

    AppActions.searchMovies(movie);
  }
}
