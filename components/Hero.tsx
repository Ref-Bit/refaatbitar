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

const Hero = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <section id="hero" className="py-10 lg:py-20">
      <div className="lg:grid lg:grid-cols-2 lg:gap-5 lg:flex-row flex items-center justify-items-end flex-col-reverse">
        <div className="flex flex-col justify-self-start">
          <h1 className="font-title text-3xl lg:text-7xl py-6 leading-snug">
            Hello World, <br />
            <span>I'm Refaat</span>
          </h1>
          <div className="text-base lg:text-lg">
            <p>A full-stack developer specializing in building:</p>
            <ul className="pt-2 leading-relaxed">
              <li className="flex items-center">
                <RiFlashlightLine className="text-indigo-500 mr-2" />
                <p> Websites with React and WordPress</p>
              </li>
              <li className="flex items-center">
                <RiFlashlightLine className="text-indigo-500 mr-2" />
                <p>APIs with Nodejs and PHP</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
          <Image src={HeroImage} alt="Hello World" />
          <div className="absolute top-20 w-10 h-10 lg:w-16 lg:h-16">
            <Image src={PHPLogo} alt="PHP" title="PHP" />
          </div>
          <div className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20 w-10 h-10 lg:w-16 lg:h-16">
            <Image src={ReactLogo} alt="Reactjs" title="Reactjs" />
          </div>
          <div className="absolute top-20 right-10 w-12 h-12 lg:w-24 lg:h-24">
            <Image
              src={dark ? NodeWhiteLogo : NodeBlackLogo}
              alt="Nodejs"
              title="Nodejs"
            />
          </div>
          <div className="absolute bottom-20 right-0 w-10 h-10 lg:w-16 lg:h-16">
            <Image src={WordPressLogo} alt="WordPress" title="WordPress" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
