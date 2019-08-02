import React from 'react';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import defaults from './graphql/defaults';
import resolvers from './graphql/resolvers';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();
const client = new ApolloClient({
    resolvers,
    cache
});

const initData = () => {
    return client.writeData({
        data: defaults
    });
};

initData();

client.onResetStore(async () => {
    initData();
});
client.onClearStore(async () => {
    initData();
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <AppRouter />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
