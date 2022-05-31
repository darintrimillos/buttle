import { recipes as all } from 'data/recipes';

const useRecipes = () => {
    const recipes = all.sort((a, b) => {
        const slugA = a.slug;
        const slugB = b.slug;

        if (slugA < slugB) return -1;
        if (slugA > slugB) return 1;

        return 0;
    });

    const getRecipe = (slug) => all.find(recipe => recipe.slug === slug);

    return {
        recipes,
        getRecipe
    };
};

export { useRecipes };
