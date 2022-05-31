import './App.css';
import { RecipeBox } from 'pages/';
import { useRecipes } from 'hooks/use-recipes';

/**
 * Grid for sidebar and main section
 * Sidebar
 *  - Recipe Box /recipe-box 
 *  - Menu /menu
 * Routing
 */

function App() {
    const { recipes } = useRecipes();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test</h1>
      </header>
      <div>
        <RecipeBox />
      </div>
    </div>
  );
}

export default App;
