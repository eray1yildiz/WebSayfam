import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
