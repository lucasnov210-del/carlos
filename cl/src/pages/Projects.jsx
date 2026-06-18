import AnimatedPage from '../components/AnimatedPage';
import {useState} from 'react';

export default function Projects() {
    const categories = ["Tous", "Front-End", "UI / Design"];

    const [activeFilter, setActiveFilter] = useState("Tous");
   

    return(
        <AnimatedPage>
            <div className='space-y-10 py-10 animate-in fade-in duration-500'>
                <div className='space-y-4 max-w-xl'>
                    <h1 className='text-4xl font-extrabold text-gray-950 dark:text-white tracking-tight'>
                        Mes Projets
                    </h1>
                    <p className='text-gray-600 dark:text-gray-400'>
                        Découvrez une sélection de mes réalisations récentes. Chaque projet reflète mon attention aux détails et à la qualité du code.
                    </p>
                </div>
                <div className='flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-4'>
                    {categories.map((category) => (
                        <button key={category} onClick={() => setActiveFilter(category)} 
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                            activeFilter === category ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                            : "bg-gray-150 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700"
                        }`}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    
                </div>
            </div>
        </AnimatedPage>
    );
}