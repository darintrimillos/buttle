import styles from 'css/App.module.scss';
import { RecipeBox, Menu } from 'pages/';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function App() {
    return (
        <div className={styles.wrapper}>
            <Router>
                <aside className={styles.sidebar}>
                    <ul>
                        <li><Link to="/">Recipe Box</Link></li>
                        <li><Link to='menu'>Menu</Link></li>
                    </ul>
                </aside>
                <main className={styles.main}>
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
