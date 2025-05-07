import { div } from "three/tsl"

export default function Project(){
    function ProdCard(props){
        return(
            <div className="bg-white pb-10 rounded-xl w-100 shadow-md hover:shadow-xl duration-200 ease-in">
                <img src={props.image} className="rounded-t-xl hover:scale-102 duration-200 ease-in hover:rounded-xl" alt="" />
                <div className="font-[600] text-xl pl-8 pt-4">
                    <span className="">{props.ProjectName}</span>
                </div>
                <div className=" text-[18px] text-violet-500 pl-8 pt-1 font-[500] ">
                    <span className="">{props.Desc_1}</span>
                </div>
                <div className="text-[15px] pl-8 pr-2 pt-1">
                    <span>{props.Desc_2}</span>
                </div>
                <div className=" text-violet-400 text-[12px] mt-4 ml-7">
                    {props.tech1 ? (<span className="bg-violet-100 py-0.5 px-2 rounded-xl mr-2  ">{props.tech1}</span>) : null}
                    {props.tech2 ? (<span className="bg-violet-100 py-0.5 px-2 rounded-xl mr-2">{props.tech2}</span>) : null}
                    {props.tech3 ? (<span className="bg-violet-100 py-0.5 px-2 rounded-xl mr-2">{props.tech3}</span>) : null}
                    {props.tech4 ? (<span className="bg-violet-100 py-0.5 px-2 rounded-xl mr-2">{props.tech4}</span>) : null}
                </div>
                <div>
                    <button></button>
                </div>
            </div>
        )
    }
    return(
        <div className="h-[110vh] bg-violet-100 mb-20">
            <div className="text-white mb-20">.</div>
            <div className="flex items-center justify-center ">
                <div className="text-center max-w-2xl">
                    <div className="mb-5">
                        <span className="text-4xl font-sans font-bold">My Projects</span>    
                    </div>
                    <div className="flex justify-center mb-11">
                        <hr className="w-24 h-1 bg-violet-400 border-0" />
                    </div>
                    <p className="text-lg font-gray-600">Here are some of my recent projects that showcase my technical skills and problem-solving abilities.</p>
                </div>
                
            </div> 
            <div className="flex gap-5 justify-center mt-10">
                <ProdCard 
                ProjectName="SlangSter" 
                image="./slangster.png" 
                Desc_1="AI-Powered Chatbot with Hindi Slang" 
                Desc_2="Built a fun chatbot using React, TypeScript, and Google Gemini AI, designed to chat in English with a splash of hindi slang. Features real-time messaging and a modern bubble styled interface with Tailwind CSS."
                tech1="React"
                tech2="TypeScript"
                tech3="Tailwind CSS"
                tech4="Google Gemini AI"
                />
                <ProdCard 
                ProjectName="IPScout" 
                image="./ipscout.png" 
                Desc_1="Interactive IP Geolocation Tracker" 
                Desc_2="Developed a React-based web app to retrieve and visualize the geographic location of any IP address using real-time data. Features automatic detection of users' public IP address and an interactive MapLibre GL JS map showing IP-based locations."
                tech1="React"
                tech2="MapLibre GL JS"
                tech3="API Integration"
        
                />
                <ProdCard 
                ProjectName="TalkSpace" 
                image="./talkspace.png" 
                Desc_1="Real-Time Room-Based Chat Application" 
                Desc_2="Built a real-time chat platform where users can join or create chat rooms using WebSockets for seamless communication. Features a dual stack architecture with Node.js + Express.js on the backend and React.js on the frontend."
                tech1="React"
                tech2="Node.js"
                tech3="Express.js"
                tech4="WebSockets"
                />
            </div>
            
        </div>
    )
}