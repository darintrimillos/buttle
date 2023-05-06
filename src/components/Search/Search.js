import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import styles from './Search.module.scss';

const Search = ({className, ...rest}) => {
    return (
        <div className={clsx(styles.search, className && className)} {...rest}>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
            <input className={styles.input} placeholder="Search" type="text" />
        </div>
    )
};

export { Search };
