import { useRef } from 'react';
import { useAppDispatch } from '../app/hooks';
import { setSearchQuery } from '../features/categorySlice';
import SearchIcon from '../assets/SearchIcon';
import ClearIcon from '../assets/ClearIcon';

interface SearchBarProps {
    searchQuery: string;
    setIsVisible: (isVisible: boolean) => void;
}

const SearchBar = ({ searchQuery, setIsVisible }: SearchBarProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const activeSearch = () => {
        if (ref.current) {
            ref.current.focus();
        }
        setIsVisible(true);
    };

    return (
        <div
            className="relative flex items-center justify-center gap-2 "
            onClick={activeSearch}
        >
            <input
                className="w-full p-1 rounded-md border transition-all duration-300 ease-in-out"
                placeholder="Search..."
                ref={ref}
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            {searchQuery !== '' && (
                <div
                    className="absolute top-2 right-8 cursor-pointer z-55"
                    onClick={() => dispatch(setSearchQuery(''))}
                >
                    <ClearIcon />
                </div>
            )}
            <SearchIcon />
        </div>
    );
};

export default SearchBar;
