import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls,Float, Edges } from '@react-three/drei';
import { div } from 'three/tsl';


function Uelement(props){
    const coreRef = useRef();
    const R1Ref = useRef();
    const R2Ref = useRef();
    const grpRef = useRef();

    useFrame(() => {
        coreRef.current.rotation.y += 0.005;
        R1Ref.current.rotation.x += 0.003;
        R2Ref.current.rotation.z += 0.002;
        grpRef.current.rotation.y += 0.001
    });

    return(
        <group ref={grpRef} >
            <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
                <mesh ref={coreRef}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshStandardMaterial color="#a903fc" emissive="#a903fc" emissiveIntensity={1} />
                    <Edges threshold={15} color="white"/>
                    
                </mesh>
            </Float>

            <mesh ref={R1Ref} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.6, 0.05, 16, 100]} />
                <meshStandardMaterial color="white" opacity={0.5} transparent />
            </mesh>

            <mesh ref={R2Ref} rotation={[0, Math.PI / 4, 0]}>
                <torusGeometry args={[2.1, 0.03, 16, 100]} />
                <meshStandardMaterial color="violet" opacity={0.3} transparent />
            </mesh>

            {[...Array(10)].map((_, i) => (
                <mesh key={i} on position={[
                    Math.sin(i) * 2.5,
                    Math.cos(i * 1.5) * 1.5,
                    Math.sin(i * 2) * 2
                ]}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
                </mesh>
            ))}
        </group>
    )
}

export default function HeroSection({proRef,ContRef}){
    return(
    
        <div className="h-[90vh] py-40 flex justify-between items-center bg-gradient-to-b from-white to-[#f5f5ff]">
            <div className="md:ml-20 ml-5">
                <div>
                    <span className="lg:text-lg text-md font-mono text-violet-500 font-bold">Hello I'm</span>
                </div>
                <div className="lg:my-4 my-2">
                    <span className="lg:text-6xl text-4xl font-sans font-bold">Lakshay Bhatia</span>
                </div>
                <div className="lg:w-auto w-[300px]">
                    <span className="lg:text-xl text-md text-gray-500">A tech enthusiast and web developer specializing in building responsive, user-friendly applications with modern technologies.</span>
                </div>
                <button onClick={() => proRef.current?.scrollIntoView({ behavior: 'smooth' })}  className="bg-violet-500 text-white py-3 rounded px-3 my-8 lg:px-6 hover:bg-violet-400 duration-200 ease-in">
                    <div className="flex items-center text-sm font-semibold">
                        <div>View My Work</div>
                        <div><img src="./arrow-down.png" alt="" className="h-5 pl-2" /></div>
                    </div>
                </button>
            </div>
            <div className='mr-3 h-full lg:w-full w-[400px] md:flex hidden'>
                <Canvas camera={{ position: [0,0, 6], fov: 45 }}>
                    <ambientLight intensity={0.4} />
                    <pointLight position={[10, 10, 10]} />
                    <OrbitControls enableZoom={false} />
                    <Uelement/>
                </Canvas>
            </div>
        </div>
       
    )
}