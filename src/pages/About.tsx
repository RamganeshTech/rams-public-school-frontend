// import React from 'react';
// import { SCHOOL_NAME } from '../utils/constants';

// const About: React.FC = () => {
//   // Simplified and direct text for the core values
//   const coreValues = [
//     {
//       id: 1,
//       title: 'Academic Excellence',
//       description: 'A modern curriculum designed to build critical thinking and real-world problem-solving skills.',
//       icon: 'fa-book-open-reader',
//     },
//     {
//       id: 2,
//       title: 'All-Round Growth',
//       description: 'Balancing classroom education with sports, arts, and activities for complete student development.',
//       icon: 'fa-seedling',
//     },
//     {
//       id: 3,
//       title: 'Safe Campus',
//       description: 'A secure and welcoming environment where every child feels valued and protected.',
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

//             {/* Changed from font-extrabold to font-bold */}
//             <h2 
//               id="about-heading" 
//               className="text-foreground text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight"
//             >
//               Shaping Tomorrow's Leaders at <br className="hidden sm:block"/>
//               <span className="text-primary">{SCHOOL_NAME}</span>
//             </h2>

//             {/* Simplified content text */}
//             <div className="text-muted text-base sm:text-lg space-y-4 mb-8 leading-relaxed">
//               <p>
//                 Founded on the principles of integrity and innovation, we are a community dedicated to discovering and nurturing the unique potential within every student.
//               </p>
//               <p>
//                 Our approach moves away from rote memorization, focusing instead on practical learning, character building, and preparing students for future success.
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
import image3 from "../assets/image3.webp"
import image5 from "../assets/image5.webp"
// import image9 from "../assets/image9.webp"



const features = [
  {
    icon: 'fa-book-open-reader',
    title: 'Holistic Curriculum',
    desc: 'A CBSE-aligned curriculum balancing academics, arts, and physical education.',
  },
  {
    icon: 'fa-chalkboard-user',
    title: 'Experienced Faculty',
    desc: 'Certified educators dedicated to individual attention and mentorship.',
  },
  {
    icon: 'fa-shield-heart',
    title: 'Safe, Nurturing Campus',
    desc: 'CCTV-monitored premises with trained staff and secure transport.',
  },
  {
    icon: 'fa-flask',
    title: 'Modern Infrastructure',
    desc: 'Smart classrooms, science labs, and a well-stocked library.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="bg-surface relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-14">
          {/* Left: Image collage */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="col-span-2 relative rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden aspect-[16/10] shadow-md">
                <img
                  src={image5}
                  alt="Studnets wirting in notebook"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-square shadow-md">
                <img
                  // src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1974&auto=format&fit=crop"
                  src={image3}
                  alt="Student playing sports"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-square shadow-md">
                <img
                  // src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1974&auto=format&fit=crop"
                  src="./image9.webp"
                alt="Classroom"
                className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Floating credential badge */}
            {/* <div className="absolute -bottom-6 left-4 sm:left-10 bg-primary text-inverse rounded-xl shadow-lg px-5 py-4 flex items-center gap-4 max-w-[240px]">
              <i className="fa-solid fa-award text-2xl text-gold"></i>
              <p className="text-sm font-bold leading-snug">
                25+ Years Nurturing Young Minds
              </p>
            </div> */}
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary-hover px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide mb-5">
              <i className="fa-solid fa-seedling"></i>
              About Us
            </span>

            <h2 className="font-display text-foreground text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-5">
              Where Every Child is Guided <br className="hidden sm:block" />
              Towards <span className="text-primary">Brighter Futures</span>
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              At {SCHOOL_NAME}, we believe education goes beyond textbooks. Our
              close-knit campus blends rigorous academics with character
              building, giving every student the confidence, discipline, and
              curiosity to thrive &mdash; in school and in life.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-9">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3.5">
                  <div className="shrink-0 bg-primary-soft rounded-lg w-11 h-11 flex items-center justify-center">
                    <i className={`fa-solid ${f.icon} text-primary text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-sm sm:text-base">{f.title}</h3>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/#programs"
              className="inline-flex items-center gap-2 text-primary font-bold text-base hover:gap-3 transition-all duration-300"
            >
              Discover Our Story
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;