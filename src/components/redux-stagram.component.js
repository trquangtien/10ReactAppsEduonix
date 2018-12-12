import React from 'react';
import { Link } from 'react-router-dom';
require('./redux-stagram/css/style.css');

export class Reduxstagram extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
      </div>
    );
  }
}
