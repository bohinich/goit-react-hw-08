import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  if (!contacts.length) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          <p>
            <b>{name}</b>: {phone}
          </p>
          <button onClick={() => handleDelete(id)} className={styles.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
