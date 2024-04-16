import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className={styles.login}>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label>Username</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className={styles.input}>
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className={styles.input}>
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className={styles.input}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
