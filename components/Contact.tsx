import Image from 'next/image';
import ContactImage from '../public/images/contact.png';
import { motion } from 'framer-motion';
import {customVariants} from './variants';
import CTAButton from './partials/CTAButton';

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start px-5">
          <motion.h1
            variants={customVariants().contact.title}
            initial="hidden"
            whileInView="visible"
            className="flex-grow sm:pr-16 text-2xl md:text-4xl font-title py-6"
          >
            {`Let's Work Together!`}
          </motion.h1>
          <CTAButton variants={customVariants().contact.button} />
        </div>
        <div className="relative">
          <motion.div variants={customVariants().contact.image} whileInView="visible">
            <Image
              src={ContactImage}
              width={500}
              height={500}
              alt={`contact-hero`}
            />
          </motion.div>
          <motion.div
            variants={customVariants().hero.logos}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: '0px 0px 400px 0px' }}
          >
            <motion.div
              variants={customVariants().hero.logo}
              className="absolute top-24 z-10 "
            >
              <a
                href="https://github.com/Ref-Bit"
                title="Github"
                rel="noopener noreferrer"
                target="_blank"
                className="text-base hover:text-primary transition duration-300"
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6 md:w-10 md:h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </motion.div>
            <motion.div
              variants={customVariants().hero.logo}
              className="absolute bottom-10 left-10 lg:bottom-20"
            >
              <a
                href="https://www.facebook.com/rsvws"
                title="Facebook"
                rel="noopener noreferrer"
                target="_blank"
                className="text-base hover:text-primary transition duration-300"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 md:w-10 md:h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </motion.div>
            <motion.div
              variants={customVariants().hero.logo}
              className="absolute top-24 right-0"
            >
              <a
                href="https://www.instagram.com/refaatbitar"
                title="Instagram"
                rel="noopener noreferrer"
                target="_blank"
                className="text-base hover:text-primary transition duration-300"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 md:w-10 md:h-10"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </motion.div>
            <motion.div
              variants={customVariants().hero.logo}
              className="absolute bottom-20 right-0"
            >
              <a
                href="https://www.linkedin.com/in/refaat-bitar"
                title="LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
                className="text-base hover:text-primary transition duration-300"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-6 h-6 md:w-10 md:h-10"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
