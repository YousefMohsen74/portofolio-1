'use client'
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    const initEngine = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };
    
    initEngine();
  }, []);
  
  if (!init) return null;
  
  return (
    <Particles
      id="tsparticles"
      className="absolute translate-z-0 w-full h-full"
      options={{
        fullScreen: { enable: false },
        background: {
            color: { value: '' },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: 'push',
                },
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 90,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: '#e68e2e',
            },
            links: {
                color: '#f5d393',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                random: false,
                speed: 1, // Set a nonzero speed for movement
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 200,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}
    />
  );
};

export default ParticlesContainer;