import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducers from './redux/reducers/rootReducer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MobileDetails from './components/pages/MobileDetails';
import promiseMW from 'redux-promise';
import ExplorePage from './components/pages/ExplorePage';
import SettingsPage from './components/pages/SettingsPage';
import Myfile from './components/pages/Compare';
import ComparisonTable from './components/pages/ComparisonTable';
const createStoreWM = applyMiddleware(promiseMW)(createStore);
const App = () => {
  return (
    <Provider store={createStoreWM(rootReducers)}>
      {/* <Header /> */}
      <Router>         

          <Switch>
            <Route exact path="/" component={ExplorePage} />
            <Route exact path="/tt" component={Myfile} />
            <Route exact path="/Comparison" component={ComparisonTable} />

            {/* <Route exact path="/s" component={SettingsPage} /> */}
            <Route exact path="/mobiles/:id" component={MobileDetails} />

          </Switch>
      </Router>
    </Provider>
  );
};

export default App;
