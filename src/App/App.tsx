import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { FormaLibreExample } from './FormaLibreExample/FormaLibreExample';
import { Home } from './Home';

export const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/formalibre' component={FormaLibreExample} />
      <Route path="*" component={() => <>404</>} />
    </Switch>
  </Router>
);
