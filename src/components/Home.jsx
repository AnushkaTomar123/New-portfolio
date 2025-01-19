import myimg from "../assets/photo.png";
import {useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Home (){
    const imgref=useRef();
    const para=useRef();
    const timeline=gsap.timeline();
    useGSAP(()=>{
        timeline.from(imgref.current,{
            opacity:0,
            scale:0.5,
            delay:2,
            duration:1
        })
        .from(para.current,{
            opacity:0,
            duration :1,
            color:"orange",
            ease :"bounce",
           

        })
        gsap.to("body", {
            background: "linear-gradient(to right, rgb(35, 29, 45),  rgb(33, 19, 56), rgb(19, 19, 87))",
            duration:1,
            repeat:-1,
          });
    })
    return(
        <>
        <div className="container-fluid">
            <section className="container p-5">
                <div className="d-flex align-item-center justify-content-center p-5"><img ref={imgref} className="border border rounded-circle" src={myimg} style={{height:300,width:300}} /></div>
                <div><h3 ref={para} className="text-danger text-center text-wrap text">&quot;Hi, I&apos;m Anushka Tomar &quot;
                &quot;A passionate web developer and aspiring software engineer&quot;</h3>
                <h5>
                    </h5></div>
            </section>
        </div>
        </>
    )
}
export default Home;