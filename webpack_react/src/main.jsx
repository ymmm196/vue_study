import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import store from './store';
import { Provider } from 'react-redux';
render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,


    document.querySelector('#app')
)