import techStackData from '../../../../data/TechStack.data';

import './TechStack.component.css';

const techStackLogo = () => (
  <>
    {[...techStackData, ...techStackData,].map((tech, index) => (
      <div
        key={index < techStackData.length ? index : index - techStackData.length + 10}
        className="text-4xl text-white flex-shrink-0"
      >
        {tech.logo}
      </div>
    ))}
  </>
);

const TechStack = (): JSX.Element => {
  return (
    <div className="w-full mx-auto overflow-hidden relative">
      <div className="flex w-max gap-6 whitespace-nowrap scrollAnimation">
        {techStackLogo()}
      </div>
    </div>
  );
};

export default TechStack;
