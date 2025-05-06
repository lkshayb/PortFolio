export default function About(){
    return(
        <div className="h-[90vh] flex-col">
            <div className="text-white mb-20">.</div>

            <div className="flex items-center justify-center ">
                <div className="text-center max-w-2xl">
                    <div className="mb-5">
                        <span className="text-4xl font-sans font-bold">About Me</span>    
                    </div>
                    <div className="flex justify-center mb-13">
                        <hr className="w-24 h-1 bg-violet-400 border-0" />
                    </div>
                    <p className="text-lg font-gray-600">I'm Lakshay Bhatia, an aspiring developer with a strong interest in AI, machine learning and web technologies. I'm passionate about creating elegant solutions to complex problems and continuously learning new technologies.</p>
                </div>
            </div>

            <div className="rounded-lg shadow-lg hover:shadow-2xl duration-200 ease-in w-50 p-10">
                Education
            </div>
        </div>
    )
}