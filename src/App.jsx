import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Header />
      
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        {/* Sections will go here */}
      </main>

      {/* Footer will go here */}
    </div>
  );
}

export default App;
