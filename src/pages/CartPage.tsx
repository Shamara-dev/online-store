import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import { removeAllProducts } from '../features/cartSlice';

const CartPage = () => {
    const cartProducts = useAppSelector((state) => state.cart.products);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    if (cartProducts.length === 0) {
        return <div className="text-3xl text-center">Your cart is empty</div>;
    }

    return (
        <div className="pt-8 w-full lg:flex">
            <div className="lg:w-[55%] p-5">
                <div className="pb-2 flex items-center">
                    <h2 className=" font-bold text-2xl">Cart</h2>
                    <button
                        className="ml-auto text-[#e14b4b]"
                        onClick={() => dispatch(removeAllProducts())}
                    >
                        Remove all products
                    </button>
                </div>
                {cartProducts &&
                    cartProducts.map((product) => (
                        <CartItem key={product.id} {...product} />
                    ))}
            </div>
            <OrderSummary
                title="Place an order"
                onClick={() => navigate('/order')}
            />
        </div>
    );
};

export default CartPage;
