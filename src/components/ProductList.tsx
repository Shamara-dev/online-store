import { useAppSelector } from '../app/hooks';
import { selectActiveCategory } from '../features/categorySlice';
import { useGetProductsByCategoryQuery } from '../features/productsApi';
import LoadingSpinner from './LoadingSpinner';
import ProductCard from './ProductCard';

const ProductList = () => {
    const activeCategory = useAppSelector(selectActiveCategory);
    const { data: products, isLoading } =
        useGetProductsByCategoryQuery(activeCategory);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (!products || products.length === 0) {
        return <p className="text-center">No products available</p>;
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            {products &&
                products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
        </div>
    );
};

export default ProductList;
