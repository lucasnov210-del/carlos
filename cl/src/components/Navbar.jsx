import {useState} from'react';
import {Link} from 'react-router-dom';
import {Home, Briefcase, Mail, X, Menu} from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);
    return(
        <nav className='border-b border-gray-250 bg-white/80 dark:border-gray-800 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300'>
            <div className='max-w-5xl mx-auto px-4 h-16 flex justify-between items-center'>
                <Link to="/" onClick={closeMenu} className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent'>
                    Bema.Dev
                </Link>

                <div className='hidden md:flex items-center gap-6'>
                    <Link to='/' title='Accueil' className='flex items-center gap-2 font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors'>
                    <Home size={30} />
                    </Link>

                    <Link to='/projects' title='Projects' className='flex items-center gap-2 font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors'>
                        <Briefcase size={30} />
                    </Link>

                    <Link to='/contact' title='Contact' className='flex items-center gap-2 font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors'>
                        <Mail size={30} />              
                    </Link>

                    <span className='h-5 w-px bg-gray-300 dark:bg-gray-700'></span>
                    <DarkModeToggle />
                </div>
                <div className='flex items-center gap-4 md:hidden'>
                    <DarkModeToggle />

                    <button onClick={() => setIsOpen(!isOpen)} className='p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                        aria-label='Ouvrir le menu'>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen &&(
                <div className='md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 transition-all animate-in fade-in slide-in-from-top-5'>
                    <div className='flex flex-col p-4 space-y-4'>
                        <Link 
                        to=""
                        onClick={closeMenu}
                        className='flex items-center gap-3 p-2 rounded-lg font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-500'>
                            <Home size={20} />
                            <span>Accueil</span>
                        </Link>

                        <Link 
                        to="/projects"
                        onClick={closeMenu}
                        className='flex items-center gap-3 p-2 rounded-lg font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-500'>
                            <Briefcase size={20} />
                            <span>Projects</span>
                        </Link>

                        <Link 
                        to="/contact"
                        onClick={closeMenu}
                        className='flex items-center gap-3 p-2 rounded-lg font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-500'>
                            <Mail size={20} />
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>
            )};
        </nav>
    );
}