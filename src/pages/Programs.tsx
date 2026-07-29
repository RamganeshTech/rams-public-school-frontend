// import React from 'react';

// const programsData = [
//   {
//     id: 1,
//     title: 'Modern Academics',
//     description: 'Our STEM-focused curriculum encourages critical thinking, backed by state-of-the-art laboratories and smart classrooms.',
//     icon: 'fa-microscope',
//     image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
//     // Takes up a large square block on desktop
//     gridClass: 'md:col-span-2 md:row-span-2',
//     category: 'Academics',
//   },
//   {
//     id: 2,
//     title: 'Performing Arts',
//     description: 'Discovering talent through theater, music, and dance programs.',
//     icon: 'fa-masks-theater',
//     gridClass: 'md:col-span-1 md:row-span-1',
//     category: 'Extracurricular',
//   },
//   {
//     id: 3,
//     title: 'Competitive Sports',
//     description: 'Olympic-standard facilities for athletics, swimming, and team sports.',
//     icon: 'fa-basketball',
//     gridClass: 'md:col-span-1 md:row-span-1',
//     category: 'Extracurricular',
//   },
//   {
//     id: 4,
//     title: 'Global Languages',
//     description: 'Fluency in French, Spanish, and Mandarin.',
//     icon: 'fa-language',
//     gridClass: 'md:col-span-2 md:row-span-1',
//     category: 'Academics',
//   },
// ];

// const Programs: React.FC = () => {
//   return (
//     <section 
//       id="academics-extracurriculars" 
//       aria-labelledby="programs-heading"
//       className="bg-mainBg py-16 md:py-24"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="mb-12 text-center md:text-left max-w-2xl">
//           <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
//             <div className="h-[2px] w-12 bg-primary"></div>
//             <span className="text-primary font-bold uppercase tracking-wider text-sm">
//               Beyond The Classroom
//             </span>
//           </div>
          
//           {/* CORRECTED: Changed from font-extrabold to font-bold */}
//           <h2 
//             id="programs-heading" 
//             className="text-foreground text-3xl sm:text-4xl font-bold tracking-tight"
//           >
//             Academics & Extracurriculars
//           </h2>
          
//           {/* CORRECTED: Simplified the vocabulary slightly */}
//           <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">
//             We provide a balanced environment where academic success meets creative and physical growth. Explore the pathways that shape our students.
//           </p>
//         </div>

//         {/* Bento Box Grid */}
//         {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
//         <div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px]"
//           aria-label="List of Academic and Extracurricular Programs"
//         >
//           {programsData.map((program) => (
//             <article 
//               key={program.id}
//               className={`group relative overflow-hidden rounded-3xl bg-surface border border-border-soft shadow-sm hover:shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${program.gridClass}`}
//             >
//               {/* If an image exists, render it as a background with a dark gradient overlay */}
//               {program.image ? (
//                 <>
//                   <img 
//                     src={program.image} 
//                     alt={`Students participating in ${program.title}`} 
//                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                     loading="lazy"
//                     decoding="async"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//                 </>
//               ) : (
//                 /* Solid background for cards without images */
//                 <div className="absolute inset-0 bg-sub-header group-hover:bg-primary-soft/10 transition-colors duration-300"></div>
//               )}

//               {/* Card Content - Positioned at the bottom */}
//               <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                
//                 {/* Top Right Category Chip */}
//                 <div className="absolute top-6 right-6">
//                   <span className={`text-xs font-bold px-3 py-1 rounded-full ${
//                     program.image ? 'bg-surface/20 text-inverse backdrop-blur-md' : 'bg-primary-soft text-primary'
//                   }`}>
//                     {program.category}
//                   </span>
//                 </div>

//                 <div className="relative z-10 transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
//                   <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${
//                     program.image ? 'bg-primary text-inverse' : 'bg-primary-soft text-primary'
//                   }`}>
//                     <i className={`fa-solid ${program.icon} text-lg`} aria-hidden="true"></i>
//                   </div>
                  
//                   <h3 className={`text-xl font-bold mb-2 ${
//                     program.image ? 'text-inverse' : 'text-foreground'
//                   }`}>
//                     {program.title}
//                   </h3>
                  
