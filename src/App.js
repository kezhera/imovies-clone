import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
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
        </Switch>
      </Router>
    </main>
  );
}

export default App;
