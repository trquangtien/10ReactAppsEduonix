import React from 'react';

export class Repo extends React.Component {
  render() {
    const repo = this.props.repo;
    return (
      <li className="list-group-item">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </li>
    );
  }
}
