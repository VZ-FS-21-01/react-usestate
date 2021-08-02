import './App.css';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Blog from './components/Blog';
import BlogItem from './components/BlogItem';
import Hooks from './components/Hooks';

function App() {
  return (
    <Router>

      <Nav />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/hooks" component={Hooks} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} exact />
        <Route path="/blog/:id" component={BlogItem} />
        <Route component={NotFound} />
      </Switch>


    </Router>
  );
}

export default App;
