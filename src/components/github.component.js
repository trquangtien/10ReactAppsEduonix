import React from 'react';

import { PropTypes } from 'prop-types';
import axios from 'axios';

import { Profile } from './github/profile.component';
import { Search } from './github/search.component';

const API = 'https://api.github.com';

export class GithubComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'trquangtien',
      userData: [],
      userRepos: [],
      perPage: 10
    };
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }
  /**
   * Get user data
   */
  getUserData() {
    axios
      .get(`${API}/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`)
      .then(res => {
        this.setState({ userData: res.data });
        console.log(res.data);
      })
      .catch(err => {
        this.setState({ username: null });
        console.log(err);
      });
  }

  /**
   * Get user repos
   */
  getUserRepos() {
    axios
      .get(
        `${API}/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${
          this.props.clientSecret
        }&sort=created`
      )
      .then(res => {
        this.setState({ userRepos: res.data });
        console.log(res.data);
      })
      .catch(err => {
        this.setState({ username: null });
        console.log(err);
      });
  }

  handleFormSubmit(username) {
    this.setState({ username: username }, function() {
      this.getUserData();
      this.getUserRepos();
    });
  }

  render() {
    return (
      <div>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
        <Profile userData={this.state.userData} userRepos={this.state.userRepos} />
      </div>
    );
  }
}

GithubComponent.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
};

GithubComponent.defaultProps = {
  clientId: 'fb2d613f59594ffa50b9',
  clientSecret: '1242588bb944b429db49e38d52323687b1f040f0'
};
