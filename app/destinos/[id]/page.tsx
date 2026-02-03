import { destinos, Destino } from "../../data/destinos";
import { notFound } from "next/navigation";
import DestinoDetalhes from "../../components/DestinoDetalhes";

export default function DestinoPage({ params }: { params: { id: string } }) {
  const destino: Destino | undefined = destinos.find(d => d.id === params.id);
  if (!destino) return notFound();
  return <DestinoDetalhes destino={destino} />;
}
