import styles from './MenuItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

const MenuItem = ({ name, description, slug }) => {
    return (
        <div className={styles.menuItem}>
            <h3>{name}</h3>
            <p>{ description }</p>
            <p><FontAwesomeIcon icon={faFileLines} size="sm" style={{ fontSize: '14px' }} />{slug}</p>
        </div>
    )
}

export default MenuItem;
