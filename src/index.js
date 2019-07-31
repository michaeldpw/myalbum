import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/rootReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import App from './App';

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
 );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

