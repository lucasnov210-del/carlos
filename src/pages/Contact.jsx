import AnimatedPage from '../components/AnimatedPage';
import {Mail, Phone, MapPin, Send} from 'lucide-react';

export default function Contact() {
    const email = "lucasnov210@gmail.com";
    const phoneNumber = "+261 32 83 998 65";
    const location = "Madagascar, Mahajanga";

    return(
        <AnimatedPage>
            <div className='space-y-10 py-10 animate-in fade-in duration-500'>
                <div className='space-y-4 max-w-xl'>
                    <h1 className='text-4xl font-extrabold text-gray-950 dark:text-white tracking-tight '>
                        Contact
                    </h1>
                    <p className='text-gray-600 dark:text-gray-400'>
                        Vous avez une opportunité, une question ou un projet en tête ? Remplissez le formulaire ci-dessous ou contactez-moi directement.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:col-span-1'>
                    <div className='p-6 bg-white dark:bg-slate-855 border border-gray-100 dark:border-gray-800/80 rounded-2xl space-y-6'>
                        <h3 className='text-lg font-bold text-gray-950 dark:text-white'>Mes Coordonnées</h3>
                        <a href={`mailto:${email}`}
                        className='flex items-start gap-4 group'>
                            <div className='p-3 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200'>
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className='text-xs font-medium text-gray-400 uppercase tracking-wider dark:text-gray-800'>Email</p>
                                <p className='text-sm font-semibold text-gray-700 dark:text-gray-800 group-hover:text-blue-500 transition-colors break-all'>{email}</p>
                            </div>
                        </a>
                        <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                        className='flex items-start gap-4 group'>
                            <div className='p-3 bg-teal-50 dark:bg-slate-800 text-teal-600 dark:text-teal-400 rounded-xl group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200'>
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className='text-xs font-medium text-gray-400 uppercase tracking-wider dark:text-gray-800'>Téléphone</p>
                                <p className='text-sm font-semibold text-gray-700 dark:text-gray-800 group-hover:text-blue-500 transition-colors break-all'>{phoneNumber}</p>
                            </div>
                        </a> 
                        <div className='flex items-start gap-4'>
                            <div className='p-3 bg-purple-50 dark:bg-slate-800 text-purple-600 dark:text-purple-400 rounded-xl'>
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className='text-xs font-medium text-gray-400 uppercase tracking-wider dark:text-gray-800'>Localisation</p>
                                <p className='text-sm font-semibold text-gray-700 dark:text-gray-800 group-hover:text-blue-500 transition-colors break-all'>{location}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-2'>
                    <form action="https://formspree.io/f/maqzooog"
                    method='POST'
                    className='p-6 bg-white dark:bg-slate-855 border border-gray-100 dark:border-gray-800/80 rounded-2xl space-y-6'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                            <div className='space-y-2'>
                                <label htmlFor="name" className='text-sm font-medium text-gray-700 dark:text-gray-800'>Votre Nom:</label>
                                <input type="text"
                                name="name"
                                id="name" required
                                className='w-full px-4 py-3 bg-gray-50  dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus-ring-blue-500/20 focus:border-blue-500 transition-all text-sm'
                                />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="email" className='text-sm font-medium text-gray-700 dark:text-gray-800'>Votre Email:</label>
                                <input type="email"
                                name="email"
                                id="email" required 
                                className='w-full px-4 py-3 bg-gray-50  dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus-ring-blue-500/20 focus:border-blue-500 transition-all text-sm'
                                />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="subject" className='text-sm font-medium text-gray-700 dark:text-gray-800'>Sujet:</label>
                            <input type="text"
                                name="subject"
                                id="subject" required 
                                className='w-full px-4 py-3 bg-gray-50  dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus-ring-blue-500/20 focus:border-blue-500 transition-all text-sm'
                                />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="message" className='text-sm font-medium text-gray-700 dark:text-gray-800'>Message:</label>
                            <textarea name="message" id="message"
                            rows="5" required
                            className='w-full px-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus-ring-blue-500/20 focus:border-blue-500 transition-all text-sm'>
                            </textarea>
                        </div>
                        <button
                        type='submit'
                        className='inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-xl shadow-md shadow-blue-500/12 transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center cursor-pointer'>
                            <Send size={16} />
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>
        </AnimatedPage>
        
    );
}