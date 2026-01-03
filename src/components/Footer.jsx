const Footer = () => {
    return (  
        <section className="px-5 md:px-10 lg:px-18 py-13">
            <div className="flex justify-center py-3">
                <img src="/stears-logo-2.svg" alt="logo" />
            </div>
            <div className="border-y border-y-[#4b5563] py-8">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="md:mx-5">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h2 className="text-white text-lg pb-2 font-semibold">
                                    Company
                                </h2>
                                <div className="space-y-2">
                                    <p>
                                        <a href="" className="text-[#4b5563] text-md font-semibold">About</a>
                                    </p>
                                    <p>
                                        <a href="" className="text-[#4b5563] text-md font-semibold">Careers</a>
                                    </p>
                                    <p>
                                        <a href="" className="text-[#4b5563] text-md font-semibold">Contract</a>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-white text-lg pb-2 font-semibold">
                                    Legal
                                </h2>
                                <div className="space-y-2">
                                    <p>
                                        <a href="" className="text-[#4b5563] text-md font-semibold">Privacy</a>
                                    </p>
                                    <p>
                                        <a href="" className="text-[#4b5563] text-md font-semibold">Terms</a>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-white text-lg pb-2 font-semibold">
                                    Products
                                </h2>
                                <div className="space-y-2">
                                    <p>
                                        <a href="" className="text-[#4b5563] text-md font-semibold">Stears Platform</a>
                                    </p>
                                    <p>
                                        <a href="" className="text-[#4b5563] text-md font-semibold">Open data:African Election Tracker</a>
                                    </p>
                                    <p>
                                        <a href="" className="text-[#4b5563] text-md font-semibold">Open data:African Democracy</a>
                                    </p>
                                    <p>
                                        <a href="" className="text-[#4b5563] text-md font-semibold">Open data:Nigeria 2023</a>
                                    </p>                          
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:px-5 space-y-4">
                        <h1 className="text-white text-lg md:text-2xl font-semibold">
                            About Stears
                        </h1>
                        <p className="text-white text-sm md:text-md font-semibold">
                            Stears is Africa’s most comprehensive financial database and source of market intelligence for global funds investing in Africa.
                        </p>
                        <p className="text-[#4b5563] text-sm md:text-md font-semibold">
                            Copyright © Stears Information Limited 2025 All rights reserved. This material, and other digital content on this website, may not be reproduced, published, broadcast, rewritten or redistributed in whole or in part without written permission from Stears.
                        </p>
                        <div className="flex items-center space-x-5">
                            <a href="">
                                <img src="/instagram-img.svg" alt="investment" className="w-4 md:w-6" />
                            </a>
                            <a href="">
                                <img src="/x-img.svg" alt="x" className="w-4 md:w-6" />
                            </a>
                            <a href="">
                                <img src="/linkedin.svg" alt="linkedin" className="w-4 md:w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex space-x-3 justify-center items-center pt-7">
                <p className="text-[#4b5563] text-md md:text-lg font-semibold">
                    <a href="">
                        Privacy Policy
                    </a>
                </p>
                <p className="text-[#4b5563] text-md md:text-lg font-semibold">
                    <a href="">
                        Terms of use
                    </a>
                </p>
                <p className="text-[#4b5563] text-md md:text-lg font-semibold">
                    <a href="">
                        Contact
                    </a> 
                </p>
            </div>
        </section>
    );
}
 
export default Footer;