import './style/style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {HashRouter, Route, Switch} from 'react-router-dom';
import SongList from './components/SongList';
import App from './components/App'
import SongCreate from './components/SongCreate'
import SongDetail from './components/SongDetail'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <App>
            <Route path="/" exact component={SongList} />
            <Route path="/songs/new" exact component={SongCreate} />
            <Route path="/songs/:id" exact component={SongDetail} />
          </App>
        </Switch>
      </HashRouter>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
