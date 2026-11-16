import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import PageLayout from "./components/PageLayout/PageLayout.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="app">
        <Navbar />
        <PageLayout />
        <Footer />
    </div>
  )
}

export default App