//                   {/* Description fades in and slides up on hover */}
//                   <p className={`text-sm leading-relaxed opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
//                     program.image ? 'text-inverse/80' : 'text-muted'
//                   }`}>
//                     {program.description}
//                   </p>
//                 </div>
//               </div>
              
//               {/* Invisible link to make the whole card clickable for accessibility without invalid HTML nesting */}
//               <a href={`#${program.title.toLowerCase().replace(' ', '-')}`} className="absolute inset-0 z-20" aria-label={`Learn more about ${program.title}`}>
//                 <span className="sr-only">Learn more about {program.title}</span>
//               </a>
//             </article>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Programs;





import React from 'react';
import image1 from "../assets/image1.webp"
import image2 from "../assets/image2.webp"


const programs = [
  {
    wing: 'Pre-Primary Wing',
    age: 'Ages 3&ndash;5',
    icon: 'fa-child-reaching',
    color: 'primary',
    // image:'https://images.unsplash.com/photo-1587616211892-b0f688aad0d0?q=80&w=1974&auto=format&fit=crop',
    image:image1,
    desc: 'Play-based learning that builds curiosity, motor skills, and social confidence in a warm, nurturing setting.',
    features: ['Tamil & English Phonics', 'Rhymes & Storytelling', 'Creative Play'],
  },
  {
    wing: 'Primary Wing',
    age: 'Early Primary',
    icon: 'fa-pencil',
    color: 'info',
    image:image2,
    desc: 'Strong fundamentals in literacy and numeracy, paired with creative exploration and value education.',
    features: ['CBSE-Aligned Curriculum', 'Activity-Based Learning', 'Value Education'],
  },
  {
    wing: 'Middle Wing',
    age: 'Middle School',
    icon: 'fa-flask-vial',
    color: 'success',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1974&auto=format&fit=crop',
    desc: 'Hands-on science labs and project-based work that sharpen analytical and problem-solving skills.',
    features: ['Science & Computer Labs', 'Sports & Athletics', 'Art, Music & Dance'],
  },
  {
    wing: 'Senior Wing',
    age: 'Senior Secondary',
    icon: 'fa-graduation-cap',
    color: 'warning',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1974&auto=format&fit=crop',
    desc: 'Focused board-exam preparation with career counselling and dedicated Science & Commerce streams.',
    features: ['Science & Commerce Streams', 'Board Exam Prep', 'Career Counselling'],
  },
];

const colorClasses: Record<string, { badge: string; icon: string; check: string }> = {
  primary: { badge: 'bg-primary', icon: 'text-inverse', check: 'text-primary' },
  info: { badge: 'bg-info', icon: 'text-inverse', check: 'text-info' },
  success: { badge: 'bg-success', icon: 'text-inverse', check: 'text-success' },
  warning: { badge: 'bg-warning', icon: 'text-inverse', check: 'text-warning' },
};

const Programs: React.FC = () => {
  return (
    <section id="programs" className="bg-sub-header relative py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary-hover px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide mb-4 sm:mb-5">
            <i className="fa-solid fa-layer-group"></i>
            Our Programs
          </span>
          <h2 className="font-display text-foreground text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-3 sm:mb-4">
            Age-Appropriate Learning, <span className="text-primary">Every Step of the Way</span>
          </h2>
          <p className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed">
            Every wing is thoughtfully structured to match the developmental
            needs of that stage &mdash; so learning always feels challenging,
            never overwhelming.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {programs.map((p) => {
            const c = colorClasses[p.color];
            return (
              <div
                key={p.wing}
                className="bg-surface rounded-xl overflow-hidden border border-border-soft shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.wing}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
                  {/* <span className="absolute top-3 left-3 bg-surface/95 backdrop-blur-sm text-foreground text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full">
                    {p.age}
                  </span> */}
                  <div
                    className={`absolute bottom-3 left-3 ${c.badge} w-11 h-11 rounded-full flex items-center justify-center shadow-md`}
                  >
                    <i className={`fa-solid ${p.icon} ${c.icon} text-base`}></i>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-foreground font-display font-semibold text-lg leading-tight mb-2.5">
                    {p.wing}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{p.desc}</p>

                  <ul className="space-y-2 mt-auto">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85 font-medium">
                        <i className={`fa-solid fa-circle-check ${c.check} mt-0.5 shrink-0`}></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;