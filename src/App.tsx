import './App.css';
import Main from './components/Main';
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom"
import ListOfFavorites from './components/ListOfFavorites';


function App() {
  return (
    <div className="App">
      <Router>
                <nav >
                  <Link to="/">Home</Link>
                  <Link to="/favorites">Favorites</Link>
                </nav>
            <Routes>
                <Route path="/favorites" element={<ListOfFavorites />}/>
                <Route path="/" element={<Main />}/>
             </Routes>
      </Router>
      </div>
  );
}


export default App;
