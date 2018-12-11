import { Dispatcher } from 'flux';

var AppDispatcher = Object.assign(new Dispatcher(), {
  handleViewAction(action) {
    console.log(`AppDispatcher - handleViewAction method`, action);
    
    var payload = {
      source: 'VIEW_ACTION',
      action: action
    };

    this.dispatch(payload);
  }
});

export default AppDispatcher;
