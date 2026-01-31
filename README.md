markdown
# 🌍 Portal de Viagem

Um portal simples de destinos turísticos feito com **Next.js** e **React**, onde o usuário pode explorar diferentes lugares, ver detalhes e informações como localização, preço médio e avaliação.

---

## 🚀 Tecnologias utilizadas
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules para estilização

---

## 📂 Estrutura do projeto
app/
└── destinos/
└── [id]/
└── page.tsx      # Página de detalhes do destino
components/
└── CardDestino.tsx            # Card para listar destinos
data/
└── destinos.ts                    # Dados mockados dos destinos

Código

---

## ✨ Funcionalidades
- Listagem de destinos com imagem, descrição, preço e avaliação.
- Página de detalhes acessível via rota dinâmica (`/destinos/[id]`).
- Navegação simples com **Next.js Link**.
- Layout responsivo e estilizado.

---

## 🖼️ Exemplo de uso
- `/destinos` → lista todos os destinos.
- `/destinos/rio` → mostra detalhes do Rio de Janeiro.
- `/destinos/paris` → mostra detalhes de Paris.

---

## 📦 Como rodar o projeto
```bash
# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev

# Acessar no navegador
http://localhost:3000

