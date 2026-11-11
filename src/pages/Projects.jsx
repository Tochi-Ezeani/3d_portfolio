import { projects } from "../constants";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="flex flex-col gap-3 text-slate-500 mt-5">
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
      </div>
      <div className="flex flex-wrap gap-16 my-20">
        {projects.map((project) => (
          <div className="w-full lg:w-100" key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="size-1/2 object-contain"
                />
              </div>
            </div>
            <div className='flex flex-col mt-5'>
              <h4>
                {project.name}
              </h4>
              <p>
                {project.description}
              </p>
              <div>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
