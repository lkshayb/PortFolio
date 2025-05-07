import { div } from "three/tsl"

export default function Project(){
    function ProdCard(props){
        return(
            <div className="bg-white pb-10 rounded-xl w-100 shadow-md hover:shadow-xl duration-200 ease-in">
                <img src={props.image} className="rounded-t-xl hover:scale-102 duration-200 ease-in hover:rounded-xl" alt="" />
                <span>{props.ProjectName}</span>
            </div>
        )
    }
    return(
        <div className="h-[90vh] bg-violet-100 mb-20">
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
                <ProdCard ProjectName="SlangSter" image="./slangster.png"/>
                <ProdCard ProjectName="IPScout" image="./ipscout.png"/>
                <ProdCard ProjectName="TalkSpace" image="./talkspace.png"/>
            </div>
            
        </div>
    )
}