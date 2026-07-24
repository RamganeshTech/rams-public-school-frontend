// import React from 'react';
// import { SCHOOL_NAME } from '../utils/constants';

// const About: React.FC = () => {
//   // Data array for core values keeps the component clean and DRY
//   const coreValues = [
//     {
//       id: 1,
//       title: 'Academic Brilliance',
//       description: 'A rigorous, modern curriculum designed to foster critical thinking and problem-solving.',
//       icon: 'fa-book-open-reader',
//     },
//     {
//       id: 2,
//       title: 'Holistic Development',
//       description: 'Balancing education with sports, arts, and extracurriculars for well-rounded growth.',
//       icon: 'fa-seedling',
//     },
//     {
//       id: 3,
//       title: 'Safe Campus',
//       description: 'A secure, inclusive, and nurturing environment where every child feels valued.',
//       icon: 'fa-shield-halved',
//     },
//   ];

//   return (
//     // Semantic <section> with an aria-labelledby for AI agent context
//     <section 
//       id="about-us" 
//       aria-labelledby="about-heading" 
//       className="bg-surface py-16 md:py-24 lg:py-32"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* Left Side: High-Quality Image Collage / Media */}
//           {/* Using aspect-ratio prevents layout shifts (CLS) for a 95+ performance score */}
//           <figure className="relative w-full aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden bg-mainBg border border-border-soft shadow-sm">
//             <img
//               src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
//               alt={`Students collaborating in a modern classroom at ${SCHOOL_NAME}`}
//               className="absolute inset-0 h-full w-full object-cover"
//               loading="lazy" // Lazy loading for below-the-fold content
//               decoding="async" // Offloads image decoding from the main thread
//             />
//             {/* Overlay gradient for premium feel */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//           </figure>

//           {/* Right Side: Semantic Text Content */}
//           <article className="flex flex-col justify-center">
            
//             {/* Section Tagline */}
//             <div className="flex items-center gap-3 mb-4">
//               <div className="h-[2px] w-12 bg-primary"></div>
//               <span className="text-primary font-bold uppercase tracking-wider text-sm">
//                 About Our Institution
//               </span>
//             </div>

//             <h2 
//               id="about-heading" 
//               className="text-foreground text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 leading-tight"
//             >
//               Shaping Tomorrow's Leaders at <br className="hidden sm:block"/>
//               <span className="text-primary">{SCHOOL_NAME}</span>
//             </h2>

//             <div className="text-muted text-base sm:text-lg space-y-4 mb-8 leading-relaxed">
//               <p>
//                 Founded on the principles of integrity, innovation, and inclusivity, we are more than just an educational institution. We are a community dedicated to discovering and nurturing the unique potential within every student.
//               </p>
//               <p>
//                 Our modern approach moves away from rote memorization, focusing instead on experiential learning, character building, and preparing students for the dynamic challenges of the future.
//               </p>
//             </div>

//             {/* Core Values Grid - Highly structured for Mobile & AI parsing */}
//             <ul 
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
//               aria-label="Our Core Values"
//             >
//               {coreValues.map((value) => (
//                 <li 
//                   key={value.id} 
//                   className="flex items-start gap-4 p-4 rounded-xl hover:bg-mainBg transition-colors border border-transparent hover:border-border-soft"
//                 >
//                   <div className="flex-shrink-0 bg-primary-soft/50 p-3 rounded-lg flex items-center justify-center">
//                     <i className={`fa-solid ${value.icon} text-primary text-xl`} aria-hidden="true"></i>
//                   </div>
//                   <div>
//                     <h3 className="text-foreground font-bold text-lg mb-1">
//                       {value.title}
//                     </h3>
//                     <p className="text-muted text-sm leading-relaxed">
//                       {value.description}
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ul>

//           </article>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;





import React from 'react';
import { SCHOOL_NAME } from '../utils/constants';

const About: React.FC = () => {
  // Simplified and direct text for the core values
  const coreValues = [
    {
      id: 1,
      title: 'Academic Excellence',
      description: 'A modern curriculum designed to build critical thinking and real-world problem-solving skills.',
      icon: 'fa-book-open-reader',
    },
    {
      id: 2,
      title: 'All-Round Growth',
      description: 'Balancing classroom education with sports, arts, and activities for complete student development.',
      icon: 'fa-seedling',
    },
    {
      id: 3,
      title: 'Safe Campus',
      description: 'A secure and welcoming environment where every child feels valued and protected.',
      icon: 'fa-shield-halved',
    },
  ];

  return (
    // Semantic <section> with an aria-labelledby for AI agent context
    <section 
      id="about-us" 
      aria-labelledby="about-heading" 
      className="bg-surface py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: High-Quality Image Collage / Media */}
          {/* Using aspect-ratio prevents layout shifts (CLS) for a 95+ performance score */}
          <figure className="relative w-full aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden bg-mainBg border border-border-soft shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
              alt={`Students collaborating in a modern classroom at ${SCHOOL_NAME}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy" // Lazy loading for below-the-fold content
              decoding="async" // Offloads image decoding from the main thread
            />
            {/* Overlay gradient for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </figure>

          {/* Right Side: Semantic Text Content */}
          <article className="flex flex-col justify-center">
            
            {/* Section Tagline */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm">
                About Our Institution
              </span>
            </div>

            {/* Changed from font-extrabold to font-bold */}
            <h2 
              id="about-heading" 
              className="text-foreground text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight"
            >
              Shaping Tomorrow's Leaders at <br className="hidden sm:block"/>
              <span className="text-primary">{SCHOOL_NAME}</span>
            </h2>

            {/* Simplified content text */}
            <div className="text-muted text-base sm:text-lg space-y-4 mb-8 leading-relaxed">
              <p>
                Founded on the principles of integrity and innovation, we are a community dedicated to discovering and nurturing the unique potential within every student.
              </p>
              <p>
                Our approach moves away from rote memorization, focusing instead on practical learning, character building, and preparing students for future success.
              </p>
            </div>

            {/* Core Values Grid - Highly structured for Mobile & AI parsing */}
            <ul 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
              aria-label="Our Core Values"
            >
              {coreValues.map((value) => (
                <li 
                  key={value.id} 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-mainBg transition-colors border border-transparent hover:border-border-soft"
                >
                  <div className="flex-shrink-0 bg-primary-soft/50 p-3 rounded-lg flex items-center justify-center">
                    <i className={`fa-solid ${value.icon} text-primary text-xl`} aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-lg mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

          </article>
        </div>
      </div>
    </section>
  );
};

export default About;