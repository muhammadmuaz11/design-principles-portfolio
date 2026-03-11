"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <nav className='fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link
            href='/'
            className='font-bold text-xl text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
          >
            MM.
          </Link>

          <div className='flex items-center space-x-4'>
            <nav className='hidden md:flex space-x-8'>
              {[
                { href: "/#home", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/#projects", label: "Projects" },
                { href: "/#services", label: "Services" },
                { href: "/#contact", label: "Contact" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className='relative text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full'
                >
                  {label}
                </a>
              ))}
            </nav>
            <Button
              variant='ghost'
              size='sm'
              className='p-2 hover:bg-indigo-50 dark:hover:bg-slate-800'
            >
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
