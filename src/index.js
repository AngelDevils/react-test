import React from 'react';
import reactDOM from 'react-dom';
import Route from '@router/index.js';
import store from '@store/store';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import '@assets/base.css';

const render = Component => {
    reactDOM.render(
        //绑定redux、热加载
        <Provider store={store}>
            <AppContainer>
                <Route />
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    );
};

render(Route);

if (module.hot) {
    module.hot.accept('./router', () => {
        render(Route);
    });
}