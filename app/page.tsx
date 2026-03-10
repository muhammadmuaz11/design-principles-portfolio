"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Zap,
  Badge,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { services } from "@/constants/services";
import type { Service } from "@/constants/services";

export default function Portfolio() {
  function ServiceCard({
    slug,
    title,
    description,
    tags,
    gradient,
    badge,
  }: Pick<
    Service,
    "slug" | "title" | "description" | "tags" | "gradient" | "badge"
  >) {
    return (
      <Link href={`/services/${slug}`} className='block group'>
        <Card className='overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-slate-800 flex flex-col h-full'>
          {/* Thumbnail */}
          <div
            className={`relative overflow-hidden h-40 bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}
          >
            {/* Animated grid pattern overlay */}
            <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:20px_20px]' />

            {/* Icon area */}
            <Code2 className='h-14 w-14 text-white/70 transition-transform duration-500 group-hover:scale-125 group-hover:text-white/90' />

            {/* Badge */}
            {badge && (
              <span className='absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm'>
                {badge}
              </span>
            )}

            {/* Gradient overlay on hover */}
            <div className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>

          {/* Card Body */}
          <CardContent className='p-5 flex flex-col flex-1'>
            {/* Star rating */}
            <div className='flex items-center gap-1 mb-3'>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className='h-3.5 w-3.5 text-amber-400 fill-amber-400'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
              <span className='text-xs text-slate-500 dark:text-slate-400 ml-1'>
                5.0
              </span>
            </div>

            {/* Title */}
            <h3 className='text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
              {title}
            </h3>

            {/* Description */}
            <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1'>
              {description}
            </p>

            {/* Tags */}
            <div className='flex flex-wrap gap-1.5 mb-4'>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className='text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full'
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider + CTA */}
            <div className='pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between'>
              <span className='text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wide font-medium'>
                Starting from
              </span>
              <a
                href='#contact'
                className='text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2'
              >
                Hire Me →
              </a>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-500'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='font-bold text-xl text-slate-900 dark:text-white'>
              MM.
            </div>
            <div className='flex items-center space-x-4'>
              <nav className='hidden md:flex space-x-8'>
                <a
                  href='#home'
                  className='text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  Home
                </a>
                <a
                  href='#projects'
                  className='text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  Projects
                </a>
                <a
                  href='#about'
                  className='text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  About
                </a>
                <a
                  href='#contact'
                  className='text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  Contact
                </a>
              </nav>
              <Button
                variant='ghost'
                size='sm'
                className='p-2 hover:bg-slate-100 dark:hover:bg-slate-800'
              >
                <span className='sr-only'>Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id='home'
        className='min-h-screen pt-32 flex flex-col justify-center pb-20 px-4 sm:px-6 lg:px-8'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='text-center space-y-8'>
            <div className='space-y-4'>
              <div className='inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium'>
                <Zap className='h-4 w-4' />
                <span>Open to internships & junior roles</span>
              </div>
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight'>
                <span className='text-slate-900 dark:text-white'>
                  Muhammad{" "}
                </span>
                <span className='text-slate-600 dark:text-slate-400'>Muaz</span>
              </h1>
              <p className='text-xl sm:text-2xl text-slate-700 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed'>
                Frontend Developer & CS Student
              </p>
              <p className='text-lg text-slate-600 dark:text-slate-500 max-w-2xl mx-auto leading-relaxed'>
                I build clean, responsive web interfaces using{" "}
                <span className='font-medium text-slate-800 dark:text-slate-300'>
                  React, Next.js, and Tailwind CSS
                </span>
                . Focused on writing maintainable code and shipping experiences
                that feel great to use.
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                size='lg'
                className='bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white px-8 py-3 rounded transition-all duration-300 transform hover:scale-105'
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See My Work
                <ExternalLink className='h-4 w-4' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='px-8 py-3 rounded border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300'
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div>
                <div className='inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium mb-4'>
                  <Palette className='h-4 w-4' />
                  <span>About Me</span>
                </div>
                <h2 className='text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6'>
                  About Me
                </h2>
                <div className='space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed'>
                  <p>
                    I&apos;m a Frontend Developer and Computer Science student
                    at BNU London. I care about building UIs that are not just
                    functional, but genuinely pleasant to interact with — clean
                    layouts, responsive design, and thoughtful details.
                  </p>
                  <p>
                    My stack centers around{" "}
                    <span className='font-medium text-slate-800 dark:text-slate-300'>
                      React, Next.js, TypeScript, and Tailwind CSS
                    </span>
                    . I hold myself to a high standard and am always pushing to
                    improve — whether that means refactoring messy code,
                    exploring a new tool, or studying how great products are
                    built.
                  </p>
                  <p>
                    I&apos;m actively looking for an internship where I can
                    contribute real work, learn from experienced engineers, and
                    grow fast.
                  </p>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='relative w-80 h-80 mx-auto'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse'></div>
                <Image
                  src='https://avatars.githubusercontent.com/u/265863410?v=4'
                  alt='Muhammad Muaz'
                  width={320}
                  height={320}
                  className='relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-700 shadow-2xl'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id='projects'
        className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/50'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium mb-4'>
              <Code2 className='h-4 w-4' />
              <span>Featured Work</span>
            </div>
            <h2 className='text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4'>
              Projects
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
              Things I&apos;ve built — from game mechanics to web interfaces.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Project Card 1 */}
            <Card className='group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-slate-800'>
              {/* Project Image */}
              <div className='relative overflow-hidden h-48 bg-gradient-to-br from-blue-500 to-purple-600'>
                <Image
                  src='/placeholder.svg'
                  alt='Pong Game'
                  width={400}
                  height={250}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                {/* Overlay on hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* View Project Link */}
                <Link
                  href='/pong-game'
                  className='absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:bg-white dark:hover:bg-slate-700'
                >
                  <ExternalLink className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                </Link>
              </div>

              {/* Card Content */}
              <CardContent className='p-6'>
                {/* Project Title */}
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  Pong Game
                </h3>

                {/* Project Description */}
                <p className='text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2'>
                  A redesigned two-player Pong built in Python with a custom
                  dynamic difficulty mechanic — each missed goal shrinks the
                  losing player&apos;s paddle, guaranteeing a decisive outcome
                  every time.
                </p>

                {/* Technology Badges */}
                <div className='flex flex-wrap gap-2'>
                  <Badge className='bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors'>
                    Python
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* You can add more project cards by copying the Card component above */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium mb-4'>
              <Zap className='h-4 w-4' />
              <span>What I Do</span>
            </div>
            <h2 className='text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4'>
              Services I Offer
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
              From building full web apps to fixing tricky frontend bugs — here
              is what I can help you with.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/50'
      >
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-8'>
            <div className='inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium mb-4'>
              <Mail className='h-4 w-4' />
              <span>Get In Touch</span>
            </div>
            <h2 className='text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4'>
              Let&apos;s Connect
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
              I&apos;m currently open to internships, junior frontend roles, and
              freelance collaborations. If you have an opportunity or just want
              to talk code — reach out.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Link
              href='https://github.com/muhammadmuaz11'
              target='_blank'
              rel='noopener noreferrer'
              className='group p-4 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
            >
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-slate-100 dark:bg-slate-700 rounded group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors'>
                  <Github className='h-8 w-8 text-slate-600 dark:text-slate-400' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-slate-900 dark:text-white'>
                    GitHub
                  </h3>
                  <p className='text-slate-600 dark:text-slate-400'>
                    View my code
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href='https://www.linkedin.com/in/muhammad-muaz-57b02b344/'
              target='_blank'
              rel='noopener noreferrer'
              className='group p-4 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
            >
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-slate-100 dark:bg-slate-700 rounded group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors'>
                  <Linkedin className='h-8 w-8 text-slate-600 dark:text-slate-400' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-slate-900 dark:text-white'>
                    LinkedIn
                  </h3>
                  <p className='text-slate-600 dark:text-slate-400'>
                    Connect with me
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href='mailto:muhammadmuaz0165@gmail.com'
              className='group p-4 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
            >
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-slate-100 dark:bg-slate-700 rounded group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors'>
                  <Mail className='h-8 w-8 text-slate-600 dark:text-slate-400' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-slate-900 dark:text-white'>
                    Email
                  </h3>
                  <p className='text-slate-600 dark:text-slate-400 max-w-40 truncate'>
                    muhammadmuaz0165@gmail.com
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-4 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-slate-600 dark:text-slate-400'>
              © {new Date().getFullYear()} Muhammad Muaz
            </div>
            <div className='flex space-x-6'>
              <Link
                href='https://github.com/muhammadmuaz11'
                target='_blank'
                className='flex items-center space-x-4 p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-md group'
              >
                <Github className='h-5 w-5' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/muhammad-muaz-57b02b344/'
                target='_blank'
                className='flex items-center space-x-4 p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-md group'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
              <Link
                href='mailto:muhammadmuaz0165@gmail.com'
                className='flex items-center space-x-4 p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-md group'
              >
                <Mail className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
