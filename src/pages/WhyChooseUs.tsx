// import React from 'react';

// const reasons = [
//   { icon: 'fa-user-tie', title: 'Certified Faculty', desc: 'Trained, background-verified teachers with an average tenure of 8+ years.' },
//   { icon: 'fa-microscope', title: 'STEM-Ready Labs', desc: 'Dedicated physics, chemistry, biology, and computer labs on every floor.' },
//   { icon: 'fa-futbol', title: 'Sports & Beyond', desc: 'Football, athletics, and 15+ clubs to build well-rounded personalities.' },
//   { icon: 'fa-bus', title: 'Safe Transport', desc: 'GPS-tracked buses with attendants covering every major neighborhood.' },
// ];

// const WhyChooseUs: React.FC = () => {
//   return (
//     <section className="bg-secondary relative overflow-hidden py-20 lg:py-24">
//       <svg
//         className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] h-[420px] opacity-[0.06] text-gold hidden lg:block"
//         viewBox="0 0 200 200"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M170 20C120 10 60 40 50 100C42 148 80 185 130 180C160 177 178 150 165 125C155 105 125 100 110 118C98 132 105 155 125 158"
//           stroke="currentColor"
//           strokeWidth="10"
//           strokeLinecap="round"
//         />
//       </svg>

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="max-w-2xl mx-auto text-center mb-14">
//           <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-gold px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide mb-5">
//             <i className="fa-solid fa-star"></i>
//             Why Families Choose Us
//           </span>
//           <h2 className="font-display text-inverse text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
//             Built on Trust, <span className="text-gold">Proven Over 25 Years</span>
//           </h2>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//           {reasons.map((r) => (
//             <div key={r.title} className="text-center flex flex-col items-center px-2">
//               <div className="w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mb-5">
//                 <i className={`fa-solid ${r.icon} text-gold text-2xl`}></i>
//               </div>
//               <h3 className="text-inverse font-display font-semibold text-lg mb-2">{r.title}</h3>
//               <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;



import React from 'react';
const reasons = [
  {
    icon: 'fa-user-tie',
    title: 'Certified Faculty',
    desc: 'Trained, background-verified teachers dedicated to every student\u2019s growth.',
    color: 'primary',
  },
  {
    icon: 'fa-microscope',
    title: 'Well-Equipped Labs',
    desc: 'Dedicated lab spaces that encourage hands-on, experiential learning.',
    color: 'info',
  },
  {
    icon: 'fa-futbol',
    title: 'Sports & Activities',
    desc: 'A range of sports and extracurricular activities that build well-rounded personalities.',
    color: 'success',
  },
  {
    icon: 'fa-shield-heart',
    title: 'Safe Campus',
    desc: 'A secure, well-monitored campus where every child\u2019s safety comes first.',
    color: 'warning',
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  primary: { bg: 'bg-primary-soft', text: 'text-primary' },
  info: { bg: 'bg-info/10', text: 'text-info' },
  success: { bg: 'bg-success/10', text: 'text-success' },
  warning: { bg: 'bg-warning/10', text: 'text-warning' },
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-mainBg relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <svg
        className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] h-[420px] opacity-[0.06] text-primary hidden lg:block"
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
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary-hover px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide mb-5">
            <i className="fa-solid fa-star"></i>
            Why Families Choose Us
          </span>
          <h2 className="font-display text-foreground text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
            Built on Trust, <span className="text-primary">Backed by Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {reasons.map((r) => {
            const c = colorClasses[r.color];
            return (
              <div
                key={r.title}
                className="bg-surface border border-border-soft rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${c.bg} flex items-center justify-center mb-5`}>
                  <i className={`fa-solid ${r.icon} ${c.text} text-xl sm:text-2xl`}></i>
                </div>
                <h3 className="text-foreground font-display font-semibold text-base sm:text-lg mb-2">{r.title}</h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;