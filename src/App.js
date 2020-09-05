import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/home';
import Detail from './routes/Detail';
import About from './routes/about';
import Navigation from './component/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}


export default App;
