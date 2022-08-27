import Image from 'next/image';
import { useContext } from 'react';
import { RiFlashlightLine } from 'react-icons/ri';
import { ThemeContext } from '../context/theme';
import {
  HeroImage,
  NodeBlackLogo,
  NodeWhiteLogo,
  PHPLogo,
  ReactLogo,
  WordPressLogo,
} from '../public/images';
import { motion } from 'framer-motion';
import variants from './variants';
import useReplay from '../hooks/useReplay';

const Hero = () => {
  const { dark } = useContext(ThemeContext);
  const { replay, toggleReplay } = useReplay();

  return (
    <section id="hero" className="py-10 lg:py-20">
      <div className="lg:grid lg:grid-cols-2 lg:gap-5 lg:flex-row flex items-center justify-items-end flex-col-reverse">
        <div className="flex flex-col justify-self-start">
          <motion.h1
            variants={variants(dark).hero.title}
            initial="hidden"
            animate={replay ? 'visible' : 'hidden'}
            className="font-title text-3xl lg:text-7xl py-6 leading-snug"
          >
            Hello World, <br />
            <span>I'm Refaat</span>
          </motion.h1>
          <div className="text-base lg:text-lg">
            <motion.p
              variants={variants().hero.text}
              initial="hidden"
              animate={replay ? 'visible' : 'hidden'}
            >
              A full-stack developer specializing in building:
            </motion.p>
            <motion.ul
              variants={variants().hero.list}
              initial="hidden"
              animate={replay ? 'visible' : 'hidden'}
              className="pt-2 leading-relaxed"
            >
              <motion.li
                className="flex items-center"
                variants={variants().hero.item}
              >
                <RiFlashlightLine className="text-primary mr-2" />
                <p> Websites with React and WordPress</p>
              </motion.li>
              <motion.li
                className="flex items-center"
                variants={variants().hero.item}
              >
                <RiFlashlightLine className="text-primary mr-2" />
                <p>APIs with Nodejs and PHP</p>
              </motion.li>
            </motion.ul>
            <div className="flex items-center gap-3">
              <button className="btn-cta-primary mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2 md:h-5 md:w-5 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
                Hire Me
              </button>
              <button className="btn-cta-secondary mt-6" onClick={toggleReplay}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2 md:h-5 md:w-5 animate-spin"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 12c0 1.042-.154 2.045-.425 3h-2.101c.335-.94.526-1.947.526-3 0-4.962-4.037-9-9-9-1.706 0-3.296.484-4.655 1.314l1.858 2.686h-6.994l2.152-7 1.849 2.673c1.684-1.049 3.659-1.673 5.79-1.673 6.074 0 11 4.925 11 11zm-6.354 7.692c-1.357.826-2.944 1.308-4.646 1.308-4.962 0-9-4.038-9-9 0-1.053.191-2.06.525-3h-2.1c-.271.955-.425 1.958-.425 3 0 6.075 4.925 11 11 11 2.127 0 4.099-.621 5.78-1.667l1.853 2.667 2.152-6.989h-6.994l1.855 2.681z" />
                </svg>
                Another Round?
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <motion.div
            variants={variants().hero.image}
            animate={replay ? 'visible' : 'hidden'}
          >
            <Image src={HeroImage} alt="Hello World" width={500} height={500} />
          </motion.div>
          <motion.div
            variants={variants().hero.logos}
            initial="hidden"
            animate={replay ? 'visible' : 'hidden'}
          >
            <motion.div
              // @ts-ignore
              variants={variants().hero.logo}
              className="absolute top-20 w-10 h-10 lg:w-16 lg:h-16"
            >
              <Image src={PHPLogo} alt="PHP" title="PHP" />
            </motion.div>
            <motion.div
              // @ts-ignore
              variants={variants().hero.logo}
              className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20 w-10 h-10 lg:w-16 lg:h-16"
            >
              <Image src={ReactLogo} alt="Reactjs" title="Reactjs" />
            </motion.div>
            <motion.div
              // @ts-ignore
              variants={variants().hero.logo}
              className="absolute top-20 right-10 w-12 h-12 lg:w-24 lg:h-24"
            >
              <Image
                src={dark ? NodeWhiteLogo : NodeBlackLogo}
                alt="Nodejs"
                title="Nodejs"
              />
            </motion.div>
            <motion.div
              // @ts-ignore
              variants={variants().hero.logo}
              className="absolute bottom-20 right-0 w-10 h-10 lg:w-16 lg:h-16"
            >
              <Image src={WordPressLogo} alt="WordPress" title="WordPress" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
