import { Destino } from "../data/destinos";
import styles from "../styles/Destinos.module.css";

export default function DestinoDetalhes({ destino }: { destino: Destino }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>{destino.nome}</h1>
      <img
        src={destino.imagem}
        alt={destino.nome}
        style={{ maxWidth: "600px", width: "100%", borderRadius: "12px", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }}
      />
      <p><strong>📍 Localização:</strong> {destino.localizacao}</p>
      <p><strong>⭐ Avaliação:</strong> {destino.avaliacao}</p>
      <p><strong>💰 Preço médio:</strong> {destino.preco}</p>
      <p style={{ marginTop: "15px" }}>{destino.descricao}</p>
    </div>
  );
}
