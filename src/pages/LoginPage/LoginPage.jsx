import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = () => (
  <div className={styles.container}>
    <h2>Login</h2>
    <LoginForm />
  </div>
);

export default LoginPage;
