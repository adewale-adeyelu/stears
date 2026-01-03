const Navbar = () => {
    return (  
        <section className="fixed top-0 w-full z-40 bg-[#000000]">
            <div className="max-w-7xl mx-auto py-3 px-3 md:px-8 lg:px-10">
                <div className="flex justify-between items-center h-14 md:h-16">

                    {/* logo */}
                    <img src="/stears-logo.png" alt="logo" className="w-24 md:w-28" />

                    <div className="flex space-x-3 md:space-x-7 items-center">
                        <a href="" className="hidden md:flex text-white font-semibold font-sans text-sm md:text-lg">
                            About Us
                        </a>
                        <a href="" className="text-white font-semibold font-sans text-sm md:text-lg">
                            Sign In
                        </a>
                        <a href="" className="bg-white text-black px-2 md:px-4 py-1 rounded-sm font-semibold font-sans text-sm md:text-lg">
                            Request A Trial
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Navbar;