import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        
        <span className={styles.badge}>✈️ Explore o mundo</span>

        <h1 className={styles.title}>
          Encontre o destino perfeito
          para sua próxima viagem
        </h1>

        <p className={styles.subtitle}>
          Descubra lugares incríveis, compare destinos e planeje experiências inesquecíveis pelo mundo.
        </p>

        <div className={styles.actions}>
          <Link href="/destinos" className={styles.primaryButton}>
            Explorar destinos
          </Link>

          <Link href="/sobre" className={styles.secondaryButton}>
            Saiba mais
          </Link>
        </div>

      </div>
    </section>
  );
}