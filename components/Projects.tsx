import axios from 'axios';
import useSWR, { Fetcher } from 'swr';
import ImageWithFallback from '../lib/ImageWithFallback';
import FallbackImage from '../public/images/fallback.png';

interface IProject {
  name: string;
  description?: string;
  url: string;
  homepageUrl: string;
  createdAt: string;
}

const fetcher: Fetcher<IProject[]> = (url: string) =>
  axios.get(url).then(res => res.data);

const Projects = () => {
  const { data, error } = useSWR<IProject[], Error>('/api/projects', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <section id="projects" className="py-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-2xl font-title mb-8">
            Projects Peek
          </h1>
          <div className="flex flex-wrap -m-4">
            {data ? (
              data?.map(project => (
                <div className="p-4 lg:w-1/3" key={project.name}>
                  <div className="card w-96 h-[28rem] bg-base-100 shadow-xl hover:shadow hover:rounded-none rounded-bl-3xl rounded-tr-3xl rounded-br-none rounded-tl-none duration-300">
                    <ImageWithFallback
                      src={`https://raw.githubusercontent.com/Ref-Bit/${project.name}/master/public/showcase.png`}
                      fallbackSrc={FallbackImage}
                      width={750}
                      height={750}
                      quality={100}
                      objectFit="cover"
                      alt={`${project.name}-showcase`}
                    />
                    <div className="card-body">
                      <h2 className="card-title font-title">{project.name}</h2>
                      <p className="text-start">{project.description}</p>
                      <div className="card-actions justify-end">
                        <a
                          href={project.homepageUrl || project.url}
                          title="View Demo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            clipRule="evenodd"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current w-8 h-8 text-base"
                          >
                            <path
                              d="m22 5c0-.478-.379-1-1-1h-18c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1h18c.478 0 1-.379 1-1zm-6.5 13.5h-12v-10h12zm1.5 0v-10.5c0-.478-.379-1-1-1h-12.5v-1.5h17v13zm-6.518-4.943v1.243c0 .414.336.75.75.75.415 0 .75-.336.75-.75 0-.715 0-2.335 0-3.05 0-.414-.335-.75-.75-.75-.714 0-2.318 0-3.033 0-.414 0-.75.336-.75.75s.336.75.75.75h1.219l-3.198 3.198c-.293.293-.293.768 0 1.061.292.292.767.292 1.06 0z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </a>
                        <a
                          href={project.url}
                          title="Git Repo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-current w-7 h-7 text-primary"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="mx-auto pt-6">
                <p className="text-red-500 text-lg">
                  Something went wrong. Please try again later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
