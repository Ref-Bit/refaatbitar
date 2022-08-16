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
    <div className="grid grid-cols-2 gap-5 p-6 items-center justify-evenly">
      <div>
        <h1 className="font-title text-7xl py-6 leading-snug">
          Hello World, <br />
          <span className="">I'm Refaat</span>
        </h1>
        <div className="text-lg">
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
      <div className="relative w-[500px] h-[500px] mx-auto">
        <Image src={HeroImage} alt="Hello World" />
        <div className="absolute top-20 w-16 h-16">
          <Image src={PHPLogo} alt="PHP" title="PHP" />
        </div>
        <div className="absolute bottom-20 left-20 w-16 h-16">
          <Image src={ReactLogo} alt="Reactjs" title="Reactjs" />
        </div>
        <div className="absolute top-20 right-10 w-24 h-24">
          <Image
            src={dark ? NodeWhiteLogo : NodeBlackLogo}
            alt="Nodejs"
            title="Nodejs"
          />
        </div>
        <div className="absolute bottom-20 right-0 w-16 h-16">
          <Image src={WordPressLogo} alt="WordPress" title="WordPress" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
