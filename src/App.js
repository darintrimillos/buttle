import styles from 'css/App.module.scss';
import { Menu, RecipeBox } from 'pages/';
import {
    BrowserRouter as Router, Link, Route, Routes
} from 'react-router-dom';

function App() {
    return (
        <div className={styles.wrapper}>
            <Router>
                <aside className={styles.sidebar}>
                    <h1>The<br />House<br />Menu</h1>
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
