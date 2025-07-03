# 🚀 Testes Automatizados de API com Cypress + TypeScript

![Cypress](https://img.shields.io/badge/Cypress-14.5.0-brightgreen?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square)

Este projeto contém uma suíte de testes para a API de livros
da [FakeRestAPI](https://fakerestapi.azurewebsites.net). Os cenários exercitam todos os fluxos de **GET**, *
*POST**, **PUT** e **DELETE** de forma automatizada.

---

## 📌 Por que este projeto é interessante?

- Estrutura profissional com tipagem forte
- Comandos Cypress customizados para testes de API
- Validações de status, headers, body e contratos
- Integração contínua com GitHub Actions
- Cobertura de testes com Mochawesome Reports

---
## Sumário

- [Tecnologias](#-tecnologias-utilizadas)
- [Estrutura](#-estrutura-do-projeto)
- [Comandos](#-comandos-personalizados)
- [Como Executar](#-como-executar-o-projeto)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

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
│   ├── e2e/api/               # Testes de API
│   │   └── books.cy.ts
│   ├── utils/               # Testes de API
│   │   └── books.cy.ts
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
├── .github/
│   └── workflows/
│       └── cypress.yml         # Pipeline de testes no GitHub Actions
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
cy.buscarTodosOsLivro();
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

# 2. Acesse o projeto
cd <repositorio>

# 3. Instale as dependências
npm install

# 4. Em `config/env` existem arquivos `.env` para cada ambiente:

- dev.env
- staging.env
- prod.env

Ajuste o BASE_URL conforme necessário para sua API.

# 5. Defina a variável de ambiente `CYPRESS_ENV` para escolher qual arquivo será carregado.
# Exemplos:
CYPRESS_ENV=staging npm run test:dev       # Executa testes em staging no terminal
CYPRESS_ENV=prod npm run cy:open           # Abre a interface do Cypress no ambiente prod

# 6. Você também pode usar scripts prontos:
npm run test:dev        # Headless no ambiente dev
npm run open:dev        # Interface visual no ambiente dev
npm run test:staging    # Headless no ambiente staging
npm run test:prod       # Headless no ambiente prod

# 7. Para manter o padrão de código:
npm run format          # Formata com Prettier
npm run lint            # Verifica com ESLint
```

---

### 🌐 Trabalhando com ambientes

O projeto suporta múltiplos ambientes via `CYPRESS_ENV`, que carrega o arquivo correspondente em `config/env/`.

Além disso, é possível sobrescrever a URL diretamente com `BASE_URL`:
```bash
BASE_URL=https://sua-api.com CYPRESS_ENV=staging npm run test:staging
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
