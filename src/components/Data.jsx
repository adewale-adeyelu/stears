const Data = () => {
    return (  
        <section className="bg-white px-3 md:px-10 lg:px-18 py-10">
            <h1 className="text-black text-2xl font-semibold">
                Open Data
            </h1>
            <h1 className="text-black text-3xl font-bold pt-3">
                Data collection to understand citizen sentiment
            </h1>
            <div className="grid lg:grid-cols-2 gap-10 items-center py-5">
                <div>
                    <p className="text-[#4b5563] font-semibold text-lg py-5">
                        Stears conducted a multi-dimensional assessment of trust levels in key national institutions, generating detailed profiles for policy development and institutional reform. The data was used to design a public index that evaluates consumer sentiments and expectations in response to political shifts and policy advancements.
                    </p>
                    <h1 className="text-black font-bold text-2xl">
                        Results
                    </h1>
                    <div className="py-5 space-y-2 px-3">
                        <div className="flex space-x-3">
                            <div className="border w-2 h-2 border-black mt-3 bg-black rounded-full"></div>
                            <p className="text-lg text-black">
                                Approval Rating Index which measured the country’s approval of policy implementations
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <div className="border w-2 h-2 border-black mt-3 bg-black rounded-full"></div>
                            <p className="text-lg text-black">
                                Consumer Expectations Index, which monitors how Nigerians feel about the future
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <div className="border w-2 h-2 border-black mt-3 bg-black rounded-full"></div>
                            <p className="text-lg text-black">
                                Confidence Score, which gauges Nigerian’s confidence and trust in institutions
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <a href="" className="bg-black text-white px-2 md:px-5 py-2 rounded-sm font-semibold font-sans text-sm md:text-lg">
                            Learn More
                        </a>
                    </div>
                </div>
                <div>
                    <img src="/sentiment-img.jpg" alt="sentiment" className="w-full" />
                </div>
            </div>
        </section>
    );
}
 
export default Data;