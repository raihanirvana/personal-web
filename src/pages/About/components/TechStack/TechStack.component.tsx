import React from 'react'

import techStackData from '../../../../data/TechStack.data';

import { TechStackProps } from './TechStack.component.type'
import './TechStack.component.css';

const techStackLogo = () => (
  <React.Fragment>
    {[...techStackData, ...techStackData].map((tech, index) => (
     <div
       key={index < techStackData.length ? index : index - techStackData.length + 10}
        className="text-4xl text-white flex-shrink-0"
      >
        {tech.logo}
      </div>
    ))}
  </React.Fragment>
)

const TechStack = ({ width }: TechStackProps): JSX.Element => {
  return (
    <div className={`w-${width} overflow-hidden relative`}>
      <div className="flex w-max gap-6 whitespace-nowrap scrollAnimation">
        {techStackLogo()}
      </div>
    </div>
  );
};

export default TechStack;
