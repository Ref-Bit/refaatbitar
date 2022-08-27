import { Variants } from 'framer-motion';

export default function (dark?: boolean) {
  return {
    hero: {
      title: {
        hidden: {
          x: '-100vw',
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
      image: <Variants>{
        hidden: {
          rotate: 0,
        },
        visible: {
          rotate: -20,
          transition: { repeat: 3, repeatType: 'reverse', duration: 1 },
        },
      },
      logos: {
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
      logo: {
        hidden: { y: '-1rem' },
        visible: {
          y: 0,
          transition: { repeat: Infinity, repeatType: 'reverse', duration: 1 },
        },
      },
    },
  };
}
