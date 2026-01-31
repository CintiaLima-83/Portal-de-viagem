
export interface Destino {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  localizacao?: string;
  preco?: string;
  avaliacao?: string;
}

export const destinos: Destino[] = [
  {
    id: "rio",
    nome: "Rio de Janeiro",
    imagem: "https://blog.123milhas.com/wp-content/uploads/2023/03/aniversario-do-rio-de-janeiro-conheca-quatro-curiosidades-sobre-a-cidade-conexao123.jpg",
    descricao: "Praias incríveis e o Cristo Redentor.",
    localizacao: "Brasil",
    preco: "R$ 2.500",
    avaliacao: "4.8"
  },
  {
    id: "paris",
    nome: "Paris",
    imagem: "https://th.bing.com/th/id/R.4e312752589af6f4da3d6cf28e2f9775?rik=6XvqwkBl8ue5ew&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f03%2f67%2f44%2f20_full.jpg&ehk=tZ93i9NWQQUrD9mGvJIMN0tkrsdq1m1xzNI%2bJhdcGys%3d&risl=&pid=ImgRaw&r=0",
    descricao: "A cidade luz e a Torre Eiffel.",
    localizacao: "França",
    preco: "€ 3.200",
    avaliacao: "4.9"
  },
  {
    id: "tokyo",
    nome: "Tóquio",
    imagem: "https://images.ctfassets.net/rc3dlxapnu6k/28GKCKhVuJ909lfbAJFORf/581e1461667b686e3863a8cac6e05009/Japan__Tokio__3_.jpg?w=2309&h=1299&fl=progressive&q=50&fm=jpg",
    descricao: "Tecnologia e tradição lado a lado.",
    localizacao: "Japão",
    preco: "¥ 400.000",
    avaliacao: "4.7"
  },
  {
    id: "ny",
    nome: "Nova York",
    imagem: "https://uploads.grupodicas.com/2023/03/Vida-noturna-em-Nova-York.png",
    descricao: "A cidade que nunca dorme.",
    localizacao: "Estados Unidos",
    preco: "US$ 3.000",
    avaliacao: "4.6"
  }
];
