import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useAppDispatch } from '../app/hooks';
import { addProductToCart } from '../features/cartSlice';

const ProductCard = (product: Product) => {
    const { id, title, image, price } = product;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const addProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        dispatch(addProductToCart({ ...product, quantity: 1 }));
    };

    return (
        <div
            className="h-[300px] w-full max-w-[200px] flex flex-col justify-center"
            onClick={() => navigate(`product/${id}`)}
        >
            <img
                className="h-[200px] w-[200px] object-contain flex-shrink-0 cursor-pointer"
                src={image}
                alt="product"
            />
            <p className="h-12 line-clamp-2">{title}</p>
            <div className="flex items-center justify-between">
                <p>{price}$</p>
                <button
                    className="p-1 rounded-md hover:text-white hover:bg-teal-600"
                    onClick={addProduct}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
