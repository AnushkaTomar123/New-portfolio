import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef} from 'react';
import "../styles/header.css";
import {Link} from "react-router-dom";

function Header(){
    const linkName = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Contact", path: "/contact" },
      ];
      
   const heading=useRef();
   const timeline=gsap.timeline();
    useGSAP(()=>{
        timeline.from( heading.current,{
            opacity:0,
             y:-20,
             duration:1,
             delay:0.5, 
        })
        .from( "h4",{
            opacity:0,
             y:-20,
             duration:1,
             delay:0.5, 
             stagger:0.3
        })
       
    })
    
    
    
    return(
        <>
            <nav  className=" container-fluid bg-dark d-flex  justify-content-between align-item-center text-light  ">
            <h1 ref={heading} className='text-color' >Anushka Tomar</h1>
              
                <div className='d-flex  text-light gap-3 align-item-center    '>
                    {linkName.map(( navtag, index)=>(
                      <h4  key={index} > <Link className='text-color navLinks' to={navtag.path}>
                      {navtag.name}
                      </Link> </h4>
                    ))}
                    
                   
                
               </div>
            </nav>
           
        </>
    )
}
export default Header;