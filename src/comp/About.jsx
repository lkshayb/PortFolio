export default function About(){
    return(
        <div className="h-[90vh] flex-col mb-20">
            <div className="text-white mb-20">.</div>

            <div className="flex items-center justify-center ">
                <div className="text-center max-w-2xl">
                    <div className="mb-5">
                        <span className="text-4xl font-sans font-bold">About Me</span>    
                    </div>
                    <div className="flex justify-center mb-11">
                        <hr className="w-24 h-1 bg-violet-400 border-0" />
                    </div>
                    <p className="text-lg font-gray-600">I'm Lakshay Bhatia, an aspiring developer with a strong interest in AI, machine learning and web technologies. I'm passionate about creating elegant solutions to complex problems and continuously learning new technologies.</p>
                    <div className="flex gap-10">
                        <div className="rounded-lg shadow-lg hover:shadow-2xl duration-200 ease-in w-100 py-10 px-5 mt-10 ">
                            <div className="flex items-center gap-3">
                                <div className="text-left pl-5">
                                    <div className="font-semibold text-xl text-mono flex gap-3 items-center">
                                        <div>
                                            <img src="./open-book.png" className="h-10 w-10" alt="" />
                                        </div>
                                        <div>
                                            Education
                                        </div>
                                    </div>
                                    <div  className="mt-2 text-md font-semibold">
                                        <span>Bachelor of Technology</span>
                                    </div>
                                    <div  className=" text-md text-gray-700">
                                        <span>Artificial Intelligence & Machine Learning</span>
                                    </div>
                                    <div  className=" text-md text-gray-700">
                                        <span>Dr. Akhilesh Das Gupta Institute of Professional Studies</span>
                                    </div>
                                    <div  className=" text-[14px] text-gray-500">
                                        <span>2024 – 2028</span>
                                    </div>
                                    <div  className=" text-[14px] text-gray-500">
                                        <span>CGPA: 8.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg shadow-lg hover:shadow-2xl duration-200 ease-in w-100  py-10 px-5 mt-10 max-w-xl text-left">
                            <div className="font-semibold text-xl">My Interests</div>
                            <ul class='list-outside list-disc ml-6 mt-5  text-md'>
                                <li class="text-violet-500 mb-2">
                                    <span class="text-gray-700">Web Development</span>
                                </li>
                                <li class="text-violet-500 mb-2">
                                    <span class="text-gray-700">Artificial Intelligence</span>
                                </li>
                                <li class="text-violet-500 mb-2">
                                    <span class="text-gray-700">Machine Learning</span>
                                </li>
                                <li class="text-violet-500 mb-2">
                                    <span class="text-gray-700">Real-time Applications</span>
                                </li>
                                <li class="text-violet-500 mb-2">
                                    <span class="text-gray-700">UI/UX Design</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    )
}