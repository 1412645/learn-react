import React, { Suspense, lazy, useEffect, Fragment, useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import "./App.css";
import axios from "./helpers/customAxios";
import fetchApi from "./helpers/fetch";

import Loading from "./components/loading";
import PrivateRouter from "./router/PrivateRouter";
const HomePage = lazy(() => import("./modules/home/home"));
const NewsPage = lazy(() => import("./modules/news/news"));
const ContextPage = lazy(() => import("./modules/pageContext/pageContext"));
const ReduxPage = lazy(() => import("./modules/pageRedux/pageRedux"));
const InterviewPage = lazy(() => import("./modules/interview/interview"));
const GridLayout = lazy(() => import("./modules/gridLayout/gridLayout"));
const IndexedDB = lazy(() => import("./modules/indexedDB/indexedDB"));
const PageReduxWrapper = lazy(() =>
  import("./modules/pageRedux/pageReduxWrapper")
);
const ErrorBoundaryPage = lazy(() =>
  import("./modules/errorBoundary/errorBoundary")
);

function App() {
  const [list, setList] = useState([]);
  const fetchData = async () => {
    // const data = await axios.get("/userss");
    // console.log(data);

    const data1 = await fetchApi("/users", "GET");
    console.log("data1: ", data1);
    setList(data1.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <h1>DEMO STUDY REACTJS</h1>
          <Router>
            <Nav>
              <NavItem>
                <Link to="/">Home page</Link>
              </NavItem>
              <NavItem>
                <Link to="/news">News page</Link>
              </NavItem>
              <NavItem>
                <Link to="/context-page">Context page</Link>
              </NavItem>
              <NavItem>
                <Link to="/redux-page">Redux page</Link>
              </NavItem>
              <NavItem>
                <Link to="/interview-page">Interview page</Link>
              </NavItem>
              <NavItem>
                <Link to="/grid-layout">GridLayout</Link>
              </NavItem>
              <NavItem>
                <Link to="/indexedDB">IndexedDB</Link>
              </NavItem>
              <NavItem>
                <Link to="/error-boundary">Error Boundary</Link>
              </NavItem>
            </Nav>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <PrivateRouter isAuthenticated={false} path="/news">
                  <NewsPage />
                </PrivateRouter>
                <Route path="/context-page">
                  <ContextPage />
                </Route>
                <Route path="/redux-page">
                  <PageReduxWrapper />
                </Route>
                <Route path="/interview-page">
                  <InterviewPage />
                </Route>
                <Route path="/grid-layout">
                  <GridLayout />
                </Route>
                <Route path="/indexedDB">
                  <IndexedDB />
                </Route>
                <Route path="/error-boundary">
                  <ErrorBoundaryPage />
                </Route>
              </Switch>
            </Suspense>
          </Router>
        </div>
      </PersistGate>

      {/* <div>
        {list.map((item) => {
          return (
            <Fragment key={item.id}>
              <span>{item.name}</span>&nbsp;
              <span>{item.email}</span>
              <br />
            </Fragment>
          );
        })}
      </div> */}
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
