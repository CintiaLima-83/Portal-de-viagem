import styles from "../styles/Home.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Portal de Viagem</h1>
      <p className={styles.subtitle}>Descubra lugares incríveis pelo mundo.</p>
    </section>
  );
}
