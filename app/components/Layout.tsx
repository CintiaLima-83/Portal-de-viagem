import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <nav>
          <Link href="/">Início</Link>
          <Link href="/destinos">Destinos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        © 2026 Portal de Destinos
      </footer>
    </div>
  );
}

