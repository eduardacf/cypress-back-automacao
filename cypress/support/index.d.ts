/// <reference types="cypress" />

export interface Livro {
    id: number;
    title: string;
    description: string;
    pageCount: number;
    excerpt: string;
    publishDate: string;
}

declare global {
    namespace Cypress {
        interface Chainable {
            criarLivro(livro: Livro): Chainable<Cypress.Response<Livro>>;
            deletarLivro(id: number): Chainable<Cypress.Response>;
            editarLivro(id: number, livro: Livro): Chainable<Cypress.Response<Livro>>;
            buscarLivroPorId(id: number, failOnError?: boolean): Chainable<Cypress.Response<Livro>>;
            validarContratoLivro(response: Cypress.Response<Livro>): void;
            gerarLivroFake(): Chainable<Livro>;
            buscarTodosOsLivros(): Cypress.Chainable<Cypress.Response<Livro[]>>
        }
    }
}

export {};
