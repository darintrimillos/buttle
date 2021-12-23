import recipes from '../data/recipes/recipes';
import menu, { menuTags } from '../data/menu';
import MenuItem from '../components/MenuItem/MenuItem';

const Menu = ({ recipes }) => {
    console.log('recipes', recipes);
    console.log('test');
    return (
        <div>
            <h1>The Menu</h1>
            <MenuItem />
            {menuTags.map((tag) => (<h4 key={tag}>{tag}</h4>))}
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: { recipes }
    }
}

export default Menu;
