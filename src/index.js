import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {reduceApp} from "./reducers";
import {fetchCustomers} from "./actions";
import {createLogger} from "redux-logger";
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();
const store = createStore(reduceApp, applyMiddleware(thunkMiddleware, loggerMiddleware));
/*
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter("SHOW_COMPLETED"))
*/
store.dispatch(fetchCustomers());
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
