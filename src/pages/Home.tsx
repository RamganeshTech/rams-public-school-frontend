
import Hero from './Hero'
import About from './About'
import Programs from './Programs'
import InquiryForm from './InquiryForm'

const Home = () => {
    return (
        <main>
            <Hero />

            <About />

            <Programs />
            {/* Inquiry Form Section */}
            <section
                aria-labelledby="home-inquiry-heading"
                className="relative bg-mainBg py-16 md:py-24 overflow-hidden border-t border-border-soft"
            >
                {/* --- Background Decorations (Fills left and right space) --- */}

                {/* Left Side Glow & Rings */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-[30rem] h-[30rem] bg-primary-soft/40 rounded-full blur-[100px] pointer-events-none hidden md:block" aria-hidden="true"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 border-[12px] border-primary-soft/30 rounded-full pointer-events-none hidden lg:block" aria-hidden="true"></div>

                {/* Right Side Glow & Dots */}
                <div className="absolute top-10 right-0 translate-x-1/4 w-[25rem] h-[25rem] bg-primary-soft/30 rounded-full blur-[80px] pointer-events-none hidden md:block" aria-hidden="true"></div>
                <div className="absolute top-20 right-20 gap-2 pointer-events-none hidden lg:flex" aria-hidden="true">
                    <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary/40 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
                </div>

                {/* --- Main Content Area --- */}
                <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-[2px] w-12 bg-primary"></div>
                            <span className="text-primary font-bold uppercase tracking-wider text-sm">
                                We Are Here To Help
                            </span>
                            <div className="h-[2px] w-12 bg-primary"></div>
                        </div>

                        <h2
                            id="home-inquiry-heading"
                            className="text-foreground text-3xl sm:text-4xl font-bold tracking-tight mb-4"
                        >
                            Have an Inquiry?
                        </h2>

                        <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            Whether you want to learn more about our modern curriculum, inquire about the admissions process, or just say hello—please fill out the form below.
                        </p>
                    </div>

                    {/* The Form */}
                    <InquiryForm />
                    {/* <AppDownload /> */}

                </div>
            </section>


        </main>
    )
}

export default Home