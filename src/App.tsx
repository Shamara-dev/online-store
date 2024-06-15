import Header from './components/Header';
import AppRouter from './components/AppRouter';

const App = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <Header />
            <AppRouter />
        </div>
    );
};

export default App;
