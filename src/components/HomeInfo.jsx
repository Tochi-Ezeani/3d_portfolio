const renderContent = {
  1: (
    <h1 className="text-center text-white neo-brutalism-blue sm:text-xl sm:leading-snug px-8 py-4 mx-5">
      Hi, I am <span className="font-semibold">Barry</span>
      <br />
      A Software Engineer from Nigeria
    </h1>
  ),
  2: <h1>2</h1>,
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const InfoBox = ({ text, link, btnText }) => (
  { text }
)

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
