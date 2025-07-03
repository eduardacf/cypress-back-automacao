# 🚀 Testes Automatizados de API com Cypress + TypeScript

![Cypress](https://img.shields.io/badge/Cypress-14.5.0-brightgreen?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square)

Este projeto contém uma suíte de testes para a API de livros
da [FakeRestAPI](https://fakerestapi.azurewebsites.net). Os cenários exercitam todos os fluxos de **GET**, **POST**, **PUT** e **DELETE**

## Sumário

- [📌 Por que este projeto é interessante?](#-por-que-este-projeto-é-interessante)
- [🛠️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🧩 Comandos Personalizados](#-comandos-personalizados)
- [🎯 Como Executar o Projeto](#-como-executar-o-projeto)
- [📜 Scripts disponíveis](#-scripts-disponíveis)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)
- [📫 Contato](#-contato)

---

## 📌 Por que este projeto é interessante?

- Estrutura profissional com tipagem forte
- Comandos Cypress customizados para testes de API
- Validações de status, headers, body e contratos
- Integração contínua com GitHub Actions
- Cobertura de testes com Mochawesome Reports

---

## 🛠️ Tecnologias Utilizadas

- [Cypress 14.5.0](https://www.cypress.io/)
- [TypeScript 5.8.3](https://www.typescriptlang.org/)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- Faker para geração de dados de teste
- Node.js (v18+ recomendado)
- Editor sugerido: VS Code ou IntelliJ IDEA Ultimate

---

## 📂 Estrutura do Projeto
```plaintext
├── cypress/
│   ├── e2e/api/              # Testes de API
│   │   └── books.cy.ts
│   ├── utils/               # Rotas e utilidades compartilhadas
│   │   └── rotas.ts         # Mapeamento das URLs
│   ├── support/
│   │   ├── commands/          # Comandos customizados
│   │   │   └── api.ts
│   │   ├── e2e.ts             # Registro dos comandos
│   │   └── index.d.ts         # Tipagem Cypress
├── config/
│   └── env/                    # Variáveis de cada ambiente
│       ├── dev.env             # Configuração base (DEV)
│       ├── staging.env         # Configuração STAGING
│       └── prod.env            # Configuração PROD
├── .github/workflows/         # CI com GitHub Actions
│   └── cypress.yml
├── eslint.config.mjs           # Regras do ESLint
├── .prettierrc                 # Regras do Prettier
├── package.json                # Configurações do projeto e scripts
├── package-lock.json
├── cypress/tsconfig.json       # Configurações do TypeScript
└── .gitignore
```

---

## 🧩 Comandos Personalizados

Os comandos customizados facilitam as requisições e validações. Alguns exemplos:

```ts
cy.buscarTodosOsLivros();
cy.criarLivro(livroGerado);
cy.editarLivro(id, livroAtualizado);
cy.deletarLivro(id);
```

---

## 🎯 Como Executar o Projeto

### Pré-requisitos

- Node.js (v18 ou superior)
- npm instalado

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/<usuario>/<repositorio>.git

# 2. Acesse a pasta do projeto
cd <repositorio>

# 3. Instale as dependências
npm install

# 4. Configure o ambiente
# Edite o arquivo em config/env/dev.env (ou staging.env/prod.env) e ajuste a BASE_URL conforme necessário.
# Exemplo:
# BASE_URL=https://fakerestapi.azurewebsites.net

# 5. Execute os testes com o ambiente desejado
# Exemplo com ambiente dev:
CYPRESS_ENV=dev npm run open:dev        # Abre a interface interativa
CYPRESS_ENV=dev npm run test:dev        # Executa no terminal
# Ambiente staging:
CYPRESS_ENV=staging npm run test:staging
# Ambiente produção:
CYPRESS_ENV=prod npm run test:prod

# 6. Scripts prontos também estão disponíveis:
npm run test:dev         # Headless (dev)
npm run open:dev         # UI (dev)
npm run test:staging     # Headless (staging)
npm run test:prod        # Headless (prod)

# 7. Manter o código limpo e padronizado
npm run format           # Formata com Prettier
npm run lint             # Verifica padrões com ESLint
```
---

## 📜 Scripts disponíveis


| Comando                 | Descrição                                     |
|-------------------------|-----------------------------------------------|
| `npm run open:dev`      | Abre o Cypress UI no ambiente `dev`           |
| `npm run test:dev`      | Executa os testes no terminal (`dev`)         |
| `npm run test:staging`  | Executa testes com ambiente `staging`         |
| `npm run test:prod`     | Executa testes com ambiente `prod`            |
| `npm run cy:open`       | Abre Cypress com o ambiente atual             |
| `npm run cy:run`        | Roda testes com o ambiente atual              |
| `npm run lint`          | Valida padrões de código com ESLint           |
| `npm run format`        | Formata o código usando Prettier              |

---
## 🤝 Contribuição

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir *Issues* com sugestões ou *Pull Requests* com melhorias.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
## 📫 Contato

**Eduarda Ferreira**  
📧 eduarda.cferreira10@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/eduarda-ferreira/)  
🐙 [GitHub](https://github.com/eduardacf)
