import { useState } from "react";
import Link from "next/link";
import styles from "../styles/signup.module.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    const userData = { firstName, lastName, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("User data saved:", userData);
};

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName" className={styles.label}>
          Prénom(s)
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={styles.input}
          required
        />

        <label htmlFor="lastName" className={styles.label}>
          Nom
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles.input}
          required
        />

        <label htmlFor="email" className={styles.label}>
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />

        <label htmlFor="password" className={styles.label}>
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />

        <label htmlFor="confirmPassword" className={styles.label}>
          Confirmer le mot de passe
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.input}
          required
        />

        <button type="submit" className={styles.submitButton}>
          S'inscrire
        </button>
      </form>

      <p>
        Vous avez déjà un compte ?{" "}
        <Link href="/signin" passHref={true} legacyBehavior={true}>
          <a className={styles.link}>Se connecter</a>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
