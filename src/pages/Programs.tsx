import React from 'react';

// Structured data for the Bento Grid. 
// Separating data from UI keeps the component clean and improves rendering performance.
const programsData = [
  {
    id: 1,
    title: 'Modern Academics',
    description: 'Our STEM-focused curriculum encourages critical thinking, backed by state-of-the-art laboratories and smart classrooms.',
    icon: 'fa-microscope',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
    // Takes up a large square block on desktop
    gridClass: 'md:col-span-2 md:row-span-2',
    category: 'Academics',
  },
  {
    id: 2,
    title: 'Performing Arts',
    description: 'Discovering talent through theater, music, and dance programs.',
    icon: 'fa-masks-theater',
    gridClass: 'md:col-span-1 md:row-span-1',
    category: 'Extracurricular',
  },
  {
    id: 3,
    title: 'Competitive Sports',
    description: 'Olympic-standard facilities for athletics, swimming, and team sports.',
    icon: 'fa-basketball',
    gridClass: 'md:col-span-1 md:row-span-1',
    category: 'Extracurricular',
  },
  {
    id: 4,
    title: 'Global Languages',
    description: 'Fluency in French, Spanish, and Mandarin.',
    icon: 'fa-language',
    gridClass: 'md:col-span-2 md:row-span-1',
    category: 'Academics',
  },
];

const Programs: React.FC = () => {
  return (
    <section 
      id="academics-extracurriculars" 
      aria-labelledby="programs-heading"
      className="bg-mainBg py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left max-w-2xl">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Beyond The Classroom
            </span>
          </div>
          
          {/* CORRECTED: Changed from font-extrabold to font-bold */}
          <h2 
            id="programs-heading" 
            className="text-foreground text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Academics & Extracurriculars
          </h2>
          
          {/* CORRECTED: Simplified the vocabulary slightly */}
          <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">
            We provide a balanced environment where academic success meets creative and physical growth. Explore the pathways that shape our students.
          </p>
        </div>

        {/* Bento Box Grid */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px]"
          aria-label="List of Academic and Extracurricular Programs"
        >
          {programsData.map((program) => (
            <article 
              key={program.id}
              className={`group relative overflow-hidden rounded-3xl bg-surface border border-border-soft shadow-sm hover:shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${program.gridClass}`}
            >
              {/* If an image exists, render it as a background with a dark gradient overlay */}
              {program.image ? (
                <>
                  <img 
                    src={program.image} 
                    alt={`Students participating in ${program.title}`} 
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </>
              ) : (
                /* Solid background for cards without images */
                <div className="absolute inset-0 bg-sub-header group-hover:bg-primary-soft/10 transition-colors duration-300"></div>
              )}

              {/* Card Content - Positioned at the bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                
                {/* Top Right Category Chip */}
                <div className="absolute top-6 right-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    program.image ? 'bg-surface/20 text-inverse backdrop-blur-md' : 'bg-primary-soft text-primary'
                  }`}>
                    {program.category}
                  </span>
                </div>

                <div className="relative z-10 transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${
                    program.image ? 'bg-primary text-inverse' : 'bg-primary-soft text-primary'
                  }`}>
                    <i className={`fa-solid ${program.icon} text-lg`} aria-hidden="true"></i>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${
                    program.image ? 'text-inverse' : 'text-foreground'
                  }`}>
                    {program.title}
                  </h3>
                  
                  {/* Description fades in and slides up on hover */}
                  <p className={`text-sm leading-relaxed opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    program.image ? 'text-inverse/80' : 'text-muted'
                  }`}>
                    {program.description}
                  </p>
                </div>
              </div>
              
              {/* Invisible link to make the whole card clickable for accessibility without invalid HTML nesting */}
              <a href={`#${program.title.toLowerCase().replace(' ', '-')}`} className="absolute inset-0 z-20" aria-label={`Learn more about ${program.title}`}>
                <span className="sr-only">Learn more about {program.title}</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;