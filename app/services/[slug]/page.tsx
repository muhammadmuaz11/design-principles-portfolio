import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers,
  Users,
  Gift,
  Cpu,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getServiceBySlug, services } from "@/constants/services";
import Contact from "../../../components/Contact";

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
    <div className='min-h-screen bg-slate-100 dark:bg-slate-950'>
      {/* ── HERO BANNER ── */}
      <div className='relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 mt-6'>
        {/* Thicker gradient accent bar at top */}
        <div
          className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient}`}
        />

        {/* Radial glow blobs */}
        <div className='absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none' />
        <div className='absolute -bottom-32 -right-32 w-96 h-96 bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none' />

        {/* Dot grid overlay */}
        <div className='absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(circle,_currentColor_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none' />

        <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left — text */}
            <div>
              {service.badge && (
                <span
                  className={`inline-block mb-4 bg-gradient-to-r ${service.gradient} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm`}
                >
                  {service.badge}
                </span>
              )}
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-5 leading-tight'>
                {service.title}
              </h1>
              <p className='text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg'>
                {service.tagline}
              </p>
              <div className='flex flex-wrap gap-2 mb-10'>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className='bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900 text-sm px-3 py-1 rounded-full font-medium'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href='#contact'
                className='inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-100'
              >
                <Sparkles className='h-4 w-4' />
                Hire Me
                <ArrowRight className='h-4 w-4' />
              </a>
            </div>

            {/* Right — decorative poster */}
            <div className='hidden lg:flex items-center justify-center'>
              <div
                className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-slate-700/50 bg-gradient-to-br ${service.gradient}`}
              >
                {/* Dot grid overlay */}
                <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:20px_20px]' />
                {/* Large centered icon */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <Code2 className='h-32 w-32 text-white/20' />
                </div>
                {/* Bottom label strip */}
                <div className='absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm px-6 py-4 flex items-center justify-between'>
                  <span className='text-white font-semibold text-sm tracking-wide uppercase opacity-80'>
                    {service.title}
                  </span>
                  {service.badge && (
                    <span className='bg-white/90 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full'>
                      {service.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16'>
        {/* Overview + Who it's for */}
        <div className='grid lg:grid-cols-2 gap-8'>
          <Card className='bg-white dark:bg-slate-800 border-0 border-t-4 border-t-indigo-500 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden'>
            <CardContent className='p-8'>
              <div className='flex items-center gap-3 mb-5'>
                <div className='p-2 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg'>
                  <Layers className='h-5 w-5 text-indigo-600 dark:text-indigo-400' />
                </div>
                <h2 className='text-xl font-bold text-slate-900 dark:text-white'>
                  Overview
                </h2>
              </div>
              <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
                {service.overview}
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white dark:bg-slate-800 border-0 border-t-4 border-t-violet-500 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden'>
            <CardContent className='p-8'>
              <div className='flex items-center gap-3 mb-5'>
                <div className='p-2 bg-violet-50 dark:bg-violet-950/50 rounded-lg'>
                  <Users className='h-5 w-5 text-violet-600 dark:text-violet-400' />
                </div>
                <h2 className='text-xl font-bold text-slate-900 dark:text-white'>
                  Who is this for?
                </h2>
              </div>
              <ul className='space-y-3'>
                {service.whoFor.map((item, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-slate-600 dark:text-slate-400'
                  >
                    <CheckCircle2 className='h-5 w-5 text-emerald-500 shrink-0 mt-0.5' />
                    <span className='leading-relaxed'>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* What You Get */}
        <div>
          <div className='flex items-center gap-3 mb-8'>
            <div className='p-2 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg'>
              <Gift className='h-5 w-5 text-emerald-600 dark:text-emerald-400' />
            </div>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-white'>
              What You Get
            </h2>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {service.deliverables.map((item, i) => (
              <div
                key={i}
                className='group flex items-start gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-200'
              >
                <span className='text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-1'>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <div className='flex items-center gap-3 mb-8'>
            <div className='p-2 bg-blue-50 dark:bg-blue-950/50 rounded-lg'>
              <Layers className='h-5 w-5 text-blue-600 dark:text-blue-400' />
            </div>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-white'>
              How I Work
            </h2>
          </div>
          <div className='relative'>
            {/* Gradient vertical connector line */}
            <div
              className={`absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b ${service.gradient} opacity-30 hidden sm:block`}
            />
            <div className='space-y-4'>
              {service.process.map((step, idx) => (
                <div
                  key={step.step}
                  className='relative flex gap-5 items-start group'
                >
                  <span
                    className={`relative z-10 h-10 w-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-black text-sm font-bold shrink-0 shadow-lg ring-4 ring-white dark:ring-slate-950`}
                  >
                    {step.step}
                  </span>
                  <div className='bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 flex-1 shadow-sm group-hover:shadow-md group-hover:border-indigo-200 dark:group-hover:border-indigo-700 transition-all duration-200'>
                    <div className='flex items-center gap-2 mb-1.5'>
                      <h3 className='font-semibold text-slate-900 dark:text-white'>
                        {step.title}
                      </h3>
                      <span className='text-xs text-slate-400 dark:text-slate-500 font-medium'>
                        Step {idx + 1}
                      </span>
                    </div>
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
          <div className='flex items-center gap-3 mb-6'>
            <div className='p-2 bg-slate-100 dark:bg-slate-800 rounded-lg'>
              <Cpu className='h-5 w-5 text-slate-600 dark:text-slate-400' />
            </div>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-white'>
              Tech Stack
            </h2>
          </div>
          <div className='flex flex-wrap gap-3'>
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className='bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium px-4 py-2 rounded-xl shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Contact />

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
                className='group block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-300 overflow-hidden relative'
              >
                {/* Per-service gradient top strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.gradient}`}
                />
                <div
                  className={`h-9 w-9 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 shadow-sm`}
                >
                  <Code2 className='h-4 w-4 text-white' />
                </div>
                <h3 className='font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1.5'>
                  {s.title}
                </h3>
                <p className='text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed'>
                  {s.tagline}
                </p>
                <span className='inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 mt-4 font-semibold group-hover:gap-2 transition-all duration-200'>
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
