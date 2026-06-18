import {HashRouter, Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageHome from './pages/PageHome';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function AnimatedRoutes() {
    const location = useLocation();

    return(
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                 <Route path='/' element={<PageHome />}/>
                 <Route path='/projects' element={<Projects />}/>
                 <Route path='/contact' element={<Contact />}/>
            </Routes>
        </AnimatePresence>
    );
}

export default function App() {
    return(
        <HashRouter>
            <div className='flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300'>
                
                <Navbar />
                <main className='flex-grow max-w-5xl w-full mx-auto p-4 mt-4'>
                   <AnimatedRoutes />
                </main>

                <Footer />
            </div>
        </HashRouter>

    );
}
