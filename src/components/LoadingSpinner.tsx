const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            <p className="mt-4">Loading...</p>
        </div>
    );
};

export default LoadingSpinner;
