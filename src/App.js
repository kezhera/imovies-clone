import './App.css';
import './index.css';
import Footer from './components/bigComponents/Footer';
import Header from './components/bigComponents/Header';
import MovieList from './components/bigComponents/MovieList';
import Banner from './components/smallComponents/Banner';
import Popular from './components/smallComponents/Popular';
import request from './request';
import Img from './img/cola-banner.png'
import demonslayerIMG from './img/demonslayer.webp'
import banner2 from './img/banner2.svg'
function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Banner />
        <MovieList movieType={request?.fetchUpcoming} blockTitle="Soon Add" slideNum={4}/>
        <MovieList movieType={request?.fetchRomanceMovies} blockTitle="Romance Movies" bgImage={Img} slideNum={3} large pl370 dark/>
        <MovieList movieType={request?.fetchDocumentaries} blockTitle="Documentaries Movies" slideNum={4}/>
        <MovieList movieType={request?.fetchHorrorMovies} blockTitle="New Episodes" bgImage={demonslayerIMG} slideNum={3} large pl370 whiteTxt/>
        <Popular />
        <MovieList movieType={request?.fetchUpcoming} blockTitle="Horror Movies" bgImage={banner2} slideNum={4} large/>
        <MovieList movieType={request?.fetchComedyMovies} blockTitle="Comedy Movies" slideNum={4}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
