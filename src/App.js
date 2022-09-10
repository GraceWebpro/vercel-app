import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Music from './components/music/Music';

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <Header />
        <Switch>
          <Route exact path='/music' component={Music}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
