import recipes from '../data/recipes/recipes';

const Menu = ({ recipes }) => {
    console.log('recipes', recipes);
    console.log('test');
    return (
        <div>
            <h1>The Menu</h1>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: { recipes }
    }
}

export default Menu;
