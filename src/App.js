import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header"
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Profile from './containers/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route path="/profile" component={Profile} />
          <Route>404 Not Found !</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
