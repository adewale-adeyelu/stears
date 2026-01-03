const Hero = () => {
    return (  
        <section className="lg:pt-42 md:pt-40 pt-16 px-5 md:px-8 lg:px-18 pb-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-7 mt-18 md:mt-0">
                    <h1 className="text-white font-semibold text-xl lg:text-4xl lg:leading-12">
                        The only data platform exclusively <br className="xl:block hidden" /> focused on Africa
                    </h1>
                    <p className="text-white lg:leading-7 text-sm lg:text-lg">
                        Stears is the most comprehensive financial data and research provider for <br className="xl:block hidden" /> global funds and corporates investing in Africa.
                    </p>
                    <a href="" className="bg-white text-black px-2 md:px-4 py-2 rounded-sm font-semibold font-sans text-sm md:text-lg">
                        Request A Trial
                    </a>
                </div>
                <div>
                    <img src="/stears-hero.png" alt="hero-img" className="w-full" />
                </div>
            </div>
        </section>
    );
}
 
export default Hero;