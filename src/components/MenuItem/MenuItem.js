import styles from './MenuItem.module.scss';

const MenuItem = ({ name, description }) => {
    return (
        <div className={styles.menuItem}>
            <h3>{name}</h3>
            <p>{ description }</p>
        </div>
    )
}

export default MenuItem;
