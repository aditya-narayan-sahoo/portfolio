import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Developer from "../components/Developer";
import CanvasLoader from "../components/CanvasLoader";
import { workExperiences } from "../constants";
import { calculateDurationInMonths } from "../constants/utils";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>
        <main className="work-container">
          <article className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </article>
          <article className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => {
                const timePeriod = calculateDurationInMonths(
                  item.duration.start,
                  item.duration.end
                );
                return (
                  <div
                    key={index}
                    onClick={() =>
                      setAnimationName(item.animation.toLowerCase())
                    }
                    onPointerOver={() =>
                      setAnimationName(item.animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                    className="work-content_container group"
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img className="w-full h-full" src={item.icon} alt="" />
                      </div>

                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{item.name}</p>
                      <p className="text-sm mb-5">
                        {item.pos} - <span>{timePeriod} months</span>
                      </p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500">
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default Experience;
