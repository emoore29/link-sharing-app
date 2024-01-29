import styles from "../page.module.css";

export default function Profile() {
  return (
    <main className={styles.main}>
      <h2>Profile details</h2>
      <p>Add your details to create a personal touch to your profile.</p>
      <form action="">
        <h3>Profile picture</h3>
        <p>Upload image</p>
        <label htmlFor="firstname">First name*</label>
        <input type="text" />
        <label htmlFor="lastname">Last name*</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <button>Save</button>
      </form>
    </main>
  );
}
