import { useRecipes } from 'hooks/use-recipes';

const RecipeBox = () => { 
    const { recipes } = useRecipes();
    
    return (
        <h1>Recipe Box</h1>
    );
};

export { RecipeBox };
