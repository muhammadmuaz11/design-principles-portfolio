"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#services", label: "Services" },
    { href: "/#contact", label: "Contact" },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className='fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <Link
              href='/'
              className='font-bold text-xl text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
            >
              MM.
            </Link>

            <div className='flex items-center space-x-2 sm:space-x-4'>
              <nav className='hidden md:flex space-x-8'>
                {navLinks.map(({ href, label }) => (
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

              <Button
                variant='ghost'
                size='icon'
                className='md:hidden h-9 w-9 hover:bg-indigo-50 dark:hover:bg-slate-800'
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className='h-5 w-5 text-slate-700 dark:text-slate-200' />
                <span className='sr-only'>Open mobile menu</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden='true'
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-dvh w-72 max-w-[85vw] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-700 shadow-2xl transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label='Mobile navigation menu'
      >
        <div className='flex items-center justify-between px-5 h-16 border-b border-slate-200 dark:border-slate-700'>
          <span className='font-bold text-lg text-slate-900 dark:text-white'>
            Menu
          </span>
          <Button
            variant='ghost'
            size='icon'
            className='h-9 w-9 hover:bg-slate-100 dark:hover:bg-slate-800'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className='h-5 w-5 text-slate-700 dark:text-slate-200' />
            <span className='sr-only'>Close mobile menu</span>
          </Button>
        </div>

        <nav className='px-4 py-4 space-y-1'>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className='block rounded-lg px-3 py-2.5 text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
