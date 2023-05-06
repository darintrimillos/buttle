import { useRecipes } from 'hooks/use-recipes';
import { Search } from 'components/Search/Search';
import styles from './RecipeBox.module.scss';

const RecipeBox = () => { 
    const { recipes } = useRecipes();
    
    return (
        <div>
            <h1>Recipe Box</h1>
            <Search />

            <div className={styles.recipes}>
                {recipes.map((recipe) => (
                    <Recipe recipe={recipe} key={recipe.slug} />
                ))}
            </div>
        </div>
    );
};

const Recipe = ({ recipe, ...rest }) => {
    const tags = recipe.tags?.join(', ');

    return (
        <div className={styles.recipe} {...rest}>
            <h3>{recipe.name}</h3>
            <p>Tags: {tags}</p>
        </div>
    );
};

export { RecipeBox };
