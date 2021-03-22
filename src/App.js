import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Project from './components/Project';
import Social from './components/Social';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={About} path="/about"/>
        <Route component={Contact} path="/contact"/>
        <Route component={Home} path="/" exact/>
        <Route component={Project} path="/project"/>
        <Route component={Social} path="/social"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
