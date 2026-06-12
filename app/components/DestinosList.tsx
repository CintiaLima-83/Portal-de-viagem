"use client";

import { useEffect, useState } from "react";
import CardDestino from "./CardDestino";
import SkeletonCard from "./SkeletonCard";
import { destinos } from "../data/destinos";
import styles from "../styles/Destinos.module.css";

export default function DestinosList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={styles.grid}>
      {loading
        ? Array(4)
            .fill(0)
            .map((_, i) => <SkeletonCard key={i} />)
        : destinos.map((destino) => (
            <CardDestino key={destino.id} destino={destino} />
          ))}
    </div>
  );
}