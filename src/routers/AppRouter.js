import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';
import PageSingleMovie from '../pages/PageSingleMovie';
import { APP_FOLDER_NAME } from '../globals/globals';

function App() {
  return (
    <Router basename={ APP_FOLDER_NAME }>
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
