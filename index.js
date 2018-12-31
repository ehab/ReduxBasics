/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);

import {createStore} from 'redux';


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state += action.payload;
      break;
    case 'SUBTRACT':
      state -= action.payload;
       break;
  }

  return state;
};

const store = createStore(reducer,1);

// this z triggered out whenever store z being updated
store.subscribe(()=>{
  console.log(`store z updated ${store.getState()}`);
});

store.dispatch({
  type: 'ADD',
  payload: 10
});

store.dispatch({
  type: 'SUBTRACT',
  payload: 9
});

AppRegistry.registerComponent(appName, () => App);
