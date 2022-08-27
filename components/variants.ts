import { Variants } from 'framer-motion';

export default function (dark?: boolean) {
  return {
    hero: {
      title: {
        hidden: {
          x: -100,
          color: '#6419E6',
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
        },
        visible: {
          x: 0,
          color: dark ? '#FFFFFF' : '#0A0A0A',
          transition: {
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.75,
          },
        },
      },
      text: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        },
      },

      list: {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.75,
            staggerChildren: 0.25,
          },
        },
      },
      item: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },
      button: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 1,
          },
        },
      },
      image: <Variants>{
        hidden: {
          rotate: 0,
        },
        visible: {
          rotate: -20,
          transition: { repeat: 3, repeatType: 'reverse', duration: 1 },
        },
      },
      logos: <Variants>{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.75,
            staggerChildren: 0.25,
          },
        },
      },
      logo: <Variants>{
        hidden: { y: '-1rem' },
        visible: {
          y: 0,
          transition: { repeat: Infinity, repeatType: 'reverse', duration: 1 },
        },
      },
    },
    about: {
      image: {
        hidden: {
          x: -100,
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
        },
        visible: {
          x: 0,
          transition: {
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.75,
          },
        },
      },
      description: {
        hidden: {
          x: 100,
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
        },
        visible: {
          x: 0,
          transition: {
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.75,
          },
        },
      },
    },
  };
}
