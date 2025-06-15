import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';
import { selectFilter } from '../../redux/filters/selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default Filter;
