import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/layouts/Header'
import Home from './components/Home'
import Signin from './components/auth/Signin'
import SignUp from './components/auth/SignUp'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     <Header />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/signup" component={SignUp} />
    </Switch>
    </div>

    </Router>
  );
}

export default App;
