import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {HashRouter, Route, Switch} from 'react-router-dom';
import SongList from './components/SongList';
import App from './components/App'
import SongCreate from './components/SongCreate'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route path="/" component={() => <App />} exact />
          <Route path="/songs" exact component={() => <SongList />} />
          <Route path="/songs/new" exact component={() => <SongCreate />} />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
