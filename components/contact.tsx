import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/40 to-white dark:from-indigo-950/20 dark:to-slate-950'
    >
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-10'>
          <div className='inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900 px-4 py-2 rounded-full text-sm font-medium mb-5'>
            <Mail className='h-4 w-4' />
            <span>Get In Touch</span>
          </div>
          <h2 className='text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight'>
            Let&apos;s Connect
          </h2>
          <p className='text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed'>
            I&apos;m currently open to internships, junior frontend roles, and
            freelance collaborations. If you have an opportunity or just want to
            talk code — reach out.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <Link
            href='https://github.com/muhammadmuaz11'
            target='_blank'
            rel='noopener noreferrer'
            className='group p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
          >
            <div className='flex items-center gap-4'>
              <div className='p-3 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 transition-colors'>
                <Github className='h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors' />
              </div>
              <div>
                <h3 className='font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
                  GitHub
                </h3>
                <p className='text-sm text-slate-500 dark:text-slate-400'>
                  View my code
                </p>
              </div>
            </div>
          </Link>

          <Link
            href='https://www.linkedin.com/in/muhammad-muaz-57b02b344/'
            target='_blank'
            rel='noopener noreferrer'
            className='group p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
          >
            <div className='flex items-center gap-4'>
              <div className='p-3 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 transition-colors'>
                <Linkedin className='h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors' />
              </div>
              <div>
                <h3 className='font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
                  LinkedIn
                </h3>
                <p className='text-sm text-slate-500 dark:text-slate-400'>
                  Connect with me
                </p>
              </div>
            </div>
          </Link>

          <Link
            href='mailto:muhammadmuaz0165@gmail.com'
            className='group p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
          >
            <div className='flex items-center gap-4'>
              <div className='p-3 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 transition-colors'>
                <Mail className='h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors' />
              </div>
              <div>
                <h3 className='font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
                  Email
                </h3>
                <p className='text-sm text-slate-500 dark:text-slate-400 truncate max-w-40'>
                  muhammadmuaz0165@gmail.com
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
