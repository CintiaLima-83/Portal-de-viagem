import Link from "next/link";
import styles from "../styles/CardDestino.module.css";
import { Destino } from "../data/destinos";

export default function CardDestino({ destino }: { destino: Destino }) {
  return (
    <div className={styles.card}>
      <img src={destino.imagem} alt={destino.nome} className={styles.image} />
      <h2 className={styles.title}>{destino.nome}</h2>
      <p className={styles.location}>📍 {destino.localizacao}</p>
      <p className={styles.description}>{destino.descricao}</p>
      <p className={styles.extra}>⭐ {destino.avaliacao} | 💰 {destino.preco}</p>
      <Link href={`/destinos/${destino.id}`} className={styles.link}>
        Ver detalhes
      </Link>
    </div>
  );
}
