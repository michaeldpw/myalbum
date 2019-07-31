import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import AlbumDetail from './pages/AlbumDetail';
import Upload from './pages/Upload';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/upload" component={Upload}></Route>
          <Route exact path="/:albumname" component={AlbumDetail}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
