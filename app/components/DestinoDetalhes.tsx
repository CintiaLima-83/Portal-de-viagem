"use client";

import { useRouter } from "next/navigation";
import { Destino } from "../data/destinos";

export default function DestinoDetalhes({
  destino,
}: {
  destino: Destino;
}) {
  const router = useRouter();

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <button
        onClick={() => router.back()}
        style={{
          padding: "10px 15px",
          background: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        ⬅ Voltar
      </button>

      <h1>{destino.nome}</h1>

      <img
        src={destino.imagem}
        style={{
          width: "100%",
          borderRadius: 12,
          marginTop: 20,
        }}
      />

      <p>📍 {destino.localizacao}</p>
      <p>⭐ {destino.avaliacao}</p>
      <p>💰 {destino.preco}</p>

      <p style={{ marginTop: 20, lineHeight: 1.6 }}>
        {destino.descricao}
      </p>
    </div>
  );
}