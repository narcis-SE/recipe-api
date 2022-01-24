import './App.css';
import Main from './components/Main';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ResultList } from './components/ResultList';
import { FavoriteList } from './components/FavoriteList';
import { Header } from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <nav>
          <Link to="/"></Link>
          <Link to="/main">Home</Link>
          <Link to="/result-list">ResultList</Link>
          <Link to="/favorite-list">Favorite List</Link>
        </nav>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/result-list" element={<ResultList />} />
          <Route path="/favorite-list" element={<FavoriteList />} />
          <Route path="*" element={<Navigate to="/main"/>} />
        </Routes>
      </Router>
      
      {/* <Main /> */}

      </div>
  );
}


export default App;
