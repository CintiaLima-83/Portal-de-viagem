"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/CardDestino.module.css";
import { Destino } from "../data/destinos";
import { useFavoritos } from "./hooks/useFavoritos";

export default function CardDestino({ destino }: { destino: Destino }) {
  const { favoritos, toggleFavorito } = useFavoritos();

  const isFav = favoritos.includes(destino.id);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className={styles.card}
    >
      <img src={destino.imagem} className={styles.image} />

      <h2 className={styles.title}>{destino.nome}</h2>

      <div className={styles.location}>
        <p>📍 {destino.localizacao}</p>
        <span>⭐ {destino.avaliacao}</span>
      </div>

      <div className={styles.actions}>
        <Link href={`/destinos/${destino.id}`} className={styles.link}>
          Ver mais
        </Link>

        <button
          onClick={() => toggleFavorito(destino.id)}
          className={styles.heart}
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </motion.div>
  );
}