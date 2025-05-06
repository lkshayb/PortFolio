

export default function Navbar({aboutRef,proRef,SkillRef,ContRef,HeroRef}){
 
    return(
        <div className="sticky top-0 md:px-20 px-5 py-4 flex justify-between items-center shadow backdrop-filter backdrop-blur-sm bg-opacity-60 z-50">
            <div className="text-3xl font-bold font-sans text-violet-500 cursor-pointer"  >
                <span onClick={() => HeroRef.current?.scrollIntoView({behavior : 'smooth'})}>Lakshay</span><span className="text-blue-400">.</span>
            </div>
            <div className="hidden md:flex">

                <button onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-4 text-xl font-semibold hover:text-violet-500 duration-200 ease-in cursor-pointer">
                    About
                </button>

                <button 
                onClick={() => proRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 text-xl font-semibold hover:text-violet-500 duration-200 ease-in cursor-pointer">
                    Projects
                </button>

                <button 
                onClick={() => SkillRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 text-xl font-semibold hover:text-violet-500 duration-200 ease-in cursor-pointer">
                    Skills
                </button>

                <button 
                onClick={() => ContRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 text-xl font-semibold hover:text-violet-500 duration-200 ease-in cursor-pointer">
                    Contact
                </button>
            </div>
            <div className="hidden md:flex">
                <button>
                    <a href="https://github.com/lkshayb" target="_blank">
                        <img src="./github.png" className="h-7 cursor-pointer hover:scale-110 duration-200 ease-in" />
                    </a>
                </button>
                <button>
                    <a href="https://www.linkedin.com/in/lakshay-bhatia-22340a246" target="_blank">
                        <img src="./linkedin-logo.png" className="h-7 px-3 cursor-pointer hover:scale-110 duration-200 ease-in" />
                    </a>
                    
                </button>
                <button >
                    <a href="mailto:08lakshay@gmail.com" target="_blank">
                        <img src="./apple.png" className="h-7 cursor-pointer hover:scale-110 duration-200 ease-in" />
                    </a>
                </button>
            </div>
            <div className="flex md:hidden">
                <img src="hamburger.png" className="h-7" alt="" />
            </div>
        </div>
    )
}