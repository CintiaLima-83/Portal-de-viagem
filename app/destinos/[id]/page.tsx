import { destinos, Destino } from "../../data/destinos";
import { notFound } from "next/navigation";
import DestinoDetalhes from "../../components/DestinoDetalhes";

// Tornamos a função "async" porque vamos usar "await"
export default async function DestinoPage({ params }: { params: Promise<{ id: string }> }) {
  // Desestruturamos "id" de dentro de Promise "params" 
  const { id } = await params;

  // Procuramos o destino pelo "id" recebido na URL
  const destino: Destino | undefined = destinos.find(d => d.id === id);

  // Se não encontrar, chamamos "notFound()" para renderizar a página 404 
  if (!destino) return notFound();

  // Se encontrar, renderizamos o componente de detalhes
  return <DestinoDetalhes destino={destino} />;
}