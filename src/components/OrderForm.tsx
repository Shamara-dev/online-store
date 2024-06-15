import React, { useState } from 'react';
import FormField from './FormField';
import { useAppDispatch } from '../app/hooks';
import { removeAllProducts } from '../features/cartSlice';

interface OrderFormProps {
    setShowSuccess: (showSuccess: boolean) => void;
}

interface FormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
}

const OrderForm = ({ setShowSuccess }: OrderFormProps) => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const dispatch = useAppDispatch();

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};
        let isValid = true;

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Please enter your full name';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email address';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Please enter your phone number';
            isValid = false;
        } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Please enter a valid phone number';
            isValid = false;
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Please enter your delivery address';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (validateForm()) {
            setShowSuccess(true);
            dispatch(removeAllProducts());
        } else {
            console.log('Form is not valid. Please fix errors.');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit} className="md:w-[50%] mx-auto p-8">
            <FormField
                name="fullName"
                label="Full Name:"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
            />
            <FormField
                name="email"
                label="Email:"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
            />
            <FormField
                name="phoneNumber"
                label="Phone Number:"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                error={errors.phoneNumber}
            />
            <FormField
                name="address"
                label="Delivery Address:"
                type="text"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
            />
            <button
                type="submit"
                className="py-2 px-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white"
            >
                Place Order
            </button>
        </form>
    );
};

export default OrderForm;
