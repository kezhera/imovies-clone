import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import request from './request';
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieSection from "./components/MovieSection/MovieSection";

function App() {
  return (
    <main className="application">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Banner />
            <MovieList movieType={request?.fetchUpcoming} blockTitle="Soon Add" slideNum={4} />
            <MovieList movieType={request?.fetchRomanceMovies} blockTitle="Romance Movies" bgImage={'./img/cola-banner.png'} slideNum={3} large pl370 dark/>
            <MovieList movieType={request?.fetchDocumentaries} blockTitle="Documentaries Movies" slideNum={4}/>
            <MovieList movieType={request?.fetchHorrorMovies} blockTitle="New Episodes" bgImage={'./img/demonslayer.webp'} slideNum={3} large pl370 whiteTxt/>
            {/* page structure */}
            <MovieSection movieType={request?.fetchPopular} numberMovies={12} />
            <MovieList movieType={request?.fetchUpcoming} blockTitle="Horror Movies" bgImage={'./img/banner2.svg'} slideNum={4} large/>
            <MovieList movieType={request?.fetchComedyMovies} blockTitle="Comedy Movies" slideNum={4}/>
          </Route>

          {/* <Route path="/" exact>
            <Header />
            <section className="content">
              <Banner />
              <MovieList movieType={request?.fetchUpcoming} blockTitle="Soon Add" slideNum={4}/>
              <MovieList movieType={request?.fetchRomanceMovies} blockTitle="Romance Movies" bgImage={Img} slideNum={3} large pl370 dark/>
              <MovieList movieType={request?.fetchDocumentaries} blockTitle="Documentaries Movies" slideNum={4}/>
              <MovieList movieType={request?.fetchHorrorMovies} blockTitle="New Episodes" bgImage={demonslayerIMG} slideNum={3} large pl370 whiteTxt/>
              <Popular />
              <MovieList movieType={request?.fetchUpcoming} blockTitle="Horror Movies" bgImage={banner2} slideNum={4} large/>
              <MovieList movieType={request?.fetchComedyMovies} blockTitle="Comedy Movies" slideNum={4}/>
            </section>
            <Footer/>
          </Route> */}
        </Switch>
      </Router>
    </main>
  );
}

export default App;
