import React from 'react';
import { Link, NavLink, BrowserRouter, Route } from 'react-router-dom';
import { SinglePhoto } from './redux-stagram/single-photo.component';
import { PhotoGrid } from './redux-stagram/photo-grid.component';

require('./redux-stagram/css/style.css');

export class Reduxstagram extends React.Component {
  render() {
    let parentUrl = this.props.match.url;

    return (
      <div>
        <BrowserRouter>
          <div>
            <h1>
              <Link to={`${parentUrl}`}>Reduxstagram</Link>
            </h1>

            <Link to={`${parentUrl}/single-photo`}>Single Photo</Link>
            <Link to={`${parentUrl}/photo-grid`}>Photo Grid</Link>

            <br />

            <Route exact path={`${parentUrl}`} component={PhotoGrid} />
            <Route path={`${parentUrl}/single-photo`} component={SinglePhoto} />
            <Route path={`${parentUrl}/photo-grid`} component={PhotoGrid} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
