import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home';
import Products from './pages/products';
import Portfolio from './pages/products';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Gallery from './pages/gallery';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/products'} exact component={Products} />
        <Route path={'/gallery'} exact component={Gallery} />
        <Route path={'/portfolio'} exact component={Portfolio} />
        <Route path={'/contact'} exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
