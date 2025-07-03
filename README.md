# 🚀 Projeto de Testes Automatizados com Cypress + TypeScript
### Testes E2E para a plataforma DemoQA com arquitetura organizada e comandos customizados

![Cypress](https://img.shields.io/badge/Cypress-14.5.0-brightgreen?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square)

Este projeto automatiza testes end-to-end da aplicação [DemoQA](https://demoqa.com), utilizando **Cypress** com **TypeScript**.

> **Por que vale a pena conferir?**
> - Código organizado em módulos claros e reutilizáveis
> - Execução multienvironment com arquivos `.env`
> - Pipeline de CI pronto para GitHub Actions

A automação cobre interações complexas de UI com foco em clareza, reutilização e boas práticas, incluindo:
- Comandos Cypress personalizados
- Fixtures organizadas
- Estrutura de testes por contexto

---

## Sumário
- [Descrição](#-descrição)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Comandos Personalizados](#-comandos-personalizados)
- [Como Executar](#-como-executar-o-projeto)
- [Boas Práticas](#-boas-práticas)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 📖 Descrição

A suíte cobre interações em componentes como:

- Formulários com validações
- Alertas e modais
- Tooltips
- Frames
- Progresso dinâmico
- Tabelas dinâmicas
- Botões e eventos de mouse

Todos os testes estão organizados em arquivos separados por contexto, com comandos customizados para manter o código DRY e intuitivo.

---

## 🛠️ Tecnologias Utilizadas

- [Cypress 14.5.0](https://www.cypress.io/)
- [TypeScript 5.8.3](https://www.typescriptlang.org/)
- Node.js (v18+ recomendado)
- Editor sugerido: VS Code ou IntelliJ IDEA Ultimate

---

## 📂 Estrutura do Projeto
```plaintext
├── cypress/
│   ├── e2e/                    # Testes automatizados
│   │   ├── componentes-ui.cy.ts
│   │   ├── comportamentos-dinamicos.cy.ts
│   │   ├── frames-alerts.cy.ts
│   │   ├── interacoes.cy.ts
│   │   ├── acessibilidade.cy.ts
│   │   └── forms/
│   │       ├── form-completo.cy.ts
│   │       └── form-validacoes.cy.ts
│   ├── fixtures/               # Dados de teste em JSON
│   │   ├── usuario.json
│   │   ├── usuario-tabela.json
│   │   └── foto.jpg
│   └── support/
│       ├── commands/           # Comandos customizados do Cypress
│       │   ├── demoqa.ts       # Cadastro, alertas e modais
│       │   ├── dynamic.ts      # Progresso e botão dinâmico
│       │   ├── estrutura.ts    # Alertas simples e iframes
│       │   ├── form.ts         # Ações do formulário principal
│       │   ├── interacoes.ts   # Cliques, tooltips, radios e checkbox
│       │   ├── modal.ts        # Validação do modal de envio
│       │   ├── navegacao.ts    # Navegação padronizada com rotas
│       │   ├── acessibilidade.ts # Validações de WCAG com cypress-axe
│       │   └── validacoes.ts   # Campos obrigatórios e formatos inválidos
│       ├── utils/              # Rotas e utilidades compartilhadas
│       │   └── rotas.ts        # Mapeamento das URLs
│       ├── e2e.ts              # Importa todos os comandos
│       └── index.d.ts          # Tipagens dos comandos customizados
├── package.json                # Configurações do projeto e scripts
├── package-lock.json
├── cypress/tsconfig.json       # Configurações do TypeScript
├── config/
│   └── env/                    # Variáveis de cada ambiente
│       ├── dev.env             # Configuração base (DEV)
│       ├── staging.env         # Configuração STAGING
│       └── prod.env            # Configuração PROD
├── .github/
│   └── workflows/
│       └── cypress.yml         # Pipeline de testes no GitHub Actions
├── eslint.config.mjs           # Regras do ESLint
├── .prettierrc                 # Regras do Prettier
└── .gitignore
```

---

## 🧩 Comandos Personalizados
O projeto utiliza diversos comandos Cypress customizados para reutilização e clareza.  
Abaixo, seguem **alguns exemplos organizados por categoria**:
### 🔄 Formulários e validações

```ts
cy.validarCampoObrigatorio('#inputEmail');
cy.validarFormatoInvalido('#inputEmail', 'email-invalido');
```

### 🖱️ Interações com elementos

```ts
cy.validarCliques(); // Valida cliques duplo e com botão direito
cy.validarTooltip('#toolTipButton', 'You hovered over the Button');
cy.selecionarCheckbox('Downloads');
cy.selecionarRadio('yesRadio', 'Yes');
```

### 📦 Componentes dinâmicos

```ts
cy.validarProgressoCompleto(); // Espera 100% na progress bar
cy.validarBotaoHabilitadoAposDelay(); // Aguarda botão ativar dinamicamente
```

### 🧪 Estrutura da página

```ts
cy.validarAlertaSimples('You clicked a button');
cy.validarConteudoDoFrame('#frame1', 'This is a sample page');
```

### 📊 Tabelas dinâmicas

```ts
cy.adicionarRegistroTabela(usuario); // Insere novo registro
cy.validarRegistroNaTabela(usuario);   // Valida conteúdo inserido
```
### 🔍 Acessibilidade (WCAG)

```ts
cy.verificarAcessibilidadeComLogs();
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

# 4. (Opcional) Defina o ambiente e a BASE_URL
#    Garanta que o arquivo `config/env/{ambiente}.env` exista
export CYPRESS_ENV=staging          # dev é o padrão
export BASE_URL=http://sua-app.com  # padrão: https://demoqa.com

# 5. Abra a interface interativa
npm run open:dev               # para outros ambientes use: CYPRESS_ENV=staging npm run cy:open

# 6. Rode a suíte de testes no modo headless
npm run test:dev            # ou npm run test:staging / test:prod

# 7. Formate e verifique o estilo do código
npm run format
npm run lint
```

---

## 📜 Scripts disponíveis

- `npm run open:dev` – Abre a interface no ambiente de desenvolvimento
- `npm run test:dev` – Executa a suíte no modo headless (DEV)
- `npm run test:staging` – Executa os testes no ambiente STAGING
- `npm run test:prod` – Executa os testes no ambiente PROD
- `npm run cy:open` – Abre a interface usando o ambiente definido
- `npm run cy:run` – Executa os testes usando o ambiente definido
- `npm run lint` – Verifica padrões de código com ESLint
- `npm run format` – Formata o código com Prettier

---

## ✅ Boas Práticas

- ✅ **Use comandos customizados**: Evita duplicação e torna os testes mais legíveis.
- 🧱 **Centralize rotas**: Facilita manutenção e evita erros de digitação.
- 🧪 **Separe por contexto**: Organize testes em arquivos como `form`, `alert`, `dynamic`, etc.
- 🧪 Valide o conteúdo, não só a presença dos elementos
- 🔁 Use fixtures para dados reutilizáveis
- 🔁 Utilize scripts npm para abrir, rodar e formatar o projeto
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
