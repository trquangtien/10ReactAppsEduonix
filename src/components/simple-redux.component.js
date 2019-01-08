import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './simple-redux/store';
import * as actions from './simple-redux/actions';
import { bindActionCreators } from '../../../../../../../Users/admin/AppData/Local/Microsoft/TypeScript/3.1/node_modules/redux';

export class SimpleRedux extends React.Component {
  increase() {
    console.log('increase!!!');
    this.props.doIncrease();
  }

  decrease() {
    console.log('decrease!!!');
    this.props.doDecrease();
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Simple Redux</h1>
          <div>
            <h2>Number: {this.props.currentNumber}</h2>
            <button className="btn btn-primary" style={{ margin: '2px' }} onClick={this.increase.bind(this)}>
              Increase
            </button>
            <button className="btn btn-danger" onClick={this.decrease.bind(this)}>
              Decrease
            </button>
          </div>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  currentNumber: state.currentNumber
});

export default connect(
  mapStateToProps,
  actions
)(SimpleRedux);
