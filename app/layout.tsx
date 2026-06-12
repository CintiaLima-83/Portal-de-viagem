import Layout from "./components/Layout";
import "./globals.css";

export const metadata = {
  title: "Portal de Viagens",
  description: "Descubra destinos incríveis pelo mundo",
  openGraph: {
    title: "Portal de Viagens",
    description: "Explore o mundo com um clique",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}