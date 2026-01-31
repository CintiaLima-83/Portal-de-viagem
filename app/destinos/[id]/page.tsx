"use client";
import { notFound } from "next/navigation";
import { use } from "react";
import { destinos } from "../../data/destinos";

export default function DestinoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // unwrap da Promise

  const destino = destinos.find(d => d.id === id);

  if (!destino) return notFound();

  return (
    <div style={{ padding: "40px" }}>
      <h1>{destino.nome}</h1>
      <img src={destino.imagem} alt={destino.nome} style={{ width: "400px", borderRadius: "8px" }} />
      <p>{destino.descricao}</p>
    </div>
  );
}