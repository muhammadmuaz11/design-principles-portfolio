"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code2, Palette, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/constants/services";
import type { Service } from "@/constants/services";
import Contact from "@/components/contact";

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
        <Card className='overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-800 flex flex-col h-full'>
          {/* Thumbnail */}
          <div
            className={`relative overflow-hidden h-40 bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}
          >
            <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:20px_20px]' />
            <Code2 className='h-14 w-14 text-white/70 transition-transform duration-500 group-hover:scale-125 group-hover:text-white/90' />
            {badge && (
              <span className='absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 text-indigo-700 dark:text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm'>
                {badge}
              </span>
            )}
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

            <h3 className='text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
              {title}
            </h3>
            <p className='text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1'>
              {description}
            </p>

            {/* Tags */}
            <div className='flex flex-wrap gap-1.5 mb-4'>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className='text-xs bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-full font-medium'
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
                className='text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-2'
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
    <div className='min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-500'>
      {/* ── HERO ── */}
      <section
        id='home'
        className='relative min-h-screen pt-32 flex flex-col justify-center pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-100 via-slate-100 to-indigo-100/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800'
      >
        {/* Decorative blobs — visual balance via background depth */}
        <div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/25 dark:bg-indigo-900/15 rounded-full blur-3xl -translate-x-1/2 pointer-events-none'
          aria-hidden='true'
        />
        <div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-200/25 dark:bg-violet-900/15 rounded-full blur-3xl translate-x-1/2 pointer-events-none'
          aria-hidden='true'
        />

        <div className='relative max-w-6xl mx-auto w-full'>
          <div className='text-center space-y-8'>
            <div className='space-y-5'>
              {/* Availability badge */}
              <div className='inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900 px-4 py-2 rounded-full text-sm font-medium'>
                <Zap className='h-4 w-4' />
                <span>Open to internships & junior roles</span>
              </div>

              {/* Name — gradient accent on surname for visual hierarchy */}
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight'>
                <span className='text-slate-900 dark:text-white'>
                  Muhammad{" "}
                </span>
                <span className='bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent'>
                  Muaz
                </span>
              </h1>

              <p className='text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium'>
                Frontend Developer & CS Student
              </p>
              <p className='text-base sm:text-lg text-slate-500 dark:text-slate-500 max-w-2xl mx-auto leading-relaxed'>
                I build clean, responsive web interfaces using{" "}
                <span className='font-semibold text-indigo-700 dark:text-indigo-300'>
                  React, Next.js, and Tailwind CSS
                </span>
                . Focused on writing maintainable code and shipping experiences
                that feel great to use.
              </p>
            </div>

            {/* CTA buttons — clear primary/secondary hierarchy */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                size='lg'
                className='bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white px-8 py-3 rounded-lg shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105'
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See My Work
                <ExternalLink className='h-4 w-4 ml-2' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='px-8 py-3 rounded-lg border-2 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all duration-300'
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

      {/* ── ABOUT ── */}
      <section
        id='about'
        className='py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div className='space-y-6'>
              <div className='inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900 px-4 py-2 rounded-full text-sm font-medium'>
                <Palette className='h-4 w-4' />
                <span>About Me</span>
              </div>
              <h2 className='text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight'>
                Who I Am
              </h2>
              <div className='space-y-5 text-base text-slate-600 dark:text-slate-400 leading-relaxed'>
                <p>
                  I&apos;m a Frontend Developer and Computer Science student at
                  BNU London. I care about building UIs that are not just
                  functional, but genuinely pleasant to interact with — clean
                  layouts, responsive design, and thoughtful details.
                </p>
                <p>
                  My stack centers around{" "}
                  <span className='font-semibold text-indigo-700 dark:text-indigo-300'>
                    React, Next.js, TypeScript, and Tailwind CSS
                  </span>
                  . I hold myself to a high standard and am always pushing to
                  improve — whether that means refactoring messy code, exploring
                  a new tool, or studying how great products are built.
                </p>
                <p>
                  I&apos;m actively looking for an internship where I can
                  contribute real work, learn from experienced engineers, and
                  grow fast.
                </p>
              </div>
            </div>

            <div className='relative flex justify-center'>
              <div className='relative w-72 h-72 sm:w-80 sm:h-80'>
                <div
                  className='absolute inset-0 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-full blur-3xl opacity-25 animate-pulse'
                  aria-hidden='true'
                />
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

      {/* ── PROJECTS ── */}
      <section
        id='projects'
        className='py-24 px-4 sm:px-6 lg:px-8 bg-slate-200 dark:bg-slate-800 border-t border-slate-300 dark:border-slate-700'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900 px-4 py-2 rounded-full text-sm font-medium mb-5'>
              <Code2 className='h-4 w-4' />
              <span>Featured Work</span>
            </div>
            <h2 className='text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4'>
              Projects
            </h2>
            <p className='text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto'>
              Things I&apos;ve built — from game mechanics to web interfaces.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='group overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-800'>
              <div className='relative overflow-hidden h-48 bg-gradient-to-br from-indigo-500 to-violet-600'>
                <Image
                  src='/placeholder.svg'
                  alt='Pong Game'
                  width={400}
                  height={250}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <Link
                  href='/pong-game'
                  className='absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-white'
                >
                  <ExternalLink className='h-4 w-4 text-indigo-600 dark:text-indigo-400' />
                </Link>
              </div>
              <CardContent className='p-6'>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
                  Pong Game
                </h3>
                <p className='text-slate-500 dark:text-slate-400 mb-4 leading-relaxed text-sm line-clamp-2'>
                  A redesigned two-player Pong built in Python with a dynamic
                  difficulty mechanic — each missed goal shrinks the losing
                  player&apos;s paddle, guaranteeing a decisive outcome every
                  time.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='text-xs bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full font-medium'>
                    Python
                  </span>
                  <span className='text-xs bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full font-medium'>
                    Turtle Graphics
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id='services'
        className='py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900 px-4 py-2 rounded-full text-sm font-medium mb-5'>
              <Zap className='h-4 w-4' />
              <span>What I Do</span>
            </div>
            <h2 className='text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4'>
              Services I Offer
            </h2>
            <p className='text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto'>
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

      {/* ── CONTACT ── */}
      <Contact />
    </div>
  );
}
