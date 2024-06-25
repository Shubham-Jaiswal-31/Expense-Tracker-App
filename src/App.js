// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import HeroSection from './components/HeroSection.js';
import AddExpenseForm from './components/AddExpenseForm.js'
import ExpenseList from './ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <section id="home">
          <HeroSection />
        </section>
        <section id="expenses">
          <ExpenseList expenses={expenses} setExpenses={setExpenses} />
        </section>
        <section id="add-expense">
          <AddExpenseForm />
        </section>
      </div>
    </div>
  );
}

export default App;
