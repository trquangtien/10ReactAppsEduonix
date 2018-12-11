import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Nav } from './components/nav.component';
import { GithubComponent } from './components/github.component';
import { MovieFindComponent } from './components/movie-find.component';

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
                  <Route exact path="/" component={MovieFindComponent} />
                  <Route path="/github" component={GithubComponent} />
                  <Route path="/movie-find" component={MovieFindComponent} />
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
