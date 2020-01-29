export interface IProduct {
    id: number;
    name: string;
    category: ProductCategory;
    price: number;
    image: string;
}

export type ProductCategory =
    | 'Men Accessories'
    | 'Women Accessories'
    | 'Children Accessories'
    | 'Sports Accessories';

const data: IProduct[] = [
    {
        id: 1,
        name: 'Winter Jacket',
        category: 'Men Accessories',
        price: 20,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61fTX5TjAEL._UX679_.jpg',
    },
    {
        id: 2,
        name: 'Wrist Watch',
        category: 'Men Accessories',
        price: 30,
        image:
            'https://ecsmedia.pl/c/pasek-do-smartwatcha-samsung-galaxy-watch-46mm-tech-protect-leather-w-iext54615311.jpg',
    },
    {
        id: 3,
        name: 'Wrist Band',
        category: 'Women Accessories',
        price: 5,
        image:
            'http://www.10sterling.com/images/products/ladies-leather-bracelet-antique-dark-brown-gold-ip-clasp--new796.jpg',
    },
    {
        id: 4,
        name: 'Hand bag',
        category: 'Women Accessories',
        price: 20,
        image:
            'https://229702-702336-raikfcquaxqncofqfm.stackpathdns.com/64792-large_default/new-satchel-bags-ladies-hand-bags-multiple-mother-bags.jpg',
    },
    {
        id: 5,
        name: 'Shoes',
        category: 'Children Accessories',
        price: 20,
        image:
            'https://www.dhresource.com/0x0/f2/albu/g5/M00/D0/51/rBVaI1mG1uqAVVKNAACmwWIuHbk430.jpg',
    },
    {
        id: 6,
        name: 'Kids Scraf',
        category: 'Children Accessories',
        price: 10,
        image:
            'https://www.sklepmartes.pl/59171-large_default/dzieciecy-szalik-animal-scarf-kids-6354-fox-bejo.jpg',
    },
    {
        id: 7,
        name: 'Soccer Ball',
        category: 'Sports Accessories',
        price: 20,
        image: 'https://toys4dogs.pl/img/products/64/9/1_max.jpg',
    },
    {
        id: 8,
        name: 'Base Ball',
        category: 'Sports Accessories',
        price: 15,
        image:
            'https://cdn.shopify.com/s/files/1/0749/1877/products/BaseballRawlingsOfficialHero_0001_quarter_2048x2048.jpeg?v=1445545751',
    },
];

export default data;
