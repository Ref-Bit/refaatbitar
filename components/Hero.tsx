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
import {customVariants} from './variants';
import CTAButton from './partials/CTAButton';

const Hero = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <section id="hero" className="py-10 lg:py-20">
      <div className="lg:grid lg:grid-cols-2 lg:gap-5 lg:flex-row flex items-center justify-items-end flex-col-reverse">
        <div className="flex flex-col justify-self-start">
          <motion.h1
            variants={customVariants(dark).hero.title}
            initial="hidden"
            whileInView="visible"
            className="font-title text-3xl lg:text-7xl py-6 leading-snug"
          >
            {`Hello World,`} <br />
            <span>{`I'm Refaat`}</span>
          </motion.h1>
          <div className="text-base lg:text-lg">
            <motion.p
              variants={customVariants().hero.text}
              initial="hidden"
              whileInView="visible"
            >
              A full-stack developer specializing in building:
            </motion.p>
            <motion.ul
              variants={customVariants().hero.list}
              initial="hidden"
              whileInView="visible"
              className="pt-2 mb-6 leading-relaxed"
            >
              <motion.li
                className="flex items-center"
                variants={customVariants().hero.item}
              >
                <RiFlashlightLine className="text-primary mr-2" />
                <p> Websites with React and WordPress</p>
              </motion.li>
              <motion.li
                className="flex items-center"
                variants={customVariants().hero.item}
              >
                <RiFlashlightLine className="text-primary mr-2" />
                <p>APIs with Nodejs and PHP</p>
              </motion.li>
            </motion.ul>
            <CTAButton variants={customVariants().hero.button} />
          </div>
        </div>
        <div className="relative">
          <motion.div variants={customVariants().hero.image} whileInView="visible">
            <Image src={HeroImage} alt="Hello World" width={500} height={500} />
          </motion.div>
          <motion.div
            variants={customVariants().hero.logos}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              variants={customVariants().hero.logo}
              className="absolute top-20 w-10 h-10 lg:w-16 lg:h-16"
            >
              <Image src={PHPLogo} alt="PHP" title="PHP" />
            </motion.div>
            <motion.div
              variants={customVariants().hero.logo}
              className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20 w-10 h-10 lg:w-16 lg:h-16"
            >
              <Image src={ReactLogo} alt="Reactjs" title="Reactjs" />
            </motion.div>
            <motion.div
              variants={customVariants().hero.logo}
              className="absolute top-20 right-10 w-12 h-12 lg:w-24 lg:h-24"
            >
              <Image
                src={dark ? NodeWhiteLogo : NodeBlackLogo}
                alt="Nodejs"
                title="Nodejs"
              />
            </motion.div>
            <motion.div
              variants={customVariants().hero.logo}
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
