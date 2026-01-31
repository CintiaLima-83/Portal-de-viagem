import CardDestino from "../components/CardDestino";
import styles from "../styles/Destinos.module.css";
import { destinos } from "../data/destinos";

export default function DestinosPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Destinos Turísticos</h1>
      <div className={styles.grid}>
        {destinos.map(destino => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </div>
  );
}
