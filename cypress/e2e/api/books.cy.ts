import type {Livro} from '../../support';

describe('API - Livros (GET, POST, PUT, DELETE)', () => {

    it('Deve buscar todos os livros com sucesso', () => {
        cy.buscarTodosOsLivros().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body.length).to.be.greaterThan(0);
            response.body.forEach((livro: Livro) => {
                expect(livro).to.have.all.keys('id', 'title', 'description', 'pageCount', 'excerpt', 'publishDate');
                expect(livro.id).to.be.a('number');
                expect(livro.title).to.be.a('string');
            });
        });
    });

    it('Deve validar o contrato de um livro existente (id = 1)', () => {
        cy.buscarLivroPorId(1).then((res) => {
            cy.validarContratoLivro(res);
            expect(res.body.id).to.eq(1);
        });
    });

    it('Deve criar um livro com sucesso (dados gerados)', () => {
        cy.gerarLivroFake().then((livro) => {
            cy.criarLivro(livro).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.title).to.eq(livro.title);
                expect(response.body).to.have.property('id').that.is.a('number');
            });
        });
    });

    it('Deve criar um livro e editar com sucesso', () => {
        cy.gerarLivroFake().then((livro) => {
            cy.criarLivro(livro).then((resPost) => {
                expect(resPost.status).to.eq(200);
                const id = resPost.body.id;

                livro.title = 'Livro Atualizado com Faker';
                cy.editarLivro(id, livro).then((resPut) => {
                    expect(resPut.status).to.eq(200);
                    expect(resPut.body.title).to.eq('Livro Atualizado com Faker');
                    expect(resPut.body.id).to.eq(id);
                });
            });
        });
    });

    it('Deve criar e deletar um livro com sucesso', () => {
        cy.gerarLivroFake().then((livro) => {
            cy.criarLivro(livro).then((resPost) => {
                expect(resPost.status).to.eq(200);
                const idLivroCriado = resPost.body.id;

                cy.deletarLivro(idLivroCriado).then((resDelete) => {
                    expect(resDelete.status).to.eq(200);
                });

                cy.buscarLivroPorId(idLivroCriado, false).then((resGet) => {
                    expect(resGet.status).to.eq(404);
                });
            });
        });
    });

    it('Deve retornar 404 ao tentar buscar um livro inexistente', () => {
        cy.buscarLivroPorId(99999, false).then((res) => {
            expect(res.status).to.eq(404);
            expect(res.body).to.have.property('title', 'Not Found');
        });
    });
});
