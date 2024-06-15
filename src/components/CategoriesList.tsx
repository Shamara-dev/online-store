import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
    selectActiveCategory,
    selectCategories,
    setActiveCategory,
} from '../features/categorySlice';

const CategoriesList = () => {
    const categories = useAppSelector(selectCategories);
    const activeCategory = useAppSelector(selectActiveCategory);
    const dispatch = useAppDispatch();

    const [selectedCategory, setSelectedCategory] = useState(activeCategory);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        dispatch(setActiveCategory(category));
    };

    const handleSelectChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            const newCategory = e.target.value;
            setSelectedCategory(newCategory);
            dispatch(setActiveCategory(newCategory));
        },
        [dispatch]
    );

    return (
        <>
            <div className="py-5 hidden sm:flex items-center justify-center gap-8">
                {categories?.map((category) => (
                    <div
                        key={category}
                        className="p-4 w-[180px] capitalize text-white text-center rounded bg-teal-600 cursor-pointer hover:bg-teal-700"
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>
            <div className="p-5 sm:hidden flex flex-col items-center justify-center">
                <select
                    value={selectedCategory}
                    onChange={handleSelectChange}
                    className="p-4 w-full capitalize text-white bg-teal-600 outline-none cursor-pointer appearance-none"
                >
                    {categories.map((category) => (
                        <option
                            key={category}
                            className="text-center"
                            value={category}
                        >
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default CategoriesList;
