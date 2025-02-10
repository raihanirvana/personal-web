import {
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiReactbootstrap,
  SiGraphql,
  SiDaisyui,
  SiJest,
  SiTypescript,
  SiVercel,
  SiReact
} from 'react-icons/si';

import { TechStack } from '../pages/About/components/TechStack.component.type';

const techStackData: TechStack = [
  { key: 1, logo: <SiExpress /> },
  { key: 2, logo: <SiNextdotjs /> },
  { key: 3, logo: <SiTailwindcss /> },
  { key: 4, logo: <SiReactbootstrap /> },
  { key: 5, logo: <SiGraphql /> },
  { key: 6, logo: <SiDaisyui /> },
  { key: 7, logo: <SiJest /> },
  { key: 8, logo: <SiTypescript /> },
  { key: 9, logo: <SiVercel /> },
  { key: 10, logo: <SiReact /> },
];

export default techStackData;