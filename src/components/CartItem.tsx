import { useAppDispatch } from '../app/hooks';
import {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
} from '../features/cartSlice';
import { CartProduct } from '../types';

const CartItem = ({ id, title, image, quantity, price }: CartProduct) => {
    const dispatch = useAppDispatch();

    const handleDecreaseQuantity = () => {
        dispatch(decreaseProductQuantity(id));
    };

    const handleIncreaseQuantity = () => {
        dispatch(increaseProductQuantity(id));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeProductFromCart(id));
    };

    return (
        <div className="w-full py-8 flex justify-around ">
            <img
                className="w-[80px] sm:w-[160px] sm:h-[160px] object-contain flex-shrink-0"
                src={image}
                alt="product"
            />
            <div className="pl-9 flex flex-col gap-7">
                <p>{title}</p>
                <p>Color: Default</p>
                <div className="flex gap-7">
                    <div className="p-2 sm:p-4  sm:w-[160px] flex justify-around gap-10 border border-[#a2a3b1]">
                        <button
                            onClick={handleDecreaseQuantity}
                            disabled={quantity === 0}
                        >
                            —
                        </button>
                        <span>{quantity}</span>
                        <button onClick={handleIncreaseQuantity}>+</button>
                    </div>
                    <button
                        className="text-[#e14b4b]"
                        onClick={handleRemoveFromCart}
                    >
                        Remove
                    </button>
                </div>
            </div>
            <p className="ml-auto">${(price * quantity).toFixed(2)}</p>
        </div>
    );
};

export default CartItem;
