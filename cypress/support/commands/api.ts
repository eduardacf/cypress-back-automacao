import {rotas} from "../../../utils/rotas";
import { faker } from '@faker-js/faker';
import type { Livro } from '../index';

Cypress.Commands.add(
    'validarContratoLivro',
    (response: Cypress.Response<Livro>) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys(
            'id',
            'title',
            'description',
            'pageCount',
            'excerpt',
            'publishDate'
        );
    }
);

Cypress.Commands.add('criarLivro', (livro: Livro) => {
    return cy.request('POST', rotas.livros.base, livro);
});

Cypress.Commands.add('deletarLivro', (id) => {
   return cy.request('DELETE', rotas.livros.porId(id));
});

Cypress.Commands.add('buscarTodosOsLivro', () => {
    return cy.request('GET', rotas.livros.base);
});

Cypress.Commands.add('editarLivro', (id,livro) => {
return cy.request('PUT', rotas.livros.porId(id), livro);
});

Cypress.Commands.add('buscarLivroPorId', (id: number, failOnError: boolean = true) => {
    return cy.request({
        method: 'GET',
        url: rotas.livros.porId(id),
        failOnStatusCode: failOnError
    });
});

Cypress.Commands.add('gerarLivroFake', (): Cypress.Chainable<Livro> => {
    const livro: Livro = {
        id: faker.number.int({ min: 10000, max: 99999 }),
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
        pageCount: faker.number.int({ min: 50, max: 500 }),
        excerpt: faker.lorem.paragraph(),
        publishDate: new Date().toISOString()
    };
    return cy.wrap(livro);
});
