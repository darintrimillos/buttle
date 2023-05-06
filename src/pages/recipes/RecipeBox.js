import { useRecipes } from 'hooks/use-recipes';
import { Search } from 'components/Search/Search';

const RecipeBox = () => { 
    const { recipes } = useRecipes();
    
    return (
        <div>
            <h1>Recipe Box</h1>
            <Search />
        </div>
    );
};

export { RecipeBox };
