import { Globe, Search, TrendingUp } from "lucide-react";

const Empowerment = () => {
    return (  
        <section className="bg-[#f3f4f6] px-5 md:px-10 lg:px-18 py-10">
            <h1 className="text-2xl font-bold text-[#000000]">
                We empower our customers to
            </h1>
            <div className="grid md:grid-cols-3 gap-8 items-center py-7">
                <div className="space-y-2">
                    <div className="flex space-x-2 items-center">
                        <TrendingUp />
                        <h1 className="text-lg md:text-xl font-bold text-[#000000]">
                            Evaluate investments opportunities
                        </h1>
                    </div>
                    <p className="text-black font-semibold textmdm">
                        Stears helps you discover which sectors are growing <br /> and how much capital has been invested over time <nr /> by industry, vertical, deal type, and more.
                    </p>
                </div>
                <div className="space-y-2">
                    <div className="flex space-x-2 items-center">
                        <Globe />
                        <h1 className="text-lg md:text-xl font-bold text-[#000000]">
                            Identify macro & industry trends
                        </h1>
                    </div>
                    <p className="text-black font-semibold textmdm">
                        Stears’ Country Risk helps you put your <br /> opportunities in broader market context by letting <br /> you see how African economies are performing.
                    </p>
                </div>
                <div className="space-y-2">
                    <div className="flex space-x-2 items-center">
                        <Search />
                        <h1 className="text-lg md:text-xl font-bold text-[#000000]">
                            Conduct market analysis
                        </h1>
                    </div>
                    <p className="text-black font-semibold textmdm">
                        Stears’ exclusive research allows you to monitor, <br /> analyse and understand promising trends shaping <br /> markets
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default Empowerment;