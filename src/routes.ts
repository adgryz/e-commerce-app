export const LANDING_PAGE = '/';
export const getProductsCategoryRoute = (category?: CategoryRoute) =>
    category ? `/products/${category}` : `/products/:category`;

export enum CategoryRoute {
    Men = 'men',
    Women = 'women',
    Children = 'children',
    Sports = 'sports',
}
