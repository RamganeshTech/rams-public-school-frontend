import React from 'react';
import { SCHOOL_NAME } from '../utils/constants';

const approach = [
  {
    icon: 'fa-hand-holding-heart',
    title: 'Value-Based Learning',
    desc: 'Lessons rooted in discipline, respect, and strong moral values.',
    color: 'success',
  },
  {
    icon: 'fa-puzzle-piece',
    title: 'Activity-Based Learning',
    desc: 'Hands-on activities that make everyday learning engaging.',
    color: 'warning',
  },
  {
    icon: 'fa-palette',
    title: 'Holistic Development',
    desc: 'A balance of academics, sports, and cultural activities.',
    color: 'primary',
  },
  {
    icon: 'fa-chalkboard-user',
    title: 'Personal Attention',
    desc: 'Small class sizes that let every child learn at their own pace.',
    color: 'info',
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  primary: { bg: 'bg-primary-soft', text: 'text-primary' },
  info: { bg: 'bg-info/10', text: 'text-info' },
  success: { bg: 'bg-success/10', text: 'text-success' },
  warning: { bg: 'bg-warning/10', text: 'text-warning' },
};

const FeatureCard: React.FC<{ item: typeof approach[number] }> = ({ item }) => {
  const c = colorClasses[item.color];
  return (
    <div className="bg-surface border border-border-soft rounded-xl shadow-md p-4 flex items-start gap-3 w-full">
      <div className={`shrink-0 w-10 h-10 rounded-full ${c.bg} flex items-center justify-center`}>
        <i className={`fa-solid ${item.icon} ${c.text} text-sm`}></i>
      </div>
      <div>
        <h3 className="text-foreground font-bold text-sm leading-tight">{item.title}</h3>
        <p className="text-muted text-xs leading-relaxed mt-1">{item.desc}</p>
      </div>
    </div>
  );
};

const OurApproach: React.FC = () => {
  return (
    <section className="bg-surface relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary-hover px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide mb-5">
            <i className="fa-solid fa-compass"></i>
            Our Approach
          </span>
          <h2 className="font-display text-foreground text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-4">
            A Learning Approach Built Around <span className="text-primary">Every Child</span>
          </h2>
          <p className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed">
            At {SCHOOL_NAME}, our caring approach and thoughtfully designed
            programs set us apart &mdash; giving every child room to learn,
            grow, and thrive.
          </p>
        </div>

        {/* Desktop / large screens: image with orbiting cards */}
        <div className="hidden lg:block relative max-w-5xl mx-auto h-[560px]">
          {/* Decorative concentric rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[440px] h-[440px] rounded-full bg-primary-soft/50"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] rounded-full bg-info/10"></div>
          </div>

          {/* Central image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden shadow-xl border border-border-soft z-10">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1974&auto=format&fit=crop"
              alt="Teacher guiding a student"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating cards */}
          <div className="absolute top-6 left-0 w-64 z-20">
            <FeatureCard item={approach[0]} />
          </div>
          <div className="absolute top-6 right-0 w-64 z-20">
            <FeatureCard item={approach[1]} />
          </div>
          <div className="absolute bottom-6 left-0 w-64 z-20">
            <FeatureCard item={approach[2]} />
          </div>
          <div className="absolute bottom-6 right-0 w-64 z-20">
            <FeatureCard item={approach[3]} />
          </div>
        </div>

        {/* Mobile / tablet: stacked layout */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative w-full max-w-xs mx-auto rounded-tl-[2.5rem] rounded-br-[2.5rem] overflow-hidden shadow-lg border border-border-soft aspect-[3/4] mb-8 sm:mb-10">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1974&auto=format&fit=crop"
              alt="Teacher guiding a student"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {approach.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;