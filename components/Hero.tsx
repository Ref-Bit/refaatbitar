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

const Hero = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <section id="hero" className="py-10 lg:py-20">
      <div className="lg:grid lg:grid-cols-2 lg:gap-5 lg:flex-row flex items-center justify-items-end flex-col-reverse">
        <div className="flex flex-col justify-self-start">
          <motion.h1
            variants={variants(dark).hero.title}
            initial="hidden"
            whileInView="visible"
            className="font-title text-3xl lg:text-7xl py-6 leading-snug"
          >
            Hello World, <br />
            <span>I'm Refaat</span>
          </motion.h1>
          <div className="text-base lg:text-lg">
            <motion.p
              variants={variants().hero.text}
              initial="hidden"
              whileInView="visible"
            >
              A full-stack developer specializing in building:
            </motion.p>
            <motion.ul
              variants={variants().hero.list}
              initial="hidden"
              whileInView="visible"
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
            <motion.button
              variants={variants().hero.button}
              initial="hidden"
              whileInView="visible"
              className="btn-cta-primary mt-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2 w-2 md:h-5 md:w-5 animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
              Hire Me
            </motion.button>
          </div>
        </div>
        <div className="relative">
          <motion.div variants={variants().hero.image} whileInView="visible">
            <Image src={HeroImage} alt="Hello World" width={500} height={500} />
          </motion.div>
          <motion.div
            variants={variants().hero.logos}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              variants={variants().hero.logo}
              className="absolute top-20 w-10 h-10 lg:w-16 lg:h-16"
            >
              <Image src={PHPLogo} alt="PHP" title="PHP" />
            </motion.div>
            <motion.div
              variants={variants().hero.logo}
              className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20 w-10 h-10 lg:w-16 lg:h-16"
            >
              <Image src={ReactLogo} alt="Reactjs" title="Reactjs" />
            </motion.div>
            <motion.div
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
