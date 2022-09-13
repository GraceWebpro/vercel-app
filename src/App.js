import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Music from './components/music/Music';
import Footer from './components/footer/Footer';
import AdminLogin from './components/admin/AdminLogin';
import News from './components/news/News';
import Home from './components/home/Home';
import Video from './components/video/Video';
import NewsDetail from './components/news/NewsDetail';

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <Header />
        <Switch>
            <Route exact path='/login' component={AdminLogin} />
        </Switch>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
        <Switch>
          <Route exact path='/music' component={Music}/>
        </Switch>
        <Switch>
          <Route exact path='/news' component={News}/>
        </Switch>
        <Switch>
          <Route exact path='/news/:id' component={NewsDetail}/>
        </Switch>
        <Switch>
          <Route exact path='/video' component={Video}/>
        </Switch>
        <Switch>
          <Route exact path='/contact' component={Home}/>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
