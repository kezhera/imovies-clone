import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie/Movie";
import Movies from "./pages/Movies/Movies";

function App() {
  return (
    <main className="application">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/:id">
            <Movie />
          </Route>

          {/*404 page */}
          {/* <Route path="*">
            <NoMatch />
          </Route> */}
        </Switch>
      </Router>
    </main>
  );
}

export default App;
