import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/signin.module.css';

const SignInPage = () => {
  const [nameOrEmail, setNameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic validation
    if (!nameOrEmail || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Retrieve the user's information from localStorage
    const storedNameOrEmail = localStorage.getItem('nameOrEmail');
    const storedPassword = localStorage.getItem('password');

    if (nameOrEmail !== storedNameOrEmail || password !== storedPassword) {
      alert('Invalid username or password');
      return;
    }

    // Clear the form fields
    setNameOrEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name or email:
          <input
            className={styles.input}
            type="text"
            name="nameOrEmail"
            value={nameOrEmail}
            onChange={(event) => setNameOrEmail(event.target.value)}
          />
        </label>
        <br />
        <label className={styles.label}>
          Password:
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button className={styles.button} type="submit">Log in</button>
      </form>
      <p className={styles.paragraph}>
        Don't have an account?{' '}
        <Link href="/signup" passHref={true} legacyBehavior={true}>
          <a className={styles.link}>Sign up</a>
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
