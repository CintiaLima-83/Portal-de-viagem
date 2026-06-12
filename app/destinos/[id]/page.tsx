import { destinos } from "../../data/destinos";
import { notFound } from "next/navigation";
import DestinoDetalhes from "../../components/DestinoDetalhes";

export default async function DestinoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const destino = destinos.find((d) => d.id === id);

  if (!destino) return notFound();

  return <DestinoDetalhes destino={destino} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const destino = destinos.find((d) => d.id === id);

  return {
    title: destino?.nome,
    description: destino?.descricao,
  };
}
