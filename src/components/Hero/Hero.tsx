"use client";
import { useCallback } from "react";
import Particles from "react-particles";
import { TypeAnimation } from "react-type-animation";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
        className="bg-[#222222] md:h-[65vh] h-[30vh]"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            style: {
              width: "100%",
              height: "75vh",
              position: "absolute",
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#0866FF",
              },
              links: {
                color: "#fff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 70,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="name-title flex justify-center lg:text-[5em] md:text-[3em] text-[1.5em] md:top-[5rem] top-[1.5rem]">
          <h2>i&apos;m Didarul Islam</h2>
          <h2>i&apos;m Didarul Islam</h2>
          <h2>i&apos;m Didarul Islam</h2>
        </div>

        <div className="flex justify-center items-center h-full text-neutral font-bold md:text-4xl text-[20px] lg:mt-14 md:mt-7 -mt-3">
          <TypeAnimation
            sequence={[
              "WINDOWS SERVER",
              4000,
              "REDHAT",
              4000,
              "JUNIPER & HUAWEI",
              4000,
              "CISCO & MIKROTIK",
              4000,
              "BDCOM, VSOL, CDATA, AVEIS & AIR MEDIA",
              4000,
            ]}
            wrapper="span"
            speed={10}
            style={{
              fontSize: "0.5em",
              letterSpacing: ".3em",
              fontWeight: 500,
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
