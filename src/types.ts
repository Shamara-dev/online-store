export interface Product {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
}

export interface CartProduct extends Product {
    quantity: number;
}
