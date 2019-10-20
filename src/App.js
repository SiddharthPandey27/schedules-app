import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Dashboard from './components/dashboard/Dashboard';

const client = new ApolloClient({
  uri: "https://api.devcdc.com/cricket",
});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Route 
            render={({ location }) => {
              return (
                <div className="App">
                  <Switch location={location}>
                    <Route exact path='/' component={Dashboard} />
                  </Switch>
                </div>
              );
            }}
          />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
