import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import { useCities } from '../contexts/CitiesContext';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { currentCity, deleteCity } = useCities();

  const { cityName, emoji, date, id, position: pos } = city;

  const handleClick = (e) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <li>
      <Link
        to={`${id}?lat=${pos.lat}&lng=${pos.lng}`}
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles['cityItem--active'] : ''
        }`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button onClick={handleClick} className={styles.deleteBtn}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
