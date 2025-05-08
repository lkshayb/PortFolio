import { div } from "three/tsl"

export default function Contact({HeroRef}){
    
    
    return(
        <div className="bg-gradient-to-t pl-10 pr-10 pt-10 from-[#010440] to-black h-50">
            <div className=" sm:flex justify-between items-center">
                <div>
                    <div className="text-3xl font-bold font-sans text-white w-auto mb-2"  >
                        <span onClick={() => HeroRef.current?.scrollIntoView({behavior : 'smooth'})}>Lakshay</span><span className="text-blue-400">.</span>
                    </div>
                    <div className="lg:text-lg text-sm text-gray-400">
                        Building the web, one project at a time.
                    </div>
                </div>
                <div className="flex justify-center mb-7 mt-5">
                    <hr className="w-[100%] h-[0.5px] bg-gray-600 border-0" />
                </div>
                <div className="text-gray-300 mr-10">
                    <a href="https://github.com/lkshayb" target="_blank">Github</a>
                    <a className="pl-10" href="https://www.linkedin.com/in/lakshay-bhatia-22340a246" target="_blank">LinkedIn</a>
                    <a className="pl-10" href="mailto:08lakshay@gmail.com" target="_blank">Mail</a>
                </div>
                
            </div>
            <div className="flex justify-center mb-7 mt-5">
                <hr className="w-[100%] h-[0.5px] bg-gray-600 border-0" />
            </div>
        </div>
            
    )
}