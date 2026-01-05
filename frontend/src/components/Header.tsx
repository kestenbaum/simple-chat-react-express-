import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-blue-950/80 backdrop-blur-md shadow-lg">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-14 items-center justify-between">
                    <Link
                        to="#"
                        className="text-xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-blue-300"
                    >
                        Simple Chat
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;