import recipes from '../../data/recipes/recipes';

const getRecipes = (req, res) => {
    res.status(200).json({ recipes });
}

export default getRecipes;
