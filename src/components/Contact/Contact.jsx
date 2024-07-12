import styles from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={styles.contactItem}>
      <span className={styles.contactName}>{name}:</span>
      <span className={styles.contactNumber}>{number}</span>
      <button onClick={() => deleteContact(id)} className={styles.deleteButton}>Delete</button>
    </li>
  );
};

export default Contact;
