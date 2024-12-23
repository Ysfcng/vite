import { useGSAP } from "@gsap/react";
import {heroVideo,smallHeroVideo} from "../utils"
import gsap from "gsap";
import { useState,useEffect } from "react";

const Hero=()=> {
    let [videoSrc,setVideoSrc]=useState(window.innerWidth<760?
        smallHeroVideo:heroVideo
    )
    const handleVideoSrcSet=()=>{
        if(window.inner<760)
            setVideoSrc(smallHeroVideo)
        else
        setVideoSrc(heroVideo)
    }
    useEffect(()=>{
        window.addEventListener("resize",handleVideoSrcSet)
        return()=>{window.removeEventListener("resize",handleVideoSrcSet)}
    })
    useGSAP(()=>{
        gsap.to("#hero",{
            opacity:1,
            delay:2
        })
        gsap.to("#cta",{opacity:1,y:-50,delay:1.5})
    },[])
    return <section className="w-full nav-height bg-black position-relative ">
<div className="h-5/6  w-full flex-center flex-col">

<p className="hero-title" id="hero">Iphone  15 pro</p>
<div className="md:w-10/12 w-9/12">
<video className="pointer-events-none" muted playsInline={true} autoPlay key={videoSrc}>
    <source src={videoSrc} type="video/mp4" />
</video>
</div>
</div>
<div id="cta"
className="flex flex-col items-center opacity-0 translate-y-20">
    <a href="#highlights" className="btn">Buy</a>
    <p className="font-normal text-xl">From $199/month or $999</p>
</div>
    </section>
}
export default Hero;