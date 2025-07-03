const BASE = '/api/v1/Books';

export const rotas = {
    livros: {
        base: BASE,
        porId: (id: number) => `${BASE}/${id}`,
    },
};
