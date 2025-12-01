# app-fitness

[![license](https://img.shields.io/github/license/KellyCMesquita/app-fitness)](./LICENSE) [![repo size](https://img.shields.io/github/repo-size/KellyCMesquita/app-fitness)](https://github.com/KellyCMesquita/app-fitness)

Aplicação web para acompanhamento de atividades físicas construída com Next.js.

## Requisitos

- Node.js 16.8 ou superior (recomenda-se usar uma versão LTS, ex.: 18.x).
- npm, yarn ou pnpm para gerenciar dependências.

## Começando (desenvolvimento)

Primeiro, instale as dependências e execute o servidor de desenvolvimento:

```bash
# Instalar dependências (escolha um):
npm install
# ou
yarn
# ou
pnpm install

# Executar em modo de desenvolvimento:
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página é atualizada automaticamente enquanto você edita o arquivo.

Este projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente a fonte [Geist](https://vercel.com/font), uma família tipográfica da Vercel.

## Build / Produção

Para gerar a versão de produção e executar a aplicação:

```bash
# Gerar build:
npm run build
# Iniciar em produção (se definido no package.json):
npm start
# Em alternativas com PM2 ou outro gerenciador de processos:
# pm2 start npm --name "app-fitness" -- start
```

Verifique o `package.json` do projeto para os scripts exatos usados para build e start.

## Testes

Se houver suítes de testes configuradas, normalmente são executadas com:

```bash
npm test
# ou
npm run test
```

Caso ainda não exista uma configuração de testes, considere adicionar uma (por exemplo, Jest + React Testing Library) e um script `test` em `package.json`.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o repositório.
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`.
3. Faça commits claros e com mensagens descritivas.
4. Abra um pull request descrevendo a mudança.

Para mudanças maiores, abra uma issue antes para discutirmos o design.

## Licença

Este repositório ainda não possui um arquivo de licença. Se quiser publicar sob uma licença, adicione um arquivo `LICENSE` na raiz do projeto (por exemplo, MIT, Apache-2.0, etc.).

Se você já tiver uma licença escolhida, atualize o badge e adicione o arquivo `LICENSE` correspondente.

## Badges úteis

Você pode adicionar badges como exemplo abaixo (substitua quando o serviço estiver configurado):

- License: `[![license](https://img.shields.io/github/license/KellyCMesquita/app-fitness)](./LICENSE)`
- Repo size: `[![repo size](https://img.shields.io/github/repo-size/KellyCMesquita/app-fitness)](https://github.com/KellyCMesquita/app-fitness)`
- Actions (exemplo placeholder): `![build status](https://github.com/KellyCMesquita/app-fitness/actions/workflows/ci.yml/badge.svg)`

---

## Saiba mais

Para saber mais sobre o Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) — aprenda sobre os recursos e a API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) — um tutorial interativo do Next.js.

Você também pode conferir o [repositório do Next.js no GitHub](https://github.com/vercel/next.js) — contribuições e feedback são bem-vindos!

## Deploy no Vercel

A maneira mais fácil de publicar sua aplicação Next.js é utilizar a [plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulte a documentação de deploy do Next.js para mais detalhes: https://nextjs.org/docs/app/building-your-application/deploying
