import { motion, Variants } from 'framer-motion';

interface Props {
  variants: Variants;
}

const CTAButton = ({ variants }: Props) => {
  return (
    <a href="mailto:refaatbitar@gmail.com">
      <motion.button
        variants={variants}
        initial="hidden"
        whileInView="visible"
        className="btn-cta-primary"
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
    </a>
  );
};

export default CTAButton;
