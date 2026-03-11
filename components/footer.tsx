import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className='py-6 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/30'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <div className='text-sm text-slate-500 dark:text-slate-400'>
            © {new Date().getFullYear()}{" "}
            <span className='font-medium text-slate-700 dark:text-slate-300'>
              Muhammad Muaz
            </span>
          </div>
          <div className='flex space-x-3'>
            <Link
              href='https://github.com/muhammadmuaz11'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:shadow-md'
            >
              <Github className='h-4 w-4' />
              <span className='sr-only'>GitHub</span>
            </Link>
            <Link
              href='https://www.linkedin.com/in/muhammad-muaz-57b02b344/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:shadow-md'
            >
              <Linkedin className='h-4 w-4' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
            <Link
              href='mailto:muhammadmuaz0165@gmail.com'
              className='p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:shadow-md'
            >
              <Mail className='h-4 w-4' />
              <span className='sr-only'>Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
