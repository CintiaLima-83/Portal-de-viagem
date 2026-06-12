# 🌍 Portal de Viagem

Projeto desenvolvido em **Next.js + TypeScript** durante o curso da **EBAC**.  
O objetivo é criar um portal de viagens moderno e responsivo, aplicando conceitos de **App Router**, **componentização** e **CSS Modules**.

---

## 🚀 Tecnologias utilizadas
- Next.js 13+ (App Router)
- TypeScript
- React
- CSS Modules
- PostCSS
- ESLint
- Vercel (para deploy)

---

## 📂 Estrutura do projeto
Portal-de-viagem/
├─ app/                  # páginas e layouts principais
│   ├─ layout.tsx        # layout global
│   ├─ page.tsx          # página inicial
│   ├─ contato/          # página de contato
│   ├─ destinos/         # página de destinos
│   │   ├─ [id]/page.tsx # página dinâmica de detalhes
│   └─ sobre/            # página sobre
├─ components/           # componentes reutilizáveis
│   ├─ CardDestino.tsx
│   ├─ DestinoDetalhes.tsx
│   ├─ DestinosList.tsx
│   ├─ HeroSection.tsx
│   └─ Layout.tsx
├─ data/                 # dados mockados
│   └─ destinos.ts
├─ styles/               # estilos em CSS Modules
│   ├─ CardDestino.module.css
│   ├─ Contato.module.css
│   ├─ Destinos.module.css
│   ├─ Home.module.css
│   ├─ Layout.module.css
│   └─ Sobre.module.css
├─ public/               # imagens e arquivos estáticos
├─ globals.css           # estilos globais
├─ .gitignore
├─ README.md
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ package-lock.json
├─ postcss.config.mjs
└─ tsconfig.json

Código

---

## ⚙️ Como rodar localmente
1. Clone este repositório:
   ```bash
   git clone https://github.com/CintiaLima-83/Portal-de-viagem.git
Entre na pasta do projeto:

bash
cd Portal-de-viagem
Instale as dependências:

bash
npm install
Rode o servidor local:

bash
npm run dev
Abra no navegador: http://localhost:3000

🌐 Deploy
O projeto está publicado em: https://vercel.com/cintialima-83s-projects/portal-de-viagem


📸 Screenshots
Adicione aqui imagens do portal (coloque em public/ e referencie).


✨ Autor
Cintia Lima  
Estudante da EBAC e desenvolvedora em formação, com foco em Frontend (React + TypeScript + Next.js).
Atualmente explorando áreas de Backend (Java, Node.js), Cibersegurança e Inteligência Artificial, além de inglês avançado.


📚 Referências
Este projeto foi desenvolvido como parte do curso da EBAC, aplicando os conceitos aprendidos em aula.

