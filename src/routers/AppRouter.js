import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';
import PageSingleMovie from '../pages/PageSingleMovie';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <main>
            <Switch>
              <Route path="/" exact ><PageHome /></Route>
              <Route path="/about"><PageAbout /></Route>
              <Route path="/favs"><PageFavs /></Route>
              <Route path="/movie/:id"><PageSingleMovie /></Route>
            </Switch>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
