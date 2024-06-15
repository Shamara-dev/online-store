import { Link } from 'react-router-dom';
import CartIcon from '../assets/CartIcon';
import { useAppSelector } from '../app/hooks';
import { selectCartQuantity } from '../features/cartSlice';
import SearchDropdawn from './SearchDropdawn';

const Header = () => {
    const cartQuantity = useAppSelector(selectCartQuantity);

    return (
        <header className="h-24 w-full px-5 flex items-center justify-between">
            <Link className="text-3xl" to="/">
                Store
            </Link>
            <SearchDropdawn />
            <Link to="/cart" className="relative">
                <CartIcon />
                {cartQuantity > 0 && (
                    <span className="w-5 h-5 absolute top-2 right-2 flex items-center justify-center border rounded-full text-xs text-white bg-red-500">
                        {cartQuantity}
                    </span>
                )}
            </Link>
        </header>
    );
};

export default Header;
