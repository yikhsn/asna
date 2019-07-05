import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/store/reducer';
import AppNavigator from './src/navigations/AppNavigator';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppNavigator />
      </Provider>
    );
  }
}
