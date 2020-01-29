import data, { IProduct } from '../scenes/data';

export function fetchData(): Promise<IProduct[]> {
    return new Promise((resolve) => setTimeout(() => resolve(data), 2000));
}
