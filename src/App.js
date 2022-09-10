import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Music from './components/music/Music';
import Footer from './components/footer/Footer';
import AdminLogin from './components/admin/AdminLogin';

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <Header />
        <Switch>
            <Route exact path='/login' component={AdminLogin} />
          </Switch>
        <Switch>
          <Route exact path='/music' component={Music}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
