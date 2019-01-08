import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Nav } from './components/nav.component';
import { GithubComponent } from './components/github.component';
import { MovieFindComponent } from './components/movie-find.component';
import { Reduxstagram } from './components/redux-stagram.component';
import { SimpleRedux } from './components/simple-redux.component';
import SimpleStore from './components/simple-store.component';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <br />

            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Route exact path="/" component={SimpleStore} />
                  <Route path="/github" component={GithubComponent} />
                  <Route path="/movie-find" component={MovieFindComponent} />
                  <Route path="/reduxstagram" component={Reduxstagram} />
                  <Route path="/simple-redux" component={SimpleRedux} />
                  <Route path="/simple-store" component={SimpleStore} />
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
