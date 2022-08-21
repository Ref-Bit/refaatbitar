import Image from 'next/image';
import { AboutImage } from '../public/images';

const About = () => {
  return (
    <section id="about">
      <div className="py-16 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[90vh]">
          <div className="relative z-10 mx-auto left-0 bottom-10 lg:py-16 lg:left-16 lg:bottom-8">
            <div className="relative h-64 sm:h-80">
              <Image
                src={AboutImage}
                alt="about"
                className="rounded-lg shadow-2xl duration-300"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div className="relative flex items-center bg-base-300 rounded-lg">
            <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 bg-base-300 lg:block lg:-left-12 rounded-lg"></span>
            <div className="p-8 sm:p-16">
              <h2 className="text-2xl font-title sm:text-4xl">About Me</h2>

              <p className="text-base lg:text-lg pt-4 pb-6 leading-relaxed">
                I'm a
                <a
                  href="https://en.wikipedia.org/wiki/Mechatronics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-indigo-600 px-1 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                >
                  mechatronics
                </a>
                engineer with an experience in Embedded Systems programming and
                Industrial 3D design. Currently, I'm working in the Web
                Development field, particularly with React and Nodejs powered
                with Typescript.
                <br />
                <br /> Also, I have worked previously with PHP (Laravel,
                WordPress), Vuejs, and Svelte. In addition, I built my DevOps
                skills using tools such as Git, Docker, Kubernetes, and Google
                Cloud (Dialogflow). Moreover, I use MySQL daily to create custom
                reports in platforms like Grafana and develop API services
                between CRMs.
              </p>
              <button className="btn btn-primary gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-7 md:w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092zm-4 10h3v-4h2v4h3l-4 4-4-4z" />
                </svg>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
