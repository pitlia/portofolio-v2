import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="container">
      <Header />
      
      <main>
        <Hero />
        {/* Sections will go here */}
      </main>

      {/* Footer will go here */}
    </div>
  );
}

export default App;
