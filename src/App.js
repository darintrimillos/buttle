import './App.css';
import { RecipeBox, Menu } from 'pages/';
import { useRecipes } from 'hooks/use-recipes';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function App() {
    const { recipes } = useRecipes();
    return (
        <div className="wrapper">
            <Router>
                <aside className="sidebar">
                    <ul>
                        <li><Link to="/">Recipe Box</Link></li>
                        <li><Link to='menu'>Menu</Link></li>
                    </ul>
                </aside>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<RecipeBox />} />
                        <Route path="/menu" element={<Menu />} />
                    </Routes>
                </main>
            </Router>
        </div>
  );
}

export default App;
