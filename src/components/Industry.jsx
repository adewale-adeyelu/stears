const Industry = () => {
    return (  
        <section className="bg-white px-3 md:px-10 lg:px-18 py-10">
            <h1 className="text-2xl font-bold text-[#000000]">
                Explore our Industry Research
            </h1>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center py-10">
                <div className="flex flex-col lg:flex-row space-x-5 cursor-pointer">
                    <div>
                        <img src="/flows-img.png" alt="flows" className="w-full" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-[#000000]">
                            How Clients Finance Flows Through Africa
                        </h1>
                        <p className="black text-sm mt-2">
                            stears research | <span className="text-[#4b5563]">Dec 12, 2025</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row space-x-5 cursor-pointer">
                    <div>
                        <img src="/flows-img.png" alt="flows" className="w-full" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-[#000000]">
                            Movie Production Industry in Southern and West Africa
                        </h1>
                        <p className="black text-sm mt-2">
                            stears research | <span className="text-[#4b5563]">Dec 10, 2025</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row space-x-5 cursor-pointer">
                    <div>
                        <img src="/flows-img.png" alt="flows" className="w-full" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-[#000000]">
                            African GP fundraising is becoming tougher
                        </h1>
                        <p className="black text-sm mt-2">
                            stears research | <span className="text-[#4b5563]">Dec 5, 2025</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row space-x-5 cursor-pointer">
                    <div>
                        <img src="/flows-img.png" alt="flows" className="w-full" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-[#000000]">
                            Corporate Legal Services in West Africa Market Trends
                        </h1>
                        <p className="black text-sm mt-2">
                            stears research | <span className="text-[#4b5563]">Dec 3, 2025</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Industry;