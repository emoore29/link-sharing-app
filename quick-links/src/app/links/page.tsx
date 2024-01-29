import styles from "../page.module.css";

export default function Links() {
  return (
    <main className={styles.main}>
      <h2>Customise your links</h2>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button>+ Add new link</button>
      <section>
        <h3>Let's get you started</h3>
        <p>
          Use the "Add new link" button to get started. Once you have more than
          one link, you can reorder and edit them. We're here to help you share
          your profiles with everyone!
        </p>
      </section>
    </main>
  );
}
