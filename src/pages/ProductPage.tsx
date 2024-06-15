import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../features/productsApi';
import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { addProductToCart } from '../features/cartSlice';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductPage = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetProductByIdQuery(id!);
    const dispatch = useAppDispatch();

    const [quantity, setQuantity] = useState(1);

    if (isLoading || !data) return <LoadingSpinner />;

    const { title, description, image, price, category } = data;
    const decreaseQuantity = () =>
        setQuantity((prevQuantity) => prevQuantity - 1);
    const increaseQuantity = () =>
        setQuantity((prevQuantity) => prevQuantity + 1);

    return (
        <div className="h-full px-12 py-20">
            <div className="pb-10 text-sm font-semibold">
                <span className="text-black/40 capitalize">{category}</span>/{' '}
                <span>{title}</span>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between">
                <div className="md:w-[40%]">
                    <p className="font-bold text-4xl">{title}</p>
                    <p className="pt-6 font-semibold text-2xl">{price}$</p>
                    <p className="pt-12 pb-8 text-base">{description}</p>
                    <div className="flex gap-6  ">
                        <div className="p-4 w-[160px] flex justify-around gap-10 border border-[#a2a3b1]">
                            <button
                                onClick={decreaseQuantity}
                                disabled={quantity === 1}
                            >
                                —
                            </button>
                            {quantity}
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                        <button
                            className="w-[160px] rounded-md text-white bg-teal-600 hover:bg-teal-700"
                            onClick={() =>
                                dispatch(
                                    addProductToCart({ ...data, quantity })
                                )
                            }
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="md:w-[40%]">
                    <img
                        className="w-[300px] h-full m-auto object-contain flex-shrink-0"
                        src={image}
                        alt="product"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
