import { motion } from "motion/react";
import { useRef } from "react";
import "../styles/about.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function About() {
  const box = useRef();
  const line = useRef();
  const head = useRef();
  useGSAP(()=>{
    gsap.timeline().to("body", {
    background: "linear-gradient(to right, rgb(35, 29, 45),  rgb(33, 19, 56), rgb(19, 19, 87))",
    duration:1,
    repeat:1,
  })
  .from(head.current,{
    y:-50,
    color:"orange",
    backgroundColor:"black",
    duration:1,
    scale:0,
    
  })
  .from(line.current,{
    opacity:0,
    scale:0,
    rotate:360,
    duration:1,
    delay:1
  })
  .to(line.current,{
    x:100,
    y:100,
    yoyo: true
  })
  
})
  return (
    <>
      <div className="container-fluid ">
      <h2 ref={head} className="bg-black text-danger text-center p-5">About me</h2>
        <section className="container d-flex justify-content-center align-item-center  " ref={box}>
          
          <motion.div  drag dragConstraints={box} ref={line} >
            <p  className="text-center text-wrap word-wrap-break border border-warning shadow rounded para" style={{width:600}}>
              Hi, I&apos;m Anushka Tomar, a passionate third-year student
              pursuing an integrated B.Tech in IT. My journey in technology has
              been a mix of curiosity and creativity, which has driven me to
              explore various domains of development and programming. I
              specialize in frontend development and enjoy crafting seamless and
              interactive user experiences using HTML, CSS, JavaScript, and
              React. Alongside this, I have a solid foundation in C++ and a
              growing interest in Python and Java, which I am actively learning
              to enhance my backend and problem-solving skills. Beyond
              academics, I am a dedicated learner who thrives on overcoming
              challenges. While I understand concepts well, I&apos;m currently
              working on building my logic and applying my knowledge to solve
              real-world problems effectively. My goal is to secure a position
              in a top MNC by the time I graduate. I&apos;m excited about
              contributing to impactful projects and growing both professionally
              and personally.
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
}
export default About;
