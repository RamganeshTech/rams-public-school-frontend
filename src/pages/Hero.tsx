// import React from 'react';
// // import { Link } from 'react-router-dom';
// import { SCHOOL_NAME } from '../utils/constants';

// const Hero: React.FC = () => {
//   return (
//     <section className="bg-mainBg relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-16">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

//           {/* Left Column: Text Content */}
//           <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 text-left">

//             {/* Main Headings */}
//             <h1 className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
//               Welcome to <br className="hidden sm:block" />
//               <span className="text-primary">{SCHOOL_NAME}</span>
//             </h1>

//             <h2 className="text-foreground/90 text-xl sm:text-2xl font-bold">
//               {/* Nurturing Character, Inspiring Excellence. */}
//               Knowledge, Discipline, Excellence.
//             </h2>

//             {/* Simplified Subtext */}
//             <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed">
//               Give your child the foundation they deserve. We provide a dynamic educational environment focused on academic success, all-round student growth, and essential skills for the future.
//             </p>

//             {/* Call to Action Button */}
//             <div className="pt-4 w-full sm:w-auto">
//               <a 
//                 href="/#academics-extracurriculars" 
//                 className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-primary hover:bg-primary-hover text-inverse px-8 py-3.5 text-base font-bold shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
//               >
//                 Explore
//                 <i className="fa-solid fa-arrow-right"></i>
//               </a>
//             </div>
//           </div>

//           {/* Right Column: Hero Image/Graphics */}
//           <div className="w-full lg:w-1/2 relative">

//             {/* Cleaned up shadow & image container */}
//             <div className="relative rounded-lg overflow-hidden shadow-xl border border-border-soft aspect-video lg:aspect-[4/3] bg-surface">

//               {/* Working Image Link */}
//               <img 
//                 src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop" 
//                 alt="Students actively learning in a classroom" 
//                 className="h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
//                 loading="eager"
//               />

//               {/* Floating Stats Card overlay */}
//               {/* <div className="absolute bottom-6 left-6 bg-surface/95 backdrop-blur-sm p-4 rounded-xl shadow-md border border-border-soft items-center gap-4 hidden sm:flex">
//                 <div className="bg-primary/10 p-3 rounded-full">
//                   <i className="fa-solid fa-user-graduate text-primary text-xl"></i>
//                 </div>
//                 <div>
//                   <p className="text-foreground font-bold text-lg">100%</p>
//                   <p className="text-muted text-xs font-bold">Passing Rate</p>
//                 </div>
//               </div> */}

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import { SCHOOL_NAME } from '../utils/constants';

// import image6 from "../assets/image6.webp"
// import image8 from "../assets/image8.webp"
// import image9 from "../assets/image9.webp"
// import { IMAGE7 } from '../constants/constants';


const highlights = [
  { icon: 'fa-chalkboard-user', label: 'Caring Educators' },
  { icon: 'fa-shield-heart', label: 'Safe Campus' },
  { icon: 'fa-book-open-reader', label: 'Holistic Learning' },
];

const collage = [
  {
    // src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop',
    src: '/image7.webp',
    // src: IMAGE7,
    alt: 'Students engaged in classroom learning',
    icon: 'fa-book',
    label: 'Academics',
    className: 'row-span-2 rounded-tl-[2.5rem] rounded-br-[2.5rem]',
  },
  {
    // src: 'https://images.unsplash.com/photo-1526307616774-60d0098f7642?q=80&w=1974&auto=format&fit=crop',
    src: "image6.webp",
    alt: 'Students playing sports on the school field',
    icon: 'fa-futbol',
    label: 'Sports',
    className: 'rounded-tr-[1.75rem] rounded-lg',
  },
  {
    // src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1974&auto=format&fit=crop',
    src: "./image8.webp",

    alt: 'Students working on an art project',
    icon: 'fa-palette',
    label: 'Arts & Craft',
    className: 'rounded-lg',
  },
  {
    // src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1974&auto=format&fit=crop',
    src: "./image9.webp",
    alt: 'Teacher guiding a student at school',
    icon: 'fa-people-group',
    label: 'Campus Life',
    className: 'rounded-bl-[1.75rem] rounded-lg',
  },
];

const Hero: React.FC = () => {
  return (
    <section className="bg-mainBg relative overflow-hidden pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24">
      {/* Signature decorative motif — quiet, low-opacity, hidden on small screens */}
      <svg
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] opacity-[0.06] text-primary hidden lg:block"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M170 20C120 10 60 40 50 100C42 148 80 185 130 180C160 177 178 150 165 125C155 105 125 100 110 118C98 132 105 155 125 158"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-10">
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-5 sm:space-y-6 text-center lg:text-left">
            <h1 className="font-display text-foreground text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.12]">
              Welcome to <br className="hidden sm:block" />
              <span className="text-primary">{SCHOOL_NAME}</span>
            </h1>

            <h2 className="text-foreground/90 text-lg sm:text-xl lg:text-2xl font-semibold">
              Knowledge, Discipline, Excellence.
            </h2>

            <p className="text-muted text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
              Give your child the foundation they deserve. We provide a dynamic
              educational environment focused on academic success, all-round
              student growth, and essential skills for the future.
            </p>

            {/* Icon-led highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              {highlights.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary-hover px-3.5 py-2 text-xs sm:text-sm font-bold"
                >
                  <i className={`fa-solid ${h.icon}`}></i>
                  {h.label}
                </span>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-3 w-full sm:w-auto">
              <a
                href="/#academics-extracurriculars"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-primary hover:bg-primary-hover text-inverse px-8 py-3.5 text-sm sm:text-base font-bold shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                Explore Programs
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Right Column: 4-image school-themed bento collage */}
          <div className="w-full lg:w-1/2">
            {/* <div
              className="grid grid-cols-3 grid-rows-2 gap-2.5 sm:gap-3.5
                         h-[360px] sm:h-[440px] lg:h-[500px]
                         [grid-template-columns:1.3fr_1fr_1fr]"
            > */}
            <div
              className="grid grid-rows-2 gap-2.5 sm:gap-3.5
             h-[360px] sm:h-[440px] lg:h-[500px]
             [grid-template-columns:1.3fr_1fr_1fr]"
            >
              {collage.map((img, idx) => (
                <div
                  key={img.label}
                  className={`group relative overflow-hidden shadow-md border border-border-soft
                    ${img.className}
                    ${idx === 3 ? 'col-span-2' : ''}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    // loading={idx === 0 ? 'eager' : 'lazy'}
                    loading={'eager'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0"></div>
                  <span className="absolute bottom-1.5 left-1.5 sm:bottom-2.5 sm:left-2.5 inline-flex items-center gap-1.5 bg-surface/95 backdrop-blur-sm text-foreground text-[9px] sm:text-xs font-bold px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full shadow-sm">
                    <i className={`fa-solid ${img.icon} text-primary`}></i>
                    <span className="hidden xs:inline">{img.label}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;