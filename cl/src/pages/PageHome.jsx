import AnimatedPage from '../components/AnimatedPage';
import {Link} from 'react-router-dom';
import {ArrowRight, Code, Layout, Database, Terminal, FileText, Sparkles} from 'lucide-react';

export default function PageHome( ){
    const skills = [
        {icon: <Layout className='text-bluey-500' size={24}/>, title:"Front-End", desc:"React, Vite, JS(ES6+), HTML5,CSS3"},
        {icon:<Code className='text-teal-500' size={24}/>, title:"Style & UI", desc:"Tailwind CSS v4, Responsive Design, Lucide Icons"},
        {icon:<Database className='texte-purple-500 ' size={24}/>, title:"State & Data", desc:"React Router Dom, Context API, JSON Local"},
        {icon:<Terminal className='text-orange-500' size={24}/>, title:"Outils", desc:"Git, Github, NPM, VScode, Versel /Netlif"}
    ];

    return(
        <AnimatedPage>
            <div className='space-y-20 py-10 animate-in fade-in duration-500'>
                <section className='flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
                    <div className='space-y-6 max-w-2xl text-center md:text-left'>
                        <div className='inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium'>
                            <Sparkles size={16} />
                            Disponible pour de nouveau projets
                        </div>
                        <h1 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white leading-tight'>
                            Bonjour, je suis <span className='bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent'>Carlos</span> <br />
                            Développeur Front-End React.
                        </h1>
                        <p className='text-lg text-gray-600 dark:text-gray-400'>
                            Passionné par la création d'interfaces web, modernes, fluides et optimisées.
                            Je spécialise mon travail autour de l'écosystème React et du design avec Tailwind CSS.
                        </p>

                        <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
                            <Link to="/projects" className='inline-flex items-center gap-2 bg-blue-700 texte-white font-medium px-6 py-3 rounded-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5'>
                                Voir mes projets<ArrowRight size={18} />
                            </Link>

                            <a href="#" download className='inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover: bg-gray-800 text-gray-700 dark:text-gra-300 font-medium px-6 py-3 rounded-xl transition-all'>
                                <FileText size={18} />
                                Télécharger mon CV
                            </a>
                        </div>
                    </div>
                    <div className='relative w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0'>
                        <div className='absolute inset-0 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-2xl rotate-6 opacity-20 blur-xl'></div>
                        <div className='w-full h-full bg-gradient-to-tr from-blue-500 to-teal-400 rounded-3xl p-1 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300'>
                            <img src={`${import.meta.env.BASE_URL}carlos.jpg`} alt="Photo de Portrait" 
                            className='w-full h-full object-cover rounded-[22px]'/>
                        </div>
                    </div>
                </section>

                <section className='space-y-8'>
                    <div className='text-center max-w-xl mx-auto space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tight text-gray-950 dark:text-white'>Mes Compétences</h2>
                        <p className='text-gray-600 dark:text-gray-400'>Les technologies et outils que j'utilse au quatidien pour donner vie à vos idées web.</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {skills.map((skill, index) => (
                            <div key={index} className='p-6 bg-white dark:bg-slate-850/60 border border-gray-100 dark:border-gray-800/80 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1'>
                                <div className='p-3 bg-gray-50 dark:bg-slate-800 w-fit rounded-xl mb-4'>
                                    {skill.icon}
                                </div>
                                <h3 className='text-lg font-semibold text-gray-950 dark:text-green mb-2'>{skill.title}</h3>
                                <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl sm:p-12 text-center text-white space-y-6 shadow-xl relative overflow-hidden'>
                    <div className='absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl'></div>
                    <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-2xl'></div>

                    <h2 className='text-3xl font-bold tracking-tight'>Un projet en tête ? Parlons-en !</h2>
                    <p className='text-blue-100 max-w-xl mx-auto text-lg'>
                        Je suis actuellement à la recherche de nouvelles opportunités en freelance ou en CDI. N'hésitez pas à me contacter directement.
                    </p>
                    <div className='pt-2 mb-2'>
                        <Link to="/contact" className='inline-flex bg-white text-blue-600 font-semibold px-8 py-3.5  rounded-xl shadow-md hover:bg-blue-50 transition-colors'>
                            Me contacter
                        </Link>
                    </div>
                </section>
            </div>
        </AnimatedPage>
    );
}