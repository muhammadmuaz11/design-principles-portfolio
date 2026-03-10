import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  Github,
  Linkedin,
  Code2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getServiceBySlug, services } from "@/constants/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} — Muhammad Muaz`,
    description: service.tagline,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800'>
      {/* Back button */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8'>
        <Link
          href='/#services'
          className='inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
        >
          <ArrowLeft className='h-4 w-4' />
          Back to Services
        </Link>
      </div>

      {/* ── HERO BANNER ── */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${service.gradient} mt-6`}
      >
        {/* dot-grid texture */}
        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:24px_24px]' />
        <div className='relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28'>
          <div className='max-w-2xl'>
            {service.badge && (
              <span className='inline-block mb-4 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm'>
                {service.badge}
              </span>
            )}
            <h1 className='text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight'>
              {service.title}
            </h1>
            <p className='text-lg text-white/80 mb-8 leading-relaxed'>
              {service.tagline}
            </p>
            <div className='flex flex-wrap gap-2 mb-10'>
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className='bg-white/20 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm'
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href='#cta'
              className='inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors shadow-lg'
            >
              Hire Me
              <ArrowRight className='h-4 w-4' />
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16'>
        {/* Overview + Who it's for */}
        <div className='grid lg:grid-cols-2 gap-8'>
          <Card className='bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm'>
            <CardContent className='p-8'>
              <h2 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>
                Overview
              </h2>
              <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
                {service.overview}
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm'>
            <CardContent className='p-8'>
              <h2 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>
                Who is this for?
              </h2>
              <ul className='space-y-3'>
                {service.whoFor.map((item, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-slate-600 dark:text-slate-400'
                  >
                    <CheckCircle2 className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* What You Get */}
        <div>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-8'>
            What You Get
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {service.deliverables.map((item, i) => (
              <div
                key={i}
                className='flex items-start gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 shadow-sm'
              >
                <span
                  className={`h-6 w-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0 mt-0.5`}
                >
                  <CheckCircle2 className='h-3.5 w-3.5 text-white' />
                </span>
                <span className='text-sm text-slate-700 dark:text-slate-300 leading-relaxed'>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-8'>
            How I Work
          </h2>
          <div className='relative'>
            {/* vertical connector line — desktop only */}
            <div className='absolute left-5 top-6 bottom-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block' />
            <div className='space-y-5'>
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className='relative flex gap-5 items-start'
                >
                  <span
                    className={`relative z-10 h-10 w-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-md`}
                  >
                    {step.step}
                  </span>
                  <div className='bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 flex-1 shadow-sm'>
                    <h3 className='font-semibold text-slate-900 dark:text-white mb-1'>
                      {step.title}
                    </h3>
                    <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
            Tech Stack
          </h2>
          <div className='flex flex-wrap gap-3'>
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className='bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium px-4 py-2 rounded-lg shadow-sm hover:border-blue-400 dark:hover:border-blue-500 transition-colors'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div
          id='cta'
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} p-10 sm:p-14 text-center shadow-xl`}
        >
          <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:24px_24px]' />
          <div className='relative'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-3'>
              Interested? Let&apos;s talk.
            </h2>
            <p className='text-white/80 text-lg mb-8 max-w-lg mx-auto'>
              Send me a message and let&apos;s figure out how I can help with
              your project.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href='mailto:muhammadmuaz0165@gmail.com'
                className='inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors shadow-lg'
              >
                <Mail className='h-4 w-4' />
                Email Me
              </Link>
              <Link
                href='https://www.linkedin.com/in/muhammad-muaz-57b02b344/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm'
              >
                <Linkedin className='h-4 w-4' />
                LinkedIn
              </Link>
              <Link
                href='https://github.com/muhammadmuaz11'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm'
              >
                <Github className='h-4 w-4' />
                GitHub
              </Link>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
            Other Services
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className='group block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300'
              >
                <div
                  className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${s.gradient} mb-4`}
                />
                <h3 className='font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1'>
                  {s.title}
                </h3>
                <p className='text-sm text-slate-500 dark:text-slate-400 line-clamp-2'>
                  {s.tagline}
                </p>
                <span className='inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 mt-3 font-medium'>
                  Learn more <ArrowRight className='h-3 w-3' />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
