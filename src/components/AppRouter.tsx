import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProductPage = lazy(() => import('../pages/ProductPage'));
const CartPage = lazy(() => import('../pages/CartPage'));
const OrderPage = lazy(() => import('../pages/OrderPage'));

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <HomePage />
                    </Suspense>
                }
            />
            <Route
                path="/cart"
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <CartPage />
                    </Suspense>
                }
            />
            <Route
                path="/order"
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <OrderPage />
                    </Suspense>
                }
            />
            <Route
                path="/product/:id"
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProductPage />
                    </Suspense>
                }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;
