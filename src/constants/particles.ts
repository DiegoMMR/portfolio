import { type ISourceOptions } from '@tsparticles/engine'

export const options: ISourceOptions = {
  fullScreen: { enable: false, zIndex: -1 },
  background: {
    color: {
      value: '#283845'
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'repulse'
      }
    },
    modes: {
      repulse: {
        distance: 150,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#DBE4EE'
    },
    links: {
      color: '#DBE4EE',
      distance: 150,
      enable: true,
      opacity: 0.8,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: 'bounce',
      random: false,
      speed: 4,
      straight: false
    },
    number: {
      density: {
        enable: true
      },
      value: 140
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
}
