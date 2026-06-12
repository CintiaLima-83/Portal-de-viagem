import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>✈️ Portal de Viagens</div>

          <nav className={styles.nav}>
            <Link href="/">Início</Link>
            <Link href="/destinos">Destinos</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>© 2026 Portal de Destinos</footer>
    </div>
  );
}
