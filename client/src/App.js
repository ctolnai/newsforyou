import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import LatestNews from './pages/LatestNews'
import Entertainment from './pages/Entertainment';
import Politics from './pages/Politics';
import Sports from './pages/Sports';




const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      
      <Router>
        <div className="app flex-column justify-flex-start min-100-vh">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/latestnews">
              <LatestNews />
            </Route>
            <Route exact path="/entertainment">
              <Entertainment />
            </Route>
            <Route exact path="/politics">
              <Politics />
            </Route>
            <Route exact path="/sports">
              <Sports />
            </Route>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
