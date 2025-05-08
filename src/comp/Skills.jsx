export default function Skills(){
    return(
        <div className="h-auto flex-col mb-20">
            <div className="text-white mb-20">.</div>

            <div className="flex items-center justify-center ">
                <div className="text-center max-w-2xl">
                    <div className="mb-5">
                        <span className="text-4xl font-sans font-bold">Technical Skills</span>    
                    </div>
                    <div className="flex justify-center mb-7">
                        <hr className="w-24 h-1 bg-violet-400 border-0" />
                    </div>
                   
                    <p className="text-lg font-gray-600">Here's an overview of the technologies and tools I work with.</p>
                    
                </div>
                
            </div>
            <div className=" lg:flex justify-center lg:max-w-none max-w-fit ml-auto mr-auto">

                <div className="text-left shadow-violet-500 ml-5 mr-5 rounded-xl shadow-lg hover:shadow-2xl duration-200 ease-in lg:w-100 w-70  py-10 px-5 mt-10 max-w-xl text-left bg-gradient-to-b from-white to-gray-100 hover:bg-gradient-to-t duration-400 ease-in">
                    <div className="font-semibold text-xl">Languages</div>
                    <ul class='list-outside list-disc ml-6 mt-5  text-md'>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">TypeScript</span>
                        </li>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">JavaScript</span>
                        </li>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">HTML/CSS</span>
                        </li>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">SQL</span>
                        </li>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">C/C++</span>
                        </li>
                    </ul>
                </div>  

                <div className="text-left lg:ml-0 ml-5 shadow-violet-500 mr-5 rounded-xl shadow-lg hover:shadow-2xl duration-200 ease-in lg:w-100 w-70  py-10 px-5 mt-10 max-w-xl text-left bg-gradient-to-b from-white to-gray-100 hover:bg-gradient-to-t duration-400 ease-in">
                    <div className="font-semibold text-xl">Frontend</div>
                    <ul class='list-outside list-disc ml-6 mt-5  text-md'>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">React.js</span>
                        </li>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">Tailwind CSS</span>
                        </li>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">Vite</span>
                        </li>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">ThreeJS</span>
                        </li>
                        
                    </ul>
                </div>  

                <div className="lg:ml-0 ml-5 text-left shadow-violet-500 mr-5 rounded-xl shadow-lg hover:shadow-2xl duration-200 ease-in lg:w-100 w-70  py-10 px-5 mt-10 max-w-xl text-left bg-gradient-to-b from-white to-gray-100 hover:bg-gradient-to-t duration-400 ease-in">
                    <div className="font-semibold text-xl">Backend</div>
                    <ul class='list-outside list-disc ml-6 mt-5  text-md'>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">Node.js</span>
                        </li>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">Express.js</span>
                        </li>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">WebSockets</span>
                        </li>
                        <li class="text-violet-500 mb-2">
                            <span class="text-gray-700">REST APIs</span>
                        </li>
                        
                    </ul>
                </div>                                  
        </div>      
    </div>
    )
}