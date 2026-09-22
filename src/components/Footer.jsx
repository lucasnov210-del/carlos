import { Mail, MessageSquare, Phone} from 'lucide-react';

export default function Footer () {
    const email = "lucasnov210@gmail.com";
    const phoneNumber = "+261328399865";

    return(
        <footer className='mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-400 transition-colors duration-300'>
            <div className='max-w-5xl mx-auto px-4 py-8 flex flex-col  justify-between items-center gap-4'>
                <p className='text-sm'>
                    &copy; {new Date().getFullYear()} MonPortfolio.Tous droits réservés.
                </p>

                <div className='flex flex-wrap gap-4'>
                    <a href={`mailto:${email}`} className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-500 dark:hover:text-green-400 transition-all'
                    title='M"envoyer un Email'>
                        <Mail size={20} />
                    </a>

                    <a href={`sms: ${phoneNumber}`} className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-500 dark:hover:text-green-400 transition-all'
                    title='M"envoyer un SMS'>
                        <MessageSquare size={20} />
                    </a>

                    <a href={`tel:${phoneNumber}`} className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-500 dark:hover:text-green-400 transition-all'
                    title='M"appeler directement'>
                        <Phone size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}