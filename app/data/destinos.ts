export interface Destino {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  localizacao: string;
  preco: string;
  avaliacao: string;
}

export const destinos: Destino[] = [
  {
    id: "rio",
    nome: "Rio de Janeiro",
    imagem:
      "https://blog.123milhas.com/wp-content/uploads/2023/03/aniversario-do-rio-de-janeiro-conheca-quatro-curiosidades-sobre-a-cidade-conexao123.jpg",
    descricao:
      "Entre montanhas e mar, o Rio encanta com suas praias icônicas como Copacabana e Ipanema, o Cristo Redentor abraçando a cidade e uma vida cultural vibrante que mistura samba, carnaval e hospitalidade calorosa.",
    localizacao: "Brasil",
    preco: "R$ 2.500",
    avaliacao: "4.8",
  },

  {
    id: "paris",
    nome: "Paris",
    imagem:
      "https://www.paris18.org/wp-content/uploads/2025/06/Eiffel-Tower-illuminee-sur-Seine10.webp",
    descricao:
      "A cidade luz, onde a elegância se encontra com a arte: a Torre Eiffel, o charme das margens do Sena, museus renomados como o Louvre e uma atmosfera romântica que conquista viajantes do mundo inteiro.",
    localizacao: "França",
    preco: "€ 3.200",
    avaliacao: "4.9",
  },

  {
    id: "tokyo",
    nome: "Tóquio",
    imagem:
      "https://images.ctfassets.net/rc3dlxapnu6k/28GKCKhVuJ909lfbAJFORf/581e1461667b686e3863a8cac6e05009/Japan__Tokio__3_.jpg?w=2309&h=1299&fl=progressive&q=50&fm=jpg",
    descricao:
      "Um encontro fascinante entre tradição e modernidade: templos históricos convivem com tecnologia de ponta, bairros futuristas como Shibuya e Shinjuku, além de uma culinária mundialmente reconhecida.",
    localizacao: "Japão",
    preco: "¥ 400.000",
    avaliacao: "4.7",
  },

  {
    id: "ny",
    nome: "Nova York",
    imagem:
      "https://uploads.grupodicas.com/2023/03/Vida-noturna-em-Nova-York.png",
    descricao:
      "A metrópole que nunca dorme, repleta de arranha-céus como o Empire State, a energia da Times Square, os espetáculos da Broadway e a diversidade cultural que transforma cada bairro em uma experiência única.",
    localizacao: "Estados Unidos",
    preco: "US$ 3.000",
    avaliacao: "4.6",
  },
];