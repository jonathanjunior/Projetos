const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b';
const API_BASE ='https://api.themoviedb.org/3';

/* 
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'originais do Netflix',
                items: []
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: []
            }
        ];
    }
}