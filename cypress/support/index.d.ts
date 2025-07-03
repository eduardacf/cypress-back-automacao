/// <reference types="cypress" />
interface Livro {
    id: number;
    title: string;
    description: string;
    pageCount: number;
    excerpt: string;
    publishDate: string;
}

declare namespace Cypress {
    interface Chainable {
        deletarLivro(id: number): Chainable<Cypress.Response<any>>;
        validarContratoLivro(response: Cypress.Response<Livro>): void;
        criarLivro(livro: Livro): Chainable<Response<any>>;
        editarLivro(id: any, livro: any): Cypress.Chainable<Cypress.Response<any>>
        buscarLivro(id: number, failOnError?: boolean): Chainable<Cypress.Response<any>>;
        gerarLivroFake(): Chainable<Livro>;
    }
}
