import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-hot-toast';
import styles from './ContactForm.module.css';

const initialValues = {
  name: '',
  phone: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  phone: Yup.string()
    .matches(
      /^[\d\s+\-()]+$/,
      'Phone number can contain digits, spaces, +, -, ()'
    )
    .required('Phone number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const normalizedName = values.name.toLowerCase();

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isExist) {
      toast.error(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage component="div" className={styles.error} name="name" />

        <label htmlFor="phone">Phone</label>
        <Field id="phone" name="phone" type="text" />
        <ErrorMessage component="div" className={styles.error} name="phone" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
