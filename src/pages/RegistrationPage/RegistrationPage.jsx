import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => (
  <div className={styles.container}>
    <h2>Register</h2>
    <RegistrationForm />
  </div>
);

export default RegistrationPage;
