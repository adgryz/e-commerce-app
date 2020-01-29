import { CategoryRoute } from '../../../routes';
import { ProductCategory } from '../../data';

export const routeToCategory = (route: CategoryRoute) => {
    switch (route) {
        case CategoryRoute.Men:
            return 'Men Accessories';
        case CategoryRoute.Women:
            return 'Women Accessories';
        case CategoryRoute.Children:
            return 'Children Accessories';
        case CategoryRoute.Sports:
            return 'Sports Accessories';
    }
};

export const categoryToRoute = (category: ProductCategory) => {
    switch (category) {
        case 'Men Accessories':
            return CategoryRoute.Men;
        case 'Women Accessories':
            return CategoryRoute.Women;
        case 'Children Accessories':
            return CategoryRoute.Children;
        case 'Sports Accessories':
            return CategoryRoute.Sports;
    }
};
