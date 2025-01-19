import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
function Skills() {
 useGSAP(()=>{
  gsap.from("boxes",{
    opacity:0,
    x:400,
    duration:1,
    delay:1
  })
    })
  return (
    <>
      <div className="container-fluid">
        <div className="container row gap-3">
          <h1 className="text-danger">This page is still on working

          </h1>
          <div className="col-4 border border-warning rounded bg-primary boxes "style={{width:400,height:200}} >
            <div className="text-danger">Skills</div>
            <div className="text-success p-5">html</div>
          </div>
          <div className="col-4 border border-warning rounded bg-primary  boxes"style={{width:400,height:200}}>
            <div className="text-danger">Skills</div>
            <div className="text-success p-5">css</div>
          </div>
          <div className="col-4 border border-warning rounded bg-primary  boxes" style={{width:400,height:200}}>
            <div className="text-danger p-5">Skills</div>
            <div className="text-success p-5">react</div>
          </div>
          <div className="col-4 border border-warning rounded bg-primary  boxes"style={{width:400,height:200}} >
            <div className="text-danger p-5">Skills</div>
            <div className="text-success p-5">bootstrap css</div>
          </div>
          <div className="col-4 border border-warning rounded bg-primary  boxes" style={{width:400,height:200}}>
            <div className="text-danger p-5">Skills</div>
            <div className="text-success p-5">figma</div>
          </div>
          <div className="col-4 border border-warning rounded bg-primary  boxes"style={{width:400,height:200}} >
            <div className="text-danger p-5">Skills</div>
            <div className="text-success p-5">Nextjs</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
