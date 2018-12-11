import AppDispatcher from './../dispatcher/app-dispatcher';
import AppConstants from './../constants/app-constants';
import AppAPI from './../utils/appAPI';
import { EventEmitter } from 'events';

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStores = Object.assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.actionType) {
    case AppConstants.SEARCH_MOVIE:
      console.log(`AppDispatcher.register switch case actionType`);
      AppStores.emit(CHANGE_EVENT);
      break;

    default:
      break;
  }

  return true;
});

export default AppStores;
