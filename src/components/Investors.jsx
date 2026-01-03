const Investors = () => {
    return (  
        <section className="py-10 px-5 md:px-8 lg:px-18">
            <h1 className="text-white font-bold text-lg md:text-3xl">
                Our Data Coverage
            </h1>
            <h1 className="text-white font-bold text-lg md:text-3xl pt-5">
                Built for African-focused investors:
            </h1>
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-10 mx-auto">
                <div className="space-y-5">
                    <div>
                        <div className="border-b border-b-[#4b5563] py-5">
                            <div className="grid grid-cols-2 items-center gap-5">
                                <div>
                                    <div className="flex space-x-2 items-center pb-3">
                                        <img src="/deals-img.png" alt="deals" className="w-5" /> 
                                        <h1 className="text-white font-semibold text-md md:text-xl">
                                            Transactions & Deals
                                        </h1>
                                    </div>
                                    <p className="text-white font-semibold text-sm"> 
                                        Gain visibility into market data on<br /> M&A, exits and fundraises across<br /> the African continent
                                    </p>
                                </div>
                                <div>
                                    <div className="flex space-x-2 items-center pb-3">
                                        <img src="chart-img.png" alt="chart" className="w-5" /> 
                                        <h1 className="text-white font-semibold text-md md:text-xl">
                                            Industry Research
                                        </h1>
                                    </div>
                                    <p className="text-white font-semibold text-sm"> 
                                       Analyse  market size &<br /> segmentation, growth,<br /> competition, barriers to entry and regulation 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="border-b border-b-[#4b5563] py-5">
                            <div className="grid grid-cols-2 items-center gap-5">
                                <div>
                                    <div className="flex space-x-2 items-center pb-3">
                                        <img src="company-img.png" alt="company" className="w-5"  />
                                        <h1 className="text-white font-semibold text-md md:text-xl">
                                            Companies
                                        </h1>
                                    </div>
                                    <p className="text-white font-semibold text-sm"> 
                                        Understand and evaluate target<br /> opportunities faster with our<br /> company data and consumer<br /> analysis
                                    </p>
                                </div>
                                <div>
                                    <div className="flex space-x-2 items-center pb-3">
                                        <img src="/analysis-img.png" alt="analys" className="w-5" />
                                        <h1 className="text-white font-semibold text-md md:text-xl">
                                            Macro & Country Risk Analysis
                                        </h1>
                                    </div>
                                    <p className="text-white font-semibold text-sm"> 
                                        Utilise forecasts on currency risk,<br /> interest rates, economic<br /> performance and regulatory risk
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <a href="" className="bg-white text-black px-2 md:px-4 py-2 rounded-sm font-semibold font-sans text-sm md:text-lg">
                            Request A Trial
                        </a>
                    </div>
                </div>
                <div className="pt-8 md:pt-0">
                    <img src="/investor-img-2.png" alt="investor" className="w-full" />
                </div>
            </div>
        </section>
    );
}
 
export default Investors;