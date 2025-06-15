import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactsList from '../../components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts, selectLoading, selectError } from '../../redux/contacts/selectors';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2>Your Contacts</h2>
      <ContactForm />
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ContactsList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;
