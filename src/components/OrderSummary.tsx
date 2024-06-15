import { useAppSelector } from '../app/hooks';
import { selectTotalPrice } from '../features/cartSlice';

interface OrderSummaryProps {
    title?: string;
    onClick?: () => void;
}

const OrderSummary = ({ title, onClick }: OrderSummaryProps) => {
    const totalPrice = useAppSelector(selectTotalPrice);

    return (
        <div className="lg:w-[33%] max-h-[410px] lg:ml-auto m-5 p-8 border border-[#a2a3b1]">
            <h3 className="text-xl font-bold">Order Summary</h3>
            <div className="py-8 flex flex-col gap-6">
                <div className="flex justify-between">
                    <span>Price</span>
                    <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between">
                    <span>Discount</span>
                    <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>Free</span>
                </div>
            </div>
            <hr />
            <div className="pt-8 flex flex-col gap-6">
                <div className="flex justify-between">
                    <span>TOTAL</span>
                    <span>${totalPrice}</span>
                </div>
                {title && onClick && (
                    <button
                        className="p-4 rounded-md text-white bg-teal-600 hover:bg-teal-700"
                        onClick={onClick}
                    >
                        {title}
                    </button>
                )}
            </div>
        </div>
    );
};

export default OrderSummary;
