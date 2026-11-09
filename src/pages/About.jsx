import { skills, experiences } from "../constants";
// import components for the vertical timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

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
          {skills.map((skill, index) => (
            <div className="block-container size-20" key={index}>
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
        {/* vertical timeline component */}
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className="size-full flex justify-center items-center">
                  <img src={experience.icon} alt={experience.company_name} />
                </div>
              }
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
              }}
              className="object-contain"
            >
              <div>
                <h3 className="font-poppins font-semibold text-xl text-black">
                  {experience.title}
                </h3>
                <div className="font-medium text-base text-black-500 m-0">
                  {experience.company_name}
                </div>
              </div>
              <ul className="list-disc space-y-2 ml-5 my-5">
                {experience.points.map((point, index) => (
                  <li
                    key={index}
                    className="font-normal text-sm text-black/50 pl-1"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
