import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import NewsPage from './pages/News'
import Contact from './pages/Contact'
import FeaturePage from './pages/Feature'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/features' component={FeaturePage} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/news' component={NewsPage} />
        <Route  component={() =><h1> Page Not Found!! : - ()</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
