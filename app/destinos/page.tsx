import DestinosList from "../components/DestinosList";
import styles from "../styles/Destinos.module.css";

export default function DestinosPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Destinos Turísticos</h1>
      <DestinosList />
    </div>
  );
}
