import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import './App.css';

import Loading from './components/loading';

const HomePage = lazy(() => import('./modules/home/home'));
const NewsPage = lazy(() => import('./modules/news/news'));
const ContextPage = lazy(() => import('./modules/pageContext/pageContext'));
const ReduxPage = lazy(() => import('./modules/pageRedux/pageRedux'));
const InterviewPage = lazy(() => import('./modules/interview/interview'));
const GridLayout = lazy(() => import('./modules/gridLayout/gridLayout'));
const IndexedDB = lazy(() => import('./modules/indexedDB/indexedDB'));
const PageReduxWrapper = lazy(() =>
  import('./modules/pageRedux/pageReduxWrapper')
);

function App() {
  console.log('App');
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='App'>
          <h1>DEMO STUDY REACTJS</h1>
          <Router>
            <Nav>
              <NavItem>
                <Link to='/'>Home page</Link>
              </NavItem>
              <NavItem>
                <Link to='/news'>News page</Link>
              </NavItem>
              <NavItem>
                <Link to='/context-page'>Context page</Link>
              </NavItem>
              <NavItem>
                <Link to='/redux-page'>Redux page</Link>
              </NavItem>
              <NavItem>
                <Link to='/interview-page'>Interview page</Link>
              </NavItem>
              <NavItem>
                <Link to='/grid-layout'>GridLayout</Link>
              </NavItem>
              <NavItem>
                <Link to='/indexedDB'>IndexedDB</Link>
              </NavItem>
            </Nav>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path='/'>
                  <HomePage />
                </Route>
                <Route path='/news'>
                  <NewsPage />
                </Route>
                <Route path='/context-page'>
                  <ContextPage />
                </Route>
                <Route path='/redux-page'>
                  <PageReduxWrapper />
                </Route>
                <Route path='/interview-page'>
                  <InterviewPage />
                </Route>
                <Route path='/grid-layout'>
                  <GridLayout />
                </Route>
                <Route path='/indexedDB'>
                  <IndexedDB />
                </Route>
              </Switch>
            </Suspense>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
`;

const NavItem = styled.li`
  padding: 5px 10px;
`;

export default App;
