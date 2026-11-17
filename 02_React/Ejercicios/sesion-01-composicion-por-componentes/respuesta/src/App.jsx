import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import PageLayout from "./components/PageLayout/PageLayout.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MovieGrid from "./components/MovieGrid/MovieGrid.jsx";
import { genres, movies } from "./data/movies.js";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Estrenos", href: "#estrenos" },
  { label: "Géneros", href: "#géneros" },
  { label: "Contacto", href: "#contacto" },
];

const featuredMovie = movies[0];
const year = new Date().getFullYear();

function App() {
  return (
    <div className="app">
      <Navbar links={links} />
      <PageLayout genres={genres} featuredMovie={featuredMovie}>
        <MovieGrid movies={movies} />
      </PageLayout>
      <Footer year={year} />
    </div>
  );
}

export default App;
