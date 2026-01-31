import styles from "../styles/Contato.module.css";

export default function ContatoPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Contato</h1>
      <p className={styles.text}>
        Tem dúvidas, sugestões ou quer falar com nossa equipe? Preencha o formulário abaixo
        ou envie um e-mail para <strong>contato@portaldeviagem.com</strong>.
      </p>

      <form className={styles.form}>
        <label>
          Nome:
          <input type="text" name="nome" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Mensagem:
          <textarea name="mensagem" rows={5} required></textarea>
        </label>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
}
