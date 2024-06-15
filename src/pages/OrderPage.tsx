import { useState } from 'react';
import OrderSummary from '../components/OrderSummary';
import SuccessMessage from '../components/SuccessMessage';
import OrderForm from '../components/OrderForm';

const OrderPage = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <>
            <div className="md:flex">
                <OrderForm setShowSuccess={setShowSuccess} />
                <OrderSummary />
            </div>
            {showSuccess && <SuccessMessage />}
        </>
    );
};

export default OrderPage;
