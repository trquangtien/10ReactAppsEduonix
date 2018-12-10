import React from 'react';

export class Search extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    console.log(`onSubmit method executed!`);
    let username = this.refs.username.value.trim();
    if (username) {
      this.props.onFormSubmit(username);
      this.refs.username.value = '';
    } else {
      alert('Please enter username');
      return;
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Search Github User</label>
        <input type="text" ref="username" className="form-control" />
      </form>
    );
  }
}
