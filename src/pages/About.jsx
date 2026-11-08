import { skills, experiences } from "../constants";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Barry
        </span>
      </h1>
      <div className="flex flex-col gap-3 text-slate-500 mt-5">
        <p>
          Full Stack Enginner based in Nigeria that specializes in building
          applications using the MERN stack.
        </p>
      </div>
      <div className="flex flex-col py-10">
        <h3 className="subhead-text">My Skills</h3>
        <div className="flex flex-wrap gap-12 mt-16">
          {skills.map((skill) => (
            <div className="block-container size-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  class="size-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        {/* <div className="flex flex-col gap-3 text-slate-500 mt-5">
          <p>
            Full Stack Enginner based in Nigeria that specializes in building
            applications using the MERN stack.
          </p>
        </div> */}
      </div>
      <div className="flex mt-12">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement>
              <div>
                <h3>
                  {experience.title}
                </h3>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
