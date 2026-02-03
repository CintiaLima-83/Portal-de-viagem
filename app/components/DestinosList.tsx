import CardDestino from "./CardDestino";
import { destinos } from "../data/destinos";
import styles from "../styles/Destinos.module.css";

export default function DestinosList() {
  return (
    <div className={styles.grid}>
      {destinos.map(destino => (
        <CardDestino key={destino.id} destino={destino} />
      ))}
    </div>
  );
}
