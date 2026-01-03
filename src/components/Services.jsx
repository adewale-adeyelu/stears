import { Briefcase, Globe, Landmark, UserCog } from "lucide-react";

const Services = () => {
    return (  
        <section className="bg-[#f3f4f6] py-10 px-4 md:px-10 lg:px-18">
            <h1 className="text-[#000000] font-semibold text-md md:text-2xl text-center xl:text-center md:text-left">
                Accurate and actionable intelligence for African fund managers, corporates and service providers
            </h1>
            <div className="grid md:grid-cols-2 gap-8 items-center py-7">
                <div className="bg-white shadow-xl p-5 space-y-2">
                    <div className="flex items-center space-x-2">
                        <Briefcase />
                        <h1 className="text-[#000000] font-semibold text-md md:text-xl">
                            Private Equity
                        </h1>
                    </div>
                    <p className="text-black text-sm md:text-md font-semibold">
                        Find the right investment opportunities to deploy and return capital so LPs continue to invest
                    </p>
                </div>
                <div className="bg-white shadow-xl p-5 space-y-2">
                    <div className="flex items-center space-x-2">
                        <Globe />
                        <h1 className="text-[#000000] font-semibold text-md md:text-xl">
                            Global Corporates
                        </h1>
                    </div>
                    <p className="text-black text-sm md:text-md font-semibold">
                        Conduct market analysis and explore industry trends using our exclusive insights
                    </p>
                </div>
                <div className="bg-white shadow-xl p-5 space-y-2">
                    <div className="flex items-center space-x-2">
                        <Landmark />
                        <h1 className="text-[#000000] font-semibold text-sm md:text-md md:text-xl">
                            Investment Banks
                        </h1>
                    </div>
                    <p className="text-black text-sm md:text-md font-semibold">
                        Discover and evaluate new market trends & opportunities in Mergers & Acquisitions
                    </p>
                </div>
                <div className="bg-white shadow-xl p-5 space-y-2">
                    <div className="flex items-center space-x-2">
                        <UserCog />
                        <h1 className="text-[#000000] font-semibold text-md md:text-xl">
                            Service Providers
                        </h1>
                    </div>
                    <p className="text-black text-sm md:text-md font-semibold">
                        Identify market opportunities and stay ahead of competitors using our proprietary analysis and trusted data
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default Services;