import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessMessage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-12 rounded-lg text-center">
                <p className="text-xl font-semibold pb-2">
                    Your purchase has been successfully completed!
                </p>
                <p>
                    You will be redirected to the main page in a few seconds...
                </p>
            </div>
        </div>
    );
};

export default SuccessMessage;
