// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import HeroSection from './components/HeroSection.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="content">
        <section id="home">
          <h1>Home</h1>
          <p>Welcome to the Expense Tracker app!</p>
        </section>
        <section id="expenses">
          <h1>Expenses List</h1>
          <p>Here you can view your expenses.</p>
        </section>
        <section id="add-expense">
          <h1>Add Expense</h1>
          <p>Add a new expense here.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
