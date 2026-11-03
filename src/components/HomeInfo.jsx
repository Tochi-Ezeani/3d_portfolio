import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="max-w-2xl flex flex-col gap-3 neo-brutalism-blue text-white pt-4 pb-12 px-8 mx-5">
    <p className="font-medium text-center sm:text-xl">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="size-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="text-center text-white neo-brutalism-blue sm:text-xl sm:leading-snug px-8 py-4 mx-5">
      Hi, I am <span className="font-semibold">Barry</span>
      <br />A Software Engineer from Nigeria
    </h1>
  ),
  2: (
    <InfoBox
      text="I have 3 years of experience as a Software Engineer and I have picked up a lot of skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="I have built many projects over the years. Check them out"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
