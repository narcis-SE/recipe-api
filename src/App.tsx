import { Header } from './components/Header';
import './App.css';
import { SearchForm } from './components/SearchForm';
import { ResultList } from './components/ResultList';

function App() {
  return (
    <div className="App">

      <Header />

      <SearchForm />

      <ResultList />
      
      </div>
  );
}


export default App;
