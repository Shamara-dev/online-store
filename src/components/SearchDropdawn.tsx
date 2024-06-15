import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectSearchQuery } from '../features/categorySlice';
import { useGetProductsQuery } from '../features/productsApi';
import SearchBar from './SearchBar';

const SearchDropdawn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const searchQuery = useAppSelector(selectSearchQuery);
    const { data: products } = useGetProductsQuery();

    const sortedProducts = useMemo(() => {
        return products?.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, products]);

    return (
        <div className="w-full h-16 flex flex-col items-center gap-2">
            {isVisible && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    onClick={() => setIsVisible(false)}
                />
            )}
            <div
                className="md:w-[600px] p-4 bg-white rounded-md z-50"
                onClick={(e) => e.stopPropagation()}
            >
                <SearchBar
                    searchQuery={searchQuery}
                    setIsVisible={setIsVisible}
                />
                {isVisible &&
                    (sortedProducts?.length === 0 ? (
                        <p className="p-2 text-center">
                            No exact matches found
                        </p>
                    ) : (
                        <ul className="max-h-[600px] overflow-y-scroll p-4 flex flex-col gap-8  bg-white">
                            {sortedProducts &&
                                sortedProducts.map((product) => (
                                    <li
                                        key={product.id}
                                        className="flex items-center gap-2 cursor-pointer"
                                        onClick={() => {
                                            navigate(`/product/${product.id}`);
                                            setIsVisible(false);
                                        }}
                                    >
                                        <img
                                            className="w-[60px] h-[60px] object-contain flex-shrink-0"
                                            src={product.image}
                                            alt="img"
                                        />
                                        <p className="line-clamp-1">
                                            {product.title}
                                        </p>
                                    </li>
                                ))}
                        </ul>
                    ))}
            </div>
        </div>
    );
};

export default SearchDropdawn;
