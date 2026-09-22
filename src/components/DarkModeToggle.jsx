import {useState, useEffect} from 'react';
import {Sun, Moon} from 'lucide-react';

export default function DarkModeToggle () {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if(darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else{
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return(
        <button onClick={() => setDarkMode(!darkMode)} className='p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800
        dark:text-yellow-400 hover:scale-105 active:scale-95 transition-all duration-200'>
            {darkMode ? (
                <Sun size={20} classname='animate-pulse' />
            ): (
                <Moon size={20} className='text-slate-700' />
            )}
        </button>
    );
}