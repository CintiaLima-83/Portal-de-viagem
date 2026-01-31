import styles from "../styles/Sobre.module.css";

export default function SobrePage() {
  return (
    <div className={styles.page}>
      
      <div className={styles.imageArea}>
        
        <img src="https://www.passeios.org/wp-content/uploads/2024/01/app-tracar-rota-viagem.jpg" alt="Viagem" className={styles.image} />
      </div>
      <div className={styles.textArea}>
        
        <h1 className={styles.title}>Sobre Nós</h1>
        <p className={styles.text}>
          
          O Portal de Destinos nasceu para inspirar viajantes a descobrirem
          lugares incríveis ao redor do mundo. Nosso objetivo é oferecer
          informações claras e práticas para ajudar você a planejar sua próxima
          viagem com confiança.
        </p>
        <p className={styles.text}>
          
          Valorizamos experiências autênticas e acreditamos que viajar é uma
          forma de conectar culturas, pessoas e histórias.
        </p>
      </div>
    </div>
  );
}
